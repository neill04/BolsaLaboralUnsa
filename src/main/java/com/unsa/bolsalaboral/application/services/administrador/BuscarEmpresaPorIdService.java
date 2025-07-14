package com.unsa.bolsalaboral.application.services.administrador;

import com.unsa.bolsalaboral.domain.models.Empresa;
import com.unsa.bolsalaboral.domain.repository.EmpresaRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.UUID;

@Service
public class BuscarEmpresaPorIdService {
    private final EmpresaRepository empresaRepository;

    public BuscarEmpresaPorIdService(EmpresaRepository empresaRepository) {
        this.empresaRepository = empresaRepository;
    }

    public Optional<Empresa> ejecutar(UUID id) {
        return empresaRepository.buscarPorId(id);
    }
}