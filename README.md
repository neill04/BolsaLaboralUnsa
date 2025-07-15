# BolsaLaboralUnsa

Este proyecto implementa un sistema de bolsa laboral usando Spring Boot y
contiene varios estilos de programación aplicados en la implementación
de las nuevas funcionalidades de gestión de CVs para estudiantes.

## Estilos de programación utilizados

- **Restful**: los controladores exponen endpoints siguiendo las
  convenciones HTTP (por ejemplo, `EstudianteController` define `POST /api/estudiantes/{id}/cv`
  y `DELETE /api/estudiantes/{id}/cv`).
- **Pipeline**: los servicios `SubirCvService` y `EliminarCVService` encadenan
  operaciones de búsqueda, manipulación y persistencia de forma secuencial
  usando `map` para cada paso.
- **Cookbook**: en esos mismos servicios se documentan los pasos principales
  para ejecutar la lógica de negocio, de manera similar a una receta.
- **Error/Exception Handling**: se define una excepción
  `EstudianteNoEncontradoException` y un `GlobalExceptionHandler` que la convierte
  en una respuesta HTTP 404.
- **Persistent-Tables**: las entidades JPA `Estudiante` y `CV` representan
  tablas persistentes y se gestionan mediante el repositorio `JpaEstudianteRepository`.

Estas prácticas permiten mantener un código claro, estructurado y fácil de
probar.