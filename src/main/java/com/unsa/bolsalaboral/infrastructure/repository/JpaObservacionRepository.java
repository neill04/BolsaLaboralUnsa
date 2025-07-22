package com.unsa.bolsalaboral.infrastructure.repository;

import com.unsa.bolsalaboral.domain.models.Observacion;
import com.unsa.bolsalaboral.domain.repository.ObservacionRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public class JpaObservacionRepository implements ObservacionRepository {
    private final SpringDataObservacionRepository jpa;

    public JpaObservacionRepository(SpringDataObservacionRepository jpa) {
        this.jpa = jpa;
    }

    @Override
    public Observacion guardar(Observacion observacion) {
        return jpa.save(observacion);
    }

    @Override
    public Optional<Observacion> buscarPorId(UUID id) {
        return jpa.findById(id);
    }
}