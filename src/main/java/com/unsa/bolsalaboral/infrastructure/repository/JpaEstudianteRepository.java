package com.unsa.bolsalaboral.infrastructure.repository;

import com.unsa.bolsalaboral.domain.models.Estudiante;
import com.unsa.bolsalaboral.domain.repository.EstudianteRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public class JpaEstudianteRepository implements EstudianteRepository {

    private final SpringDataEstudianteRepository jpa;

    public JpaEstudianteRepository(SpringDataEstudianteRepository jpa) {
        this.jpa = jpa;
    }

    @Override
    public Estudiante guardar(Estudiante estudiante) {
        return jpa.save(estudiante);
    }

    @Override
    public Optional<Estudiante> buscarPorId(UUID id) {
        return jpa.findById(id);
    }
}