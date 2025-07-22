package com.unsa.bolsalaboral.application.services.administrador;

import com.unsa.bolsalaboral.domain.models.EstadoOferta;
import com.unsa.bolsalaboral.domain.models.OfertaLaboral;
import com.unsa.bolsalaboral.domain.repository.OfertaRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.UUID;

/**
 * Cambia el estado de una oferta laboral a inactiva.
 */
@Service
public class InactivarOfertaService {

    private final OfertaRepository ofertaRepository;

    public InactivarOfertaService(OfertaRepository ofertaRepository) {
        this.ofertaRepository = ofertaRepository;
    }

    public Optional<OfertaLaboral> ejecutar(UUID id) {
        return ofertaRepository.buscarPorId(id)
                .map(oferta -> {
                    oferta.setEstado(EstadoOferta.INACTIVA);
                    return ofertaRepository.guardar(oferta);
                });
    }
}
