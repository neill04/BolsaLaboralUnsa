# Sistema de Bolsa Laboral - UNSA

## Propósito

Este sistema tiene como objetivo conectar a los **estudiantes de la UNSA** con **empresas** que ofrecen oportunidades laborales, a través de una plataforma digital donde los alumnos puedan:

- Subir y administrar su currículum (CV)
- Postularse a ofertas de empleo publicadas por empresas registradas
- Visualizar el estado de sus postulaciones
- Explorar ofertas laborales por filtros de carrera, modalidad, etc.

Además, el sistema permite que **administradores** gestionen empresas y ofertas laborales, y que **profesores** puedan visualizar los currículums de los estudiantes para brindarles apoyo o recomendación externa.

---

## Funcionalidades de Alto Nivel (Casos de Uso)

- 🎓 Alumno:
  - Buscar ofertas laborales
  - Postularse a una oferta laboral
  - Subir, ver y gestionar currículums
  - Ver historial de postulaciones

- 🧑‍🏫 Profesor:
  - Visualizar currículums de estudiantes

- 🧑‍💼 Administrador:
  - Registrar empresas
  - Registrar y administrar ofertas laborales
  - Ver reportes o estadísticas (opcional)

- 🏢 Empresa:
  - Publicar ofertas laborales (por medio del admin)

📌 **Diagrama de Casos de Uso UML:**  
![Casos de Uso](./docs/Diagrama_casos_de_uso.png)

---

## Prototipo / GUI (Interfaz de Usuario)

Se cuenta con un prototipo visual que muestra las pantallas principales del sistema:

- Vista alumno: listado de ofertas, formulario de postulación, carga de CV
- Vista administrador: formularios para registrar empresa y oferta
- Vista empresa (pasiva): vista de ofertas publicadas
- Vista profesor: explorador de CVs

📌 **Enlace del prototipo: https://www.canva.com/design/DAGpRL3kFGQ/8asF3UKgim2lbnSpreqgiQ/edit?utm_content=DAGpRL3kFGQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton **  

---

## Modelo de Dominio

### Diagrama de Clases

Incluye entidades como:
- Usuario (Alumno, Profesor, Administrador)
- Empresa
- OfertaLaboral
- Postulación
- Curriculum

📌 **Imagen del diagrama de clases UML:**  
![Modelo de Dominio](./docs/Diagrama_de_clases.png)

---

### 🔸 Módulos del dominio (vista desde el negocio)

| Módulo | Responsabilidad |
|--------|------------------|
| Gestión de Usuarios | Registro, autenticación y roles |
| Gestión de Currículums | Subida, visualización y uso en postulaciones |
| Gestión de Empresas | Registro y visualización de empresas |
| Gestión de Ofertas | Publicación y consulta de ofertas laborales |
| Gestión de Postulaciones | Aplicación del alumno a ofertas |

---

## 🏗️ Vista General de Arquitectura

### 🔹 Diagrama de Paquetes

El sistema está dividido en capas según la arquitectura por capas:

- `presentacion`: vistas y controladores
- `servicios`: lógica de aplicación
- `dominio`: entidades de negocio
- `repositorio`: acceso a datos

📌 **Diagrama de Paquetes:**  
![Diagrama de Paquetes](./docs/Diagrama_de_paquetes.png)

---

## Requisitos Técnicos

- Lenguaje: JAVA / SPRING BOOT / etc.
- Base de datos: PostgreSQL
- ORM: JPA
- Arquitectura: DDD + MVC + ORM
