package com.unsa.bolsalaboral.domain.models;

import jakarta.persistence.*;
import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Table(name = "cvs")
public class CV {
    @Id
    @GeneratedValue
    @Column(name = "id", nullable = false, updatable = false)
    private UUID id;

    @Column(name = "archivo", nullable = false)
    private String archivo;

    @Column(name = "fecha_subida")
    private LocalDateTime fechaSubida;

    @OneToOne
    @JoinColumn(name = "estudiante_id")
    private Estudiante estudiante;

    protected CV() {
    }

    public CV(UUID id, String archivo, LocalDateTime fechaSubida) {
        this.id = id;
        this.archivo = archivo;
        this.fechaSubida = fechaSubida;
    }

    public UUID getId() {
        return id;
    }

    public String getArchivo() {
        return archivo;
    }

    public LocalDateTime getFechaSubida() {
        return fechaSubida;
    }

    public Estudiante getEstudiante() {
        return estudiante;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public void setArchivo(String archivo) {
        this.archivo = archivo;
    }

    public void setFechaSubida(LocalDateTime fechaSubida)
    {
        this.fechaSubida = fechaSubida;
    }

    public void setEstudiante(Estudiante estudiante) {
        this.estudiante = estudiante;
    }
}