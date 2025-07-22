package com.unsa.bolsalaboral.api;

import com.unsa.bolsalaboral.application.exception.EmpresaNoEncontradaException;
import com.unsa.bolsalaboral.application.exception.EstudianteNoEncontradoException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(EstudianteNoEncontradoException.class)
    public ResponseEntity<String> handleEstudianteNoEncontrado(EstudianteNoEncontradoException ex) {
        return ResponseEntity.notFound().build();
    }

    @ExceptionHandler(EmpresaNoEncontradaException.class)
    public ResponseEntity<String> handleEmpresaNoEncontrada(EmpresaNoEncontradaException ex) {
        return ResponseEntity.notFound().build();
    }
}