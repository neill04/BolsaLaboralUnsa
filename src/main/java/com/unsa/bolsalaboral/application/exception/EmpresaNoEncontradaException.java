package com.unsa.bolsalaboral.application.exception;

import java.util.UUID;

/**
 * Se lanza cuando no se encuentra una empresa al registrar una oferta.
 */
public class EmpresaNoEncontradaException extends RuntimeException {
    public EmpresaNoEncontradaException(UUID id) {
        super("Empresa no encontrada: " + id);
    }
}
