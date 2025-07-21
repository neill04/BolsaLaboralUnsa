package com.unsa.bolsalaboral.api.controllers;

import com.unsa.bolsalaboral.application.services.administrador.*;
import com.unsa.bolsalaboral.domain.models.Empresa;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/api/empresas")
public class EmpresaController {
    private final RegistrarEmpresaService registrarEmpresaService;
    private final EditarEmpresaService editarEmpresaService;
    private final CambiarEstadoEmpresaService cambiarEstadoEmpresaService;
    private final BuscarEmpresaPorIdService buscarEmpresaPorIdService;
    private final VerEmpresasService verEmpresasService;

    public EmpresaController(
            RegistrarEmpresaService registrarEmpresaService,
            EditarEmpresaService editarEmpresaService,
            CambiarEstadoEmpresaService cambiarEstadoEmpresaService,
            BuscarEmpresaPorIdService buscarEmpresaPorIdService,
            VerEmpresasService verEmpresasService) {
        this.registrarEmpresaService = registrarEmpresaService;
        this.editarEmpresaService = editarEmpresaService;
        this.cambiarEstadoEmpresaService = cambiarEstadoEmpresaService;
        this.buscarEmpresaPorIdService = buscarEmpresaPorIdService;
        this.verEmpresasService = verEmpresasService;
    }

    @PostMapping
    public ResponseEntity<Empresa> registrar(@RequestBody Empresa empresa) {
        Empresa registrada = registrarEmpresaService.ejecutar(empresa);
        return ResponseEntity.ok(registrada);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Empresa> editar(@PathVariable UUID id, @RequestBody Empresa empresa) {
        empresa.setId(id);
        Optional<Empresa> actualizada = editarEmpresaService.ejecutar(id, empresa);
        return actualizada
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}/estado")
    public ResponseEntity<Void> cambiarEstado(@PathVariable UUID id) {
        cambiarEstadoEmpresaService.ejecutar(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Empresa> obtenerPorId(@PathVariable UUID id) {
        Optional<Empresa> empresa = buscarEmpresaPorIdService.ejecutar(id);
        return empresa.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    @GetMapping
    public ResponseEntity<List<Empresa>> listarTodas() {
        return ResponseEntity.ok(verEmpresasService.ejecutar());
    }
}