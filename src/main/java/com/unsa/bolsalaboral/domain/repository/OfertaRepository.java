package com.unsa.bolsalaboral.domain.repository;

import com.unsa.bolsalaboral.domain.models.EstadoOferta;
import com.unsa.bolsalaboral.domain.models.OfertaLaboral;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

/**
 * Puerto de persistencia para las ofertas laborales.
 */
public interface OfertaRepository {
    OfertaLaboral guardar(OfertaLaboral oferta);

    Optional<OfertaLaboral> buscarPorId(UUID id);

    List<OfertaLaboral> listarPorEstado(EstadoOferta estado);
}
