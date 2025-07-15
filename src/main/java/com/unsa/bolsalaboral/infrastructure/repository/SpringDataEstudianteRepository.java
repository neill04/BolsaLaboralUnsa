package com.unsa.bolsalaboral.infrastructure.repository;

import com.unsa.bolsalaboral.domain.models.Estudiante;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface SpringDataEstudianteRepository extends JpaRepository<Estudiante, UUID> {
}