package com.unsa.bolsalaboral.domain.repository;

import com.unsa.bolsalaboral.domain.models.Observacion;
import java.util.Optional;
import java.util.UUID;

public interface ObservacionRepository {
    Observacion guardar(Observacion observacion);

    Optional<Observacion> buscarPorId(UUID id);
}


