package com.unsa.bolsalaboral.application.services.administrador;

import com.unsa.bolsalaboral.domain.models.Oferta;
import com.unsa.bolsalaboral.domain.repository.OfertaRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;
import java.util.UUID;

@Service
public class EditarOfertaService {
    private final OfertaRepository ofertaRepository;

    public EditarOfertaService(OfertaRepository ofertaRepository) {
        this.ofertaRepository = ofertaRepository;
    }

    public Optional<Oferta> ejecutar(UUID id, Oferta ofertaActualizada) {
        return ofertaRepository.buscarPorId(id).map(oferta -> {
            oferta.setTitulo(ofertaActualizada.getTitulo());
            oferta.setDescripcion(ofertaActualizada.getDescripcion());
            oferta.setArea(ofertaActualizada.getArea());
            oferta.setSueldo(ofertaActualizada.getSueldo());
            oferta.setFecha(ofertaActualizada.getFecha());
            oferta.setEmpresa(ofertaActualizada.getEmpresa()); // si quieres permitir cambiar de empresa
            oferta.setUpdatedAt(LocalDateTime.now());

            return ofertaRepository.guardar(oferta);
        });
    }
}
