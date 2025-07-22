package com.unsa.bolsalaboral.application.services.profesor;

import com.unsa.bolsalaboral.domain.models.Observacion;
import com.unsa.bolsalaboral.domain.repository.ObservacionRepository;
import org.springframework.stereotype.Service;

@Service
public class RegistrarObservacionesService {
    private final ObservacionRepository observacionRepository;

    public RegistrarObservacionesService(ObservacionRepository observacionRepository) {
        this.observacionRepository = observacionRepository;
    }

    public Observacion ejecutar(Observacion observacion) {
        // Guardar una nueva observación con las relaciones establecidas
        return observacionRepository.guardar(observacion);
    }
}