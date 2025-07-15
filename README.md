# Convenciones de codificación
### Mejora aplicada: Implementación del Patrón Builder en la clase `Empresa`

Durante el análisis del código implementado, **SonarQube** detectó un problema relacionado con el constructor de la clase `Empresa`, este consistía que contaba con **demasiados parámetros**:

> **SonarQube Warning:** Constructor has 8 parameters, which is greater than 7 authorized.

Según SonarQube esto afectaba la **legibilidad**, **mantenibilidad** y aumentaba el riesgo de errores por el orden de los argumentos.

---

### Solución implementada: Patrón de diseño Builder

Se aplicó el patrón **Builder** en la clase `Empresa` para construir objetos de manera **más legible y segura**, especialmente útil cuando se manejan muchos atributos.

#### Antes (problema detectado):

```java
public Empresa(UUID id, String ruc, String nombre, DatosContacto datosContacto,
               String descripcion, UUID empresaTipoId, LocalDateTime createdAt,
               LocalDateTime updatedAt, boolean activa) {
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
```

#### Después (Uso del Patrón Builder):
```java
Empresa empresa = Empresa.builder()
    .id(UUID.randomUUID())
    .ruc("12345678901")
    .nombre("Incalpaca")
    .datosContacto(new DatosContacto("Av. Textiles 456", "987654321", "contacto@incalpaca.pe"))
    .descripcion("Empresa de textiles de alpaca")
    .empresaTipoId(UUID.fromString("00000000-0000-0000-0000-000000000000"))
    .createdAt(LocalDateTime.now())
    .updatedAt(LocalDateTime.now())
    .activa(true)
    .build();