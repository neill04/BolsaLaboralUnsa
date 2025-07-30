package com.unsa.bolsalaboral.domain.models;

import jakarta.persistence.*;
import java.time.LocalDateTime;
import java.util.UUID;

/**
 * Entidad que representa una oferta laboral publicada por una empresa.
 * Aplica buenas prácticas de nombres descriptivos y comentarios.
 */
@Entity
@Table(name = "ofertas_laborales")
public class OfertaLaboral {

    @Id
    @GeneratedValue
    @Column(name = "id", nullable = false, updatable = false)
    private UUID id;

    @Column(name = "titulo", nullable = false)
    private String titulo;

    @Column(name = "descripcion", columnDefinition = "TEXT")
    private String descripcion;

    @Column(name = "detalles", columnDefinition = "TEXT")
    private String detalles;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "empresa_id")
    private Empresa empresa;

    @Column(name = "fecha_publicacion")
    private LocalDateTime fechaPublicacion;

    @Enumerated(EnumType.STRING)
    @Column(name = "estado")
    private EstadoOferta estado;

    protected OfertaLaboral() {
    }

    public OfertaLaboral(UUID id, String titulo, String descripcion, Empresa empresa) {
        this.id = id;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.empresa = empresa;
        this.fechaPublicacion = LocalDateTime.now();
        this.estado = EstadoOferta.ACTIVA;
    }

    public UUID getId() {
        return id;
    }

    public String getTitulo() {
        return titulo;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public String getDetalles() {
        return detalles;
    }

    public Empresa getEmpresa() {
        return empresa;
    }

    public LocalDateTime getFechaPublicacion() {
        return fechaPublicacion;
    }

    public EstadoOferta getEstado() {
        return estado;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public void setDetalles(String detalles) {
        this.detalles = detalles;
    }

    public void setEmpresa(Empresa empresa) {
        this.empresa = empresa;
    }

    public void setFechaPublicacion(LocalDateTime fechaPublicacion) {
        this.fechaPublicacion = fechaPublicacion;
    }

    public void setEstado(EstadoOferta estado) {
        this.estado = estado;
    }
}
