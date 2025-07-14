package com.unsa.bolsalaboral.domain.repository;

import com.unsa.bolsalaboral.domain.models.Empresa;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface EmpresaRepository {
    Empresa guardar(Empresa empresa);

    Optional<Empresa> buscarPorId(UUID id);

    List<Empresa> listarTodas();

    void eliminarPorId(UUID id);
}