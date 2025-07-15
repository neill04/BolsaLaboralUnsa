package com.unsa.bolsalaboral.application.services.administrador;

import com.unsa.bolsalaboral.domain.models.Oferta;
import com.unsa.bolsalaboral.domain.repository.OfertaRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VerOfertasService {
    private final OfertaRepository ofertaRepository;

    public VerOfertasService(OfertaRepository ofertaRepository) {
        this.ofertaRepository = ofertaRepository;
    }

    public List<Oferta> ejecutar() {
        return ofertaRepository.listarTodas();
    }
}
