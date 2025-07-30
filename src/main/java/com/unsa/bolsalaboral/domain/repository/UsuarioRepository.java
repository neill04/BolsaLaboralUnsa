package com.unsa.bolsalaboral.domain.repository;

import com.unsa.bolsalaboral.domain.models.Usuario;

import java.util.Optional;

public interface UsuarioRepository {
    Usuario guardar(Usuario usuario);

    Optional<Usuario> buscarPorUsername(String username);
}