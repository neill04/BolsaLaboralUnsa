package com.unsa.bolsalaboral.api.controllers;

import com.unsa.bolsalaboral.application.services.profesor.RegistrarObservacionesService;
import com.unsa.bolsalaboral.domain.models.Observacion;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/profesor")
public class ProfesorController {
    private final RegistrarObservacionesService registrarObservacionesService;

    public ProfesorController(RegistrarObservacionesService registrarObservacionesService) {
        this.registrarObservacionesService = registrarObservacionesService;
    }

    @PostMapping("/observaciones")
    public ResponseEntity<Observacion> registrarObservacion(@RequestBody Observacion observacion) {
        Observacion nuevaObservacion = registrarObservacionesService.ejecutar(observacion);
        return ResponseEntity.ok(nuevaObservacion);
    }
}