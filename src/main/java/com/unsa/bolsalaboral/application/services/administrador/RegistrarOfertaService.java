package com.unsa.bolsalaboral.application.services.administrador;

import com.unsa.bolsalaboral.domain.models.Oferta;
import com.unsa.bolsalaboral.domain.repository.OfertaRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class RegistrarOfertaService {
    private final OfertaRepository ofertaRepository;

    public RegistrarOfertaService(OfertaRepository ofertaRepository) {
        this.ofertaRepository = ofertaRepository;
    }

    public Oferta ejecutar(Oferta oferta) {
        oferta.setCreatedAt(LocalDateTime.now());
        oferta.setUpdatedAt(LocalDateTime.now());
        oferta.setActiva(true);  // si manejas estado
        return ofertaRepository.guardar(oferta);
    }
}
