package com.unsa.bolsalaboral.infrastructure.config;

import com.unsa.bolsalaboral.domain.models.Rol;
import com.unsa.bolsalaboral.domain.models.Usuario;
import com.unsa.bolsalaboral.infrastructure.repository.SpringDataUsuarioRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
public class DataLoader {

    @Bean
    CommandLineRunner initUsers(SpringDataUsuarioRepository repository, PasswordEncoder encoder) {
        return args -> {
            if (repository.count() == 0) {
                repository.save(new Usuario(null, "admin", encoder.encode("admin123"), Rol.ADMIN));
                repository.save(new Usuario(null, "estudiante", encoder.encode("pass123"), Rol.ESTUDIANTE));
                repository.save(new Usuario(null, "profesor", encoder.encode("pass123"), Rol.PROFESOR));
            }
        };
    }
}