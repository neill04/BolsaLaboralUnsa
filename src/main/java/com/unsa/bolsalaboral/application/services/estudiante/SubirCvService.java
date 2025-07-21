package com.unsa.bolsalaboral.application.services.estudiante;

import com.unsa.bolsalaboral.application.exception.EstudianteNoEncontradoException;
import com.unsa.bolsalaboral.domain.models.CV;
import com.unsa.bolsalaboral.domain.models.Estudiante;
import com.unsa.bolsalaboral.domain.repository.EstudianteRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.UUID;

@Service
public class SubirCvService {
    private final EstudianteRepository estudianteRepository;

    public SubirCvService(EstudianteRepository estudianteRepository) {
        this.estudianteRepository = estudianteRepository;
    }

    public Estudiante ejecutar(UUID estudianteId, CV cv) {
        // Cookbook style: paso 1 - buscar estudiante
        return estudianteRepository.buscarPorId(estudianteId)
                // Pipeline style: al encontrar, agregar CV y persistir
                .map(est -> agregarCv(est, cv))
                .map(estudianteRepository::guardar)
                // Error/Exception handling si no existe el estudiante
                .orElseThrow(() -> new EstudianteNoEncontradoException(estudianteId));
    }

    private Estudiante agregarCv(Estudiante estudiante, CV cv) {
        cv.setFechaSubida(LocalDateTime.now());
        estudiante.setCv(cv);
        return estudiante;
    }
}