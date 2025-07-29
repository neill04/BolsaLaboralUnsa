package com.unsa.bolsalaboral.application.services.administrador;

import com.unsa.bolsalaboral.domain.models.Empresa;
import com.unsa.bolsalaboral.domain.repository.EmpresaRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.UUID;

@Service
public class EditarEmpresaService {
    private final EmpresaRepository empresaRepository;

    public EditarEmpresaService(EmpresaRepository empresaRepository) {
        this.empresaRepository = empresaRepository;
    }

    public Optional<Empresa> ejecutar(UUID id, Empresa empresaActualizada) {
        return empresaRepository.buscarPorId(id).map(empresa -> {
            empresa.setNombre(empresaActualizada.getNombre());
            empresa.setRuc(empresaActualizada.getRuc());
            empresa.setDescripcion(empresaActualizada.getDescripcion());
            empresa.setDatosContacto(empresaActualizada.getDatosContacto());
            empresa.setEmpresaTipoId(empresaActualizada.getEmpresaTipoId());
            return empresaRepository.guardar(empresa);
        });
    }
}