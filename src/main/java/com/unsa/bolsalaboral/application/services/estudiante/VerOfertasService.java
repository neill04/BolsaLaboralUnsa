package com.unsa.bolsalaboral.application.services.estudiante;

import com.unsa.bolsalaboral.domain.models.EstadoOferta;
import com.unsa.bolsalaboral.domain.models.OfertaLaboral;
import com.unsa.bolsalaboral.domain.repository.OfertaRepository;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Servicio de aplicación que permite a un estudiante consultar
 * las ofertas laborales activas.
 */
@Service
public class VerOfertasService {
    private final OfertaRepository ofertaRepository;

    public VerOfertasService(OfertaRepository ofertaRepository) {
        this.ofertaRepository = ofertaRepository;
    }

    public List<OfertaLaboral> ejecutar() {
        return ofertaRepository.listarPorEstado(EstadoOferta.ACTIVA);
    }
}
