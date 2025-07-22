package com.unsa.bolsalaboral.api.controllers;

import com.unsa.bolsalaboral.application.services.administrador.InactivarOfertaService;
import com.unsa.bolsalaboral.application.services.administrador.RegistrarOfertaService;
import com.unsa.bolsalaboral.application.services.estudiante.VerOfertasService;
import com.unsa.bolsalaboral.domain.models.OfertaLaboral;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/ofertas")
public class OfertaController {

    private final RegistrarOfertaService registrarOfertaService;
    private final VerOfertasService verOfertasService;
    private final InactivarOfertaService inactivarOfertaService;

    public OfertaController(RegistrarOfertaService registrarOfertaService,
                            VerOfertasService verOfertasService,
                            InactivarOfertaService inactivarOfertaService) {
        this.registrarOfertaService = registrarOfertaService;
        this.verOfertasService = verOfertasService;
        this.inactivarOfertaService = inactivarOfertaService;
    }

    /**
     * Lista todas las ofertas laborales activas.
     */
    @GetMapping
    public ResponseEntity<List<OfertaLaboral>> listarActivas() {
        return ResponseEntity.ok(verOfertasService.ejecutar());
    }

    /**
     * Registra una nueva oferta laboral para la empresa indicada.
     */
    @PostMapping("/{empresaId}")
    public ResponseEntity<OfertaLaboral> registrar(@PathVariable UUID empresaId,
                                                   @RequestBody OfertaLaboral oferta) {
        OfertaLaboral registrada = registrarOfertaService.ejecutar(empresaId, oferta);
        return ResponseEntity.ok(registrada);
    }

    /**
     * Marca como inactiva una oferta laboral.
     */
    @PutMapping("/{id}/inactivar")
    public ResponseEntity<OfertaLaboral> inactivar(@PathVariable UUID id) {
        return inactivarOfertaService.ejecutar(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
}
