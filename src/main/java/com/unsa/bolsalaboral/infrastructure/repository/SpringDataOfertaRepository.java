package com.unsa.bolsalaboral.infrastructure.repository;

import com.unsa.bolsalaboral.domain.models.EstadoOferta;
import com.unsa.bolsalaboral.domain.models.OfertaLaboral;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface SpringDataOfertaRepository extends JpaRepository<OfertaLaboral, UUID> {
    List<OfertaLaboral> findByEstado(EstadoOferta estado);
}
