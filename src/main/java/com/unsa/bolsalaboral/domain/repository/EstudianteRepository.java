package com.unsa.bolsalaboral.domain.repository;

import com.unsa.bolsalaboral.domain.models.Estudiante;

import java.util.Optional;
import java.util.UUID;

public interface EstudianteRepository {
    Estudiante guardar(Estudiante estudiante);

    Optional<Estudiante> buscarPorId(UUID id);
}