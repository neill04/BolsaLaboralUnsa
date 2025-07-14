package com.unsa.bolsalaboral.domain.models;

import com.unsa.bolsalaboral.domain.vo.DatosContacto;
import jakarta.persistence.*;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;
import java.util.Objects;
import java.util.UUID;

@Entity
@Table(name = "empresas")
public class Empresa {
    @Id
    @GeneratedValue
    @Column(name = "id", nullable = false, updatable = false)
    private UUID id;

    @Column(name = "ruc",  nullable = false, length = 20, unique = true)
    private String ruc;

    @Column(name = "nombre", nullable = false, length = 100)
    private String nombre;

    @Embedded
    private DatosContacto datosContacto;

    @Column(name = "descripcion", columnDefinition = "TEXT")
    private String descripcion;

    @Column(name = "empresa_tipo_id")
    private UUID empresaTipoId;

    @Column(name = "created_at")
    private LocalDateTime createdAt;

    @UpdateTimestamp
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;

    @Column(name = "activa")
    private Boolean activa;

    protected Empresa() {}

    public Empresa(UUID id, String ruc, String nombre, DatosContacto datosContacto,
                   String descripcion, UUID empresaTipoId, LocalDateTime createdAt, LocalDateTime updatedAt, boolean activa) {
        this.id = id;
        this.ruc = ruc;
        this.nombre = nombre;
        this.datosContacto = datosContacto;
        this.descripcion = descripcion;
        this.empresaTipoId = empresaTipoId;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.activa = activa;
    }

    public UUID getId() {
        return id;
    }

    public String getRuc() {
        return ruc;
    }

    public String getNombre() {
        return nombre;
    }

    public DatosContacto getDatosContacto() {
        return datosContacto;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public UUID getEmpresaTipoId() {
        return empresaTipoId;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public LocalDateTime getUpdatedAt() {
        return updatedAt;
    }

    public Boolean getActiva() {
        return activa;
    }

    // Setters

    public void setId(UUID id) {
        this.id = id;
    }

    public void setRuc(String ruc) {
        this.ruc = ruc;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public void setDatosContacto(DatosContacto datosContacto) {
        this.datosContacto = datosContacto;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public void setEmpresaTipoId(UUID empresaTipoId) {
        this.empresaTipoId = empresaTipoId;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public void setUpdatedAt(LocalDateTime updatedAt) {
        this.updatedAt = updatedAt;
    }

    public void setActiva(boolean activa) {
        this.activa = activa;
    }

    public void actualizarEmpresa(String nombre, DatosContacto datosContacto, String descripcion, UUID empresaTipoId) {
        this.nombre = nombre;
        this.datosContacto = datosContacto;
        this.descripcion = descripcion;
        this.empresaTipoId = empresaTipoId;
        this.updatedAt = LocalDateTime.now();
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Empresa empresa)) return false;
        return Objects.equals(id, empresa.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}