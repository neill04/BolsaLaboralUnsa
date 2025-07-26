package com.unsa.bolsalaboral.infrastructure.repository;

import com.unsa.bolsalaboral.domain.models.EstadoOferta;
import com.unsa.bolsalaboral.domain.models.OfertaLaboral;
import com.unsa.bolsalaboral.domain.repository.OfertaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

/**
 * Implementación JPA del repositorio de ofertas laborales.
 */
@Repository
public class JpaOfertaRepository implements OfertaRepository {

    private final SpringDataOfertaRepository jpa;

    public JpaOfertaRepository(SpringDataOfertaRepository jpa) {
        this.jpa = jpa;
    }

    @Override
    public OfertaLaboral guardar(OfertaLaboral oferta) {
        return jpa.save(oferta);
    }

    @Override
    public Optional<OfertaLaboral> buscarPorId(UUID id) {
        return jpa.findById(id);
    }

    @Override
    public List<OfertaLaboral> listarPorEstado(EstadoOferta estado) {
        return jpa.findByEstado(estado);
    }
}
