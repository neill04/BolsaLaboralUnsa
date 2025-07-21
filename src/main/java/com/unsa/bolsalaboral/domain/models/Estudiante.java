package com.unsa.bolsalaboral.domain.models;

import com.unsa.bolsalaboral.domain.vo.DatosContacto;
import jakarta.persistence.*;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Table(name = "estudiantes")
public class Estudiante {
    @Id
    @GeneratedValue
    @Column(name = "id", nullable = false, updatable = false)
    private UUID id;

    @Column(name = "codigo", nullable = false, length = 20, unique = true)
    private String codigo;

    @Column(name = "nombre", nullable = false, length = 100)
    private String nombre;

    @Embedded
    private DatosContacto datosContacto;

    @OneToOne(mappedBy = "estudiante", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    private CV cv;

    @Column(name = "created_at")
    private LocalDateTime createdAt;

    @UpdateTimestamp
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;

    protected Estudiante() {
    }

    public Estudiante(UUID id, String codigo, String nombre, DatosContacto datosContacto) {
        this.id = id;
        this.codigo = codigo;
        this.nombre = nombre;
        this.datosContacto = datosContacto;
        this.createdAt = LocalDateTime.now();
        this.updatedAt = LocalDateTime.now();
    }

    public UUID getId() {
        return id;
    }

    public String getCodigo() {
        return codigo;
    }

    public String getNombre() {
        return nombre;
    }

    public DatosContacto getDatosContacto() {
        return datosContacto;
    }

    public CV getCv() {
        return cv;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public LocalDateTime getUpdatedAt() {
        return updatedAt;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public void setCodigo(String codigo) {
        this.codigo = codigo;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public void setDatosContacto(DatosContacto datosContacto) {
        this.datosContacto = datosContacto;
    }

    public void setCv(CV cv) {
        if (cv != null) {
            cv.setEstudiante(this);
        }
        this.cv = cv;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public void setUpdatedAt(LocalDateTime updatedAt) {
        this.updatedAt = updatedAt;
    }
}