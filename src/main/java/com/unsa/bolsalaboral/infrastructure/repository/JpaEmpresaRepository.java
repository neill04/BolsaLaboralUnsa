package com.unsa.bolsalaboral.infrastructure.repository;

import com.unsa.bolsalaboral.domain.models.Empresa;
import com.unsa.bolsalaboral.domain.repository.EmpresaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public class JpaEmpresaRepository implements EmpresaRepository {

    private final SpringDataEmpresaRepository jpa;

    public JpaEmpresaRepository(SpringDataEmpresaRepository jpa) {
        this.jpa = jpa;
    }

    @Override
    public Empresa guardar(Empresa empresa) {
        return jpa.save(empresa);
    }

    @Override
    public Optional<Empresa> buscarPorId(UUID id) {
        return jpa.findById(id);
    }

    @Override
    public List<Empresa> listarTodas() {
        return jpa.findAll();
    }

    @Override
    public void eliminarPorId(UUID id) {
        jpa.deleteById(id);
    }
}