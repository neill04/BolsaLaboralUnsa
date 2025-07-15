package com.unsa.bolsalaboral.api.controllers;

import com.unsa.bolsalaboral.application.services.estudiante.EliminarCVService;
import com.unsa.bolsalaboral.application.services.estudiante.SubirCvService;
import com.unsa.bolsalaboral.domain.models.CV;
import com.unsa.bolsalaboral.domain.models.Estudiante;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/api/estudiantes")
public class EstudianteController {

    private final SubirCvService subirCvService;
    private final EliminarCVService eliminarCVService;

    public EstudianteController(SubirCvService subirCvService,
                                EliminarCVService eliminarCVService) {
        this.subirCvService = subirCvService;
        this.eliminarCVService = eliminarCVService;
    }

    // Restful endpoint to upload a CV
    @PostMapping("/{id}/cv")
    public ResponseEntity<Estudiante> subirCv(@PathVariable UUID id,
                                              @RequestBody CV cv) {
        Estudiante actualizado = subirCvService.ejecutar(id, cv);
        return ResponseEntity.ok(actualizado);
    }

    // Restful endpoint to delete a CV
    @DeleteMapping("/{id}/cv")
    public ResponseEntity<Estudiante> eliminarCv(@PathVariable UUID id) {
        Estudiante actualizado = eliminarCVService.ejecutar(id);
        return ResponseEntity.ok(actualizado);
    }
}