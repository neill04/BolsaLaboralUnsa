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

```
# Estilos de Programación aplicadas
En el desarrollo del **CRUD de empresas** para el sistema de la Bolsa Laboral UNSA, se aplicaron ciertos estilos de programación para asegurar un diseño limpio, mantenible y escalable. Los estilos usados son los siguientes:

---

### 1. Cookbook
Cookbook se basa en la idea de recopilar y utilizar pequeños programas o fragmentos de código, "recetas", que demuestran la solución a un problema particular o la implementación de un concepto de programación específico.

Este estilo se refleja en la capa de servicios de aplicación, donde cada clase representa un caso de uso bien definido (registrar, editar, cambiar estado, listar, entre otros). Cada uno actúa como una "receta" con pasos claros para cumplir su propósito.

**Ejemplo:**

```java
public Empresa ejecutar(Empresa empresa) {
    empresa.setActiva(true);
    empresa.setCreatedAt(LocalDateTime.now());
    empresa.setUpdatedAt(LocalDateTime.now());
    return empresaRepository.guardar(empresa);
}
```

### 2. Error/Exception Handling
Error/Exception Handling se basa en la gestión robusta y controlada de situaciones inesperadas o anómalas que pueden ocurrir durante la ejecución de un programa. En lugar de permitir que un error detenga abruptamente el programa (lo que se conoce como "crash" o "fallo"), este estilo busca anticipar, detectar y responder a estas situaciones de una manera predefinida, permitiendo que el programa se recupere o termine de forma elegante.

Este estilo se implementó haciendo un manejo adecuado de errores utilizando Optional y respuestas HTTP con ResponseEntity para evitar excepciones no controladas y brindar respuestas más limpias al cliente.

**Ejemplo:**

```java
@PutMapping("/{id}")
public ResponseEntity<Empresa> editar(@PathVariable UUID id, @RequestBody Empresa empresa) {
    empresa.setId(id);
    Optional<Empresa> actualizada = editarEmpresaService.ejecutar(id, empresa);
    return actualizada
        .map(ResponseEntity::ok)
        .orElse(ResponseEntity.notFound().build());
}
```

### 3. Persistent-Tables

Persistent-Tables se basa en el concepto de utilizar estructuras de datos inmutables y persistentes, que se asemejan a tablas, para representar el estado de una aplicación.

Este estilo se implementó en el modelo Empresa que representa una entidad que se almacena en la base de datos mediante anotaciones de JPA. Se define con columnas específicas que reflejan su estructura persistente.

**Ejemplo:**

```java
@Entity
@Table(name = "empresas")
public class Empresa {
    @Id
    @GeneratedValue
    private UUID id;

    @Column(name = "ruc", nullable = false, unique = true)
    private String ruc;

    @Column(name = "nombre", nullable = false)
    private String nombre;
}
```

### 4. RESTful

RESTful se basa en un conjunto de principios arquitectónicos que guían el diseño de sistemas distribuidos, particularmente servicios web. Su objetivo principal es ofrecer una forma ligera, escalable y sin estado de comunicación entre diferentes componentes de software, comúnmente clientes y servidores.

Este estilo se adoptó para exponer los recursos de forma clara y estandarizada a través de endpoints HTTP semánticos, que siguen las convenciones de REST.

**Endpoints REST:**

| Método | Endpoint                    | Descripción                          |
|--------|-----------------------------|--------------------------------------|
| GET    | `/api/empresas`             | Listar todas las empresas            |
| GET    | `/api/empresas/{id}`        | Obtener una empresa por su ID        |
| POST   | `/api/empresas`             | Registrar una nueva empresa          |
| PUT    | `/api/empresas/{id}`        | Editar una empresa existente         |
| PUT    | `/api/empresas/{id}/estado` | Cambiar el estado activo/inactivo    |

