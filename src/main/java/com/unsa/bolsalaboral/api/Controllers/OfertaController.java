package com.unsa.bolsalaboral.api.Controllers;

import com.unsa.bolsalaboral.application.services.administrador.*;
import com.unsa.bolsalaboral.domain.models.Oferta;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/api/ofertas")
public class OfertaController {

    private final RegistrarOfertaService registrarOfertaService;
    private final EditarOfertaService editarOfertaService;
    private final InactivarOfertaService inactivarOfertaService;
    private final BuscarOfertaPorIdService buscarOfertaPorIdService;
    private final VerOfertasService verOfertasService;

    public OfertaController(
            RegistrarOfertaService registrarOfertaService,
            EditarOfertaService editarOfertaService,
            InactivarOfertaService inactivarOfertaService,
            BuscarOfertaPorIdService buscarOfertaPorIdService,
            VerOfertasService verOfertasService) {
        this.registrarOfertaService = registrarOfertaService;
        this.editarOfertaService = editarOfertaService;
        this.inactivarOfertaService= inactivarOfertaService;
        this.buscarOfertaPorIdService = buscarOfertaPorIdService;
        this.verOfertasService = verOfertasService;
    }

    @PostMapping
    public ResponseEntity<Oferta> registrar(@RequestBody Oferta oferta) {
        Oferta registrada = registrarOfertaService.ejecutar(oferta);
        return ResponseEntity.ok(registrada);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Oferta> editar(@PathVariable UUID id, @RequestBody Oferta oferta) {
        oferta.setId(id);
        Optional<Oferta> actualizada = editarOfertaService.ejecutar(id, oferta);
        return actualizada
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}/estado")
    public ResponseEntity<Void> inactivar(@PathVariable UUID id) {
        inactivarOfertaService.ejecutar(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Oferta> obtenerPorId(@PathVariable UUID id) {
        Optional<Oferta> oferta = buscarOfertaPorIdService.ejecutar(id);
        return oferta.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    @GetMapping
    public ResponseEntity<List<Oferta>> listarTodas() {
        return ResponseEntity.ok(verOfertasService.ejecutar());
    }
}
