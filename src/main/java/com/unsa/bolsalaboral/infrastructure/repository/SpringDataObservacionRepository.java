package com.unsa.bolsalaboral.infrastructure.repository;

import com.unsa.bolsalaboral.domain.models.Observacion;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface SpringDataObservacionRepository extends JpaRepository<Observacion, UUID> {
    // Puede extenderse con nuevos métodos sin modificar la clase existente
}