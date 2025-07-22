package com.unsa.bolsalaboral.domain.models;

import jakarta.persistence.*;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;
import java.util.Objects;
import java.util.UUID;

@Entity
@Table(name = "ofertas")
public class Oferta {

    @Id
    @GeneratedValue
    @Column(name = "id", nullable = false, updatable = false)
    private UUID id;

    @Column(name = "titulo", nullable = false, length = 100)
    private String titulo;

    @Column(name = "descripcion", columnDefinition = "TEXT")
    private String descripcion;

    @Column(name = "area", length = 100)
    private String area;

    @Column(name = "sueldo")
    private Double sueldo;

    @Column(name = "fecha")
    private LocalDateTime fecha;

    @Column(name = "created_at")
    private LocalDateTime createdAt;

    @UpdateTimestamp
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;

    @Column(name = "activa")
    private Boolean activa;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "empresa_id", nullable = false)
    private Empresa empresa;

    protected Oferta() {}

    public Oferta(UUID id, String titulo, String descripcion, String area,
                  Double sueldo, LocalDateTime fecha, LocalDateTime createdAt,
                  LocalDateTime updatedAt, Boolean activa, Empresa empresa) {
        this.id = id;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.area = area;
        this.sueldo = sueldo;
        this.fecha = fecha;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.activa = activa;
        this.empresa = empresa;
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

    public String getArea() {
        return area;
    }

    public Double getSueldo() {
        return sueldo;
    }

    public LocalDateTime getFecha() {
        return fecha;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public LocalDateTime getUpdatedAt() {
        return updatedAt;
    }

    public Boolean isActiva() {
        return activa;
    }

    public Empresa getEmpresa() {
        return empresa;
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

    public void setArea(String area) {
        this.area = area;
    }

    public void setSueldo(Double sueldo) {
        this.sueldo = sueldo;
    }

    public void setFecha(LocalDateTime fecha) {
        this.fecha = fecha;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public void setUpdatedAt(LocalDateTime updatedAt) {
        this.updatedAt = updatedAt;
    }

    public void setActiva(Boolean activa) {
        this.activa = activa;
    }

    public void setEmpresa(Empresa empresa) {
        this.empresa = empresa;
    }

    public void actualizarOferta(String titulo, String descripcion, String area, Double sueldo, LocalDateTime fecha, Empresa empresa) {
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.area = area;
        this.sueldo = sueldo;
        this.fecha = fecha;
        this.empresa = empresa;
        this.updatedAt = LocalDateTime.now();
    }
public static class Builder {
    private UUID id;
    private String titulo;
    private String descripcion;
    private String area;
    private Double sueldo;
    private LocalDateTime fecha;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private Boolean activa;
    private Empresa empresa;

    public Builder id(UUID id) {
        this.id = id;
        return this;
    }

    public Builder titulo(String titulo) {
        this.titulo = titulo;
        return this;
    }

    public Builder descripcion(String descripcion) {
        this.descripcion = descripcion;
        return this;
    }

    public Builder area(String area) {
        this.area = area;
        return this;
    }

    public Builder sueldo(Double sueldo) {
        this.sueldo = sueldo;
        return this;
    }

    public Builder fecha(LocalDateTime fecha) {
        this.fecha = fecha;
        return this;
    }

    public Builder createdAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }

    public Builder updatedAt(LocalDateTime updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }

    public Builder activa(Boolean activa) {
        this.activa = activa;
        return this;
    }

    public Builder empresa(Empresa empresa) {
        this.empresa = empresa;
        return this;
    }

    public Oferta build() {
        return new Oferta(id, titulo, descripcion, area, sueldo, fecha, createdAt, updatedAt, activa, empresa);
    }
}


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Oferta oferta)) return false;
        return Objects.equals(id, oferta.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
