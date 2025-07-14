package com.unsa.bolsalaboral.domain.vo;

import jakarta.persistence.Embeddable;
import java.util.Objects;

@Embeddable
public class DatosContacto {
    private String direccion;
    private String telefono;
    private String email;

    protected DatosContacto() {}

    public DatosContacto(String direccion, String telefono, String email) {
        this.direccion = direccion;
        this.telefono = telefono;
        this.email = email;
    }

    public String getDireccion() {
        return direccion;
    }
    public String getTelefono() {
        return telefono;
    }

    public String getEmail() {
        return email;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof DatosContacto that)) return false;
        return Objects.equals(direccion, that.direccion) &&
                Objects.equals(telefono, that.telefono) &&
                Objects.equals(email, that.email);
    }

    @Override
    public int hashCode() {
        return Objects.hash(direccion, telefono, email);
    }
}