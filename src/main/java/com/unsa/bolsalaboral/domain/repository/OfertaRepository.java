package com.unsa.bolsalaboral.domain.repository;

import com.unsa.bolsalaboral.domain.models.Oferta;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface OfertaRepository {
    
    Oferta guardar(Oferta oferta);

    Optional<Oferta> buscarPorId(UUID id);

    List<Oferta> listarTodas();

    void eliminarPorId(UUID id);
}
