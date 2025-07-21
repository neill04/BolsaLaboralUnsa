package com.unsa.bolsalaboral.application.services.estudiante;

import com.unsa.bolsalaboral.application.exception.EstudianteNoEncontradoException;
import com.unsa.bolsalaboral.domain.models.Estudiante;
import com.unsa.bolsalaboral.domain.repository.EstudianteRepository;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class EliminarCVService {
    private final EstudianteRepository estudianteRepository;

    public EliminarCVService(EstudianteRepository estudianteRepository) {
        this.estudianteRepository = estudianteRepository;
    }

    public Estudiante ejecutar(UUID estudianteId) {
        // Cookbook style: paso 1 - localizar estudiante
        return estudianteRepository.buscarPorId(estudianteId)
                // Pipeline style: al encontrar, eliminar CV y persistir
                .map(this::quitarCv)
                .map(estudianteRepository::guardar)
                // Error/Exception handling si no existe el estudiante
                .orElseThrow(() -> new EstudianteNoEncontradoException(estudianteId));
    }

    private Estudiante quitarCv(Estudiante estudiante) {
        estudiante.setCv(null);
        return estudiante;
    }
}