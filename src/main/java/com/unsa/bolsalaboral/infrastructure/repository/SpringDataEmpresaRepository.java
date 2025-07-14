package com.unsa.bolsalaboral.infrastructure.repository;

import com.unsa.bolsalaboral.domain.models.Empresa;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.UUID;

public interface SpringDataEmpresaRepository extends JpaRepository<Empresa, UUID> {}