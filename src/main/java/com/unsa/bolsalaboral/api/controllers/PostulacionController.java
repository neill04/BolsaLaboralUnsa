package com.unsa.bolsalaboral.api.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/api/ofertas")
public class PostulacionController {

    /**
     * Registra una postulación para la oferta indicada.
     *
     * @param ofertaId identificador de la oferta
     * @return respuesta exitosa sin contenido
     */
    @PostMapping("/{ofertaId}/postulaciones")
    public ResponseEntity<Void> registrarPostulacion(@PathVariable UUID ofertaId,
                                                     @RequestBody(required = false) Map<String, Object> datos) {
        // Lógica pendiente de implementación
        return ResponseEntity.ok().build();
    }

    /**
     * Lista los postulantes de una oferta.
     * Actualmente devuelve una lista vacía.
     */
    @GetMapping("/{ofertaId}/postulantes")
    public ResponseEntity<List<Object>> obtenerPostulantes(@PathVariable UUID ofertaId) {
        return ResponseEntity.ok(Collections.emptyList());
    }
}