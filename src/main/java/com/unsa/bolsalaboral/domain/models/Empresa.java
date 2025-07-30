package com.unsa.bolsalaboral.domain.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.unsa.bolsalaboral.domain.vo.DatosContacto;
import jakarta.persistence.*;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;
import java.util.Objects;
import java.util.UUID;

@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
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

    // patron Builder
    @SuppressWarnings("unused")
    public static class Builder {
        private UUID id;
        private String ruc;
        private String nombre;
        private DatosContacto datosContacto;
        private String descripcion;
        private UUID empresaTipoId;
        private LocalDateTime createdAt;
        private LocalDateTime updatedAt;
        private Boolean activa;

        @SuppressWarnings("unused")
        public Builder id(UUID id) {
            this.id = id;
            return this;
        }

        @SuppressWarnings("unused")
        public Builder ruc(String ruc) {
            this.ruc = ruc;
            return this;
        }

        @SuppressWarnings("unused")
        public Builder nombre(String nombre) {
            this.nombre = nombre;
            return this;
        }

        @SuppressWarnings("unused")
        public Builder datosContacto(DatosContacto datosContacto) {
            this.datosContacto = datosContacto;
            return this;
        }

        @SuppressWarnings("unused")
        public Builder descripcion(String descripcion) {
            this.descripcion = descripcion;
            return this;
        }

        @SuppressWarnings("unused")
        public Builder empresaTipoId(UUID empresaTipoId) {
            this.empresaTipoId = empresaTipoId;
            return this;
        }

        @SuppressWarnings("unused")
        public Builder createdAt(LocalDateTime createdAt) {
            this.createdAt = createdAt;
            return this;
        }

        @SuppressWarnings("unused")
        public Builder updatedAt(LocalDateTime updatedAt) {
            this.updatedAt = updatedAt;
            return this;
        }

        @SuppressWarnings("unused")
        public Builder activa(Boolean activa) {
            this.activa = activa;
            return this;
        }

        @SuppressWarnings("unused")
        public Empresa build() {
            Empresa empresa = new Empresa();
            empresa.id = this.id;
            empresa.ruc = this.ruc;
            empresa.nombre = this.nombre;
            empresa.datosContacto = this.datosContacto;
            empresa.descripcion = this.descripcion;
            empresa.empresaTipoId = this.empresaTipoId;
            empresa.createdAt = this.createdAt;
            empresa.updatedAt = this.updatedAt;
            empresa.activa = this.activa;
            return empresa;
        }
    }

    // Getters
    @SuppressWarnings("unused")
    public UUID getId() { return id; }
    public String getRuc() { return ruc; }
    public String getNombre() { return nombre; }
    public DatosContacto getDatosContacto() { return datosContacto; }
    public String getDescripcion() { return descripcion; }
    public UUID getEmpresaTipoId() { return empresaTipoId; }
    @SuppressWarnings("unused")
    public LocalDateTime getCreatedAt() { return createdAt; }
    @SuppressWarnings("unused")
    public LocalDateTime getUpdatedAt() { return updatedAt; }
    public Boolean getActiva() { return activa; }

    // Setters
    public void setId(UUID id) { this.id = id; }
    public void setRuc(String ruc) { this.ruc = ruc; }
    public void setNombre(String nombre) { this.nombre = nombre; }
    public void setDatosContacto(DatosContacto datosContacto) {  this.datosContacto = datosContacto; }
    public void setDescripcion(String descripcion) { this.descripcion = descripcion; }
    public void setEmpresaTipoId(UUID empresaTipoId) { this.empresaTipoId = empresaTipoId; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }
    public void setUpdatedAt(LocalDateTime updatedAt) { this.updatedAt = updatedAt; }
    public void setActiva(Boolean activa) { this.activa = activa; }

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