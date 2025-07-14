package com.unsa.bolsalaboral.application.services.administrador;

import com.unsa.bolsalaboral.domain.models.Empresa;
import com.unsa.bolsalaboral.domain.repository.EmpresaRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VerEmpresasService {
    private final EmpresaRepository empresaRepository;

    public VerEmpresasService(EmpresaRepository empresaRepository) {
        this.empresaRepository = empresaRepository;
    }

    public List<Empresa> ejecutar() {
        return empresaRepository.listarTodas();
    }
}