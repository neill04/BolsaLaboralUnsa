package com.unsa.bolsalaboral.application.exception;

import java.util.UUID;

public class EstudianteNoEncontradoException extends RuntimeException {
    public EstudianteNoEncontradoException(UUID id) {
        super("Estudiante no encontrado: " + id);
    }
}