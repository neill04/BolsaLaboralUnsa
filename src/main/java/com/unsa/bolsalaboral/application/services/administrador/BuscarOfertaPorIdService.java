package com.unsa.bolsalaboral.application.services.administrador;

import com.unsa.bolsalaboral.domain.models.Oferta;
import com.unsa.bolsalaboral.domain.repository.OfertaRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.UUID;

@Service
public class BuscarOfertaPorIdService {
    private final OfertaRepository ofertaRepository;

    public BuscarOfertaPorIdService(OfertaRepository ofertaRepository) {
        this.ofertaRepository = ofertaRepository;
    }

    public Optional<Oferta> ejecutar(UUID id) {
        return ofertaRepository.buscarPorId(id);
    }
}
