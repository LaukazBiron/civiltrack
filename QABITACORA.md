# QABITACORA.MD - Bitácora Completa de Pruebas de Integración

Este documento recopila el ciclo completo de pruebas de integración para el sistema, abarcando el comportamiento del backend frente a solicitudes CRUD del módulo de proyectos, la persistencia en base de datos y la gestión de sesiones mediante tokens y cookies seguras.

---

## 1. Tabla General de Pruebas de Integración

| Id de Prueba | Nombre de la integración | Módulo de Origen | Módulo destino | Resultado esperado | Estado Actual |
|---|---|---|---|---|---|
| **01** | **Lectura Inicial de Proyectos (Admin)** | Panel de Administración | API Proyectos | Retornar código `200 OK` junto con la lista global de proyectos precargados en el sistema (ej. "Proyecto Beta"). | **PASA** |
| **02** | **Aislamiento de Proyectos (Residente Vacío)** | Panel de Residente | API Proyectos | Retornar código `200 OK` y un arreglo vacío `[]` al no tener aún proyectos vinculados o creados por este usuario. | **PASA** |
| **03** | **Creación de Proyecto por Residente** | Formulario de Creación | API Proyectos | Registrar un nuevo proyecto ("Proyecto Gamma"), retornar código `200 OK` y el ID asignado en la respuesta. | **PASA** |
| **04** | **Verificación de Inserción (Residente)** | Panel de Residente | API Proyectos | Retornar código `200 OK` reflejando de inmediato el proyecto recién creado en su listado particular. | **PASA** |
| **05** | **Baja Lógica desde la Aplicación** | Módulo de Eliminación | API Proyectos | Cambiar el estado del proyecto de forma lógica (soft delete). Retornar `200 OK` y el mensaje de confirmación correspondientes. | **PASA** |
| **06** | **Persistencia de Baja Lógica en BD** | Base de Datos (PHPMyAdmin) | Backend / Tabla | Confirmar el borrado lógico directo en la BD: el registro debe seguir existiendo pero con la bandera `activo: 0`. | **PASA** |
| **07** | **Restricción de Borrado No Autorizado** | Módulo de Eliminación | API Proyectos / Validación | Bloquear peticiones DELETE si el usuario no posee los permisos o propiedad del recurso; retornar `403 Forbidden`. | **PASA** |
| **08** | **Restricción de Edición No Autorizada** | Formulario de Edición | API Proyectos / Validación | Impedir la modificación (PUT) de un proyecto ajeno o restringido por parte de un tercero; retornar `403 Forbidden`. | **PASA** |
| **09** | **Actualización Exitosa de Proyecto** | Formulario de Edición | API Proyectos | Procesar y guardar los cambios enviados en el cuerpo de la petición (PUT); retornar código `200 OK`. | **PASA** |
| **10** | **Estado de Consistencia BD (Pre-Update)** | Base de Datos (PHPMyAdmin) | Tabla `proyectos` | El registro con `id_proyecto: 3` debe mantener sus valores iniciales (`nombre: "Proyecto A"`, `fecha_inicio: "2026-01-01"`). | **PASA** |
| **11** | **Persistencia Posterior en BD (Post-Update)** | Base de Datos (PHPMyAdmin) | Tabla `proyectos` | Confirmar los cambios reflejados en BD: el `id_proyecto: 3` ahora debe mostrar `nombre: "Proyecto Alfa"` y `fecha_inicio: "2026-02-01"`. | **PASA** |
| **12** | **Autenticación de Administrador** | Cliente API (Postman/Bruno) | Endpoint Auth Login | Enviar credenciales de administrador; retornar `200 OK`, mensaje de éxito y el objeto del usuario (`id: 1`, `rol: "admin"`). | **PASA** |
| **13** | **Inyección Segura de Sesión (Cookies)** | Encabezados de Respuesta | Almacenamiento Local | Validar el envío de la cookie de sesión `set-cookie` provista de las directivas de seguridad `HttpOnly` y `SameSite=Strict`. | **PASA** |
| **14** | **Acceso y Visibilidad Global (Rol Admin)** | Cliente API / Ruta Protegida | Módulo Proyectos | Al consultar el endpoint protegido con la sesión del Administrador (ID 1), se listan por defecto la totalidad de los proyectos del ecosistema. | **PASA** |
| **15** | **Autenticación de Residente** | Cliente API (Postman/Bruno) | Endpoint Auth Login | Intercambiar credenciales; retornar `200 OK`, mensaje de éxito y el objeto correspondiente al nuevo contexto (`id: 4`, `rol: "residente"`). | **PASA** |

---

## 2. Análisis y Conclusiones del Ciclo de Pruebas

### A. Gestión de Permisos y Robustez del API (Pruebas 01 - 09)
* **Privacidad por Capas:** El backend demostró un aislamiento efectivo de recursos. El usuario residente inició con un entorno limpio, el cual no interfiere ni expone datos pertenecientes a otros bloques del desarrollo.
* **Integración de Reglas de Negocio:** El borrado lógico se ejecuta impecablemente de cara al cliente y la base de datos, garantizando que la información desactivada mantenga la integridad histórica sin perderse por completo (bandera `activo: 0`).
* **Seguridad Activa:** Los intentos de alteración fraudulenta o de peticiones cruzadas sin autorizar disparan las protecciones perimetrales, devolviendo de manera controlada un estado `403 Forbidden`.

### B. Persistencia y Ciclo de Sesiones (Pruebas 10 - 15)
* **Verificación de Mutación:** El contraste directo entre los estados de la base de datos (Pre y Post Update) confirma que las sentencias SQL mapean con precisión quirúrgica los campos de texto y fechas modificados desde el cliente API.
* **Mitigación de Vulnerabilidades Web:** El uso de tokens encapsulados en cookies con directivas `HttpOnly` (para mitigar ataques de inyección de scripts o lectura externa) y `SameSite=Strict` (para bloquear solicitudes maliciosas forjadas entre sitios) afianza la arquitectura de seguridad del proyecto.
* **Control de Contexto:** Al transicionar entre el inicio de sesión del Administrador y el Residente, las políticas de filtrado modifican dinámicamente la salida del API, permitiendo o limitando la visualización global según las prerrogativas asignadas a cada rol.