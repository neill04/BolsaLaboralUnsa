package com.unsa.bolsalaboral.application.services.administrador;

import com.unsa.bolsalaboral.domain.models.Empresa;
import com.unsa.bolsalaboral.domain.repository.EmpresaRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class RegistrarEmpresaService {
    private final EmpresaRepository empresaRepository;

    public RegistrarEmpresaService(EmpresaRepository empresaRepository) {
        this.empresaRepository = empresaRepository;
    }

    public Empresa ejecutar(Empresa empresa) {
        empresa.setActiva(Boolean.TRUE);
        empresa.setCreatedAt(LocalDateTime.now());
        empresa.setUpdatedAt(LocalDateTime.now());
        return empresaRepository.guardar(empresa);
    }
}