package com.unsa.bolsalaboral.application.services.administrador;

import com.unsa.bolsalaboral.application.exception.EmpresaNoEncontradaException;
import com.unsa.bolsalaboral.domain.models.Empresa;
import com.unsa.bolsalaboral.domain.models.OfertaLaboral;
import com.unsa.bolsalaboral.domain.repository.EmpresaRepository;
import com.unsa.bolsalaboral.domain.repository.OfertaRepository;
import org.springframework.stereotype.Service;

import java.util.UUID;

/**
 * Servicio encargado de registrar nuevas ofertas laborales.
 */
@Service
public class RegistrarOfertaService {

    private final OfertaRepository ofertaRepository;
    private final EmpresaRepository empresaRepository;

    public RegistrarOfertaService(OfertaRepository ofertaRepository,
                                  EmpresaRepository empresaRepository) {
        this.ofertaRepository = ofertaRepository;
        this.empresaRepository = empresaRepository;
    }

    public OfertaLaboral ejecutar(UUID empresaId, OfertaLaboral oferta) {
        Empresa empresa = empresaRepository.buscarPorId(empresaId)
                .orElseThrow(() -> new EmpresaNoEncontradaException(empresaId));
        oferta.setEmpresa(empresa);
        oferta.setFechaPublicacion(java.time.LocalDateTime.now());
        oferta.setEstado(com.unsa.bolsalaboral.domain.models.EstadoOferta.ACTIVA);
        return ofertaRepository.guardar(oferta);
    }
}
