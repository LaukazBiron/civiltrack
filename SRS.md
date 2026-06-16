# 📝 Software Requirements Specification (SRS) - CivilTrack
*Especificación formal de requerimientos del sistema basada en el equilibrio metodológico de Logos (Lógica/Función), Pathos (Experiencia/Emoción) y Ethos (Seguridad/Confianza), alineada estrictamente al alcance del MVP.*

---

## 1. Requerimientos Funcionales (Logos)

* **RF-01: Registro de Incidencias de Obra:** El sistema debe permitir al usuario capturar las incidencias diarias del frente de trabajo, detallando observaciones de texto y adjuntando hasta 3 evidencias fotográficas desde el almacenamiento o cámara del dispositivo.
* **RF-02: Control de Recursos en Campo:** El sistema debe proveer formularios dedicados para el registro diario del personal activo (asistencia/cuadrillas) y la maquinaria utilizada en la jornada.
* **RF-03: Visualización de Estatus Operativo:** El sistema debe desplegar un panel de control local (Dashboard) que muestre de forma gráfica el rendimiento diario del proyecto, desglosando los costos directos básicos capturados.
* **RF-04: Historial y Edición de Bitácoras:** El sistema debe permitir al usuario consultar y editar bitácoras operativas de jornadas anteriores para corregir datos técnicos o de asistencia antes del cierre mensual.
* **RF-05: Exportación Automatizada (PDF/Excel):** El sistema debe compilar la información capturada y exportarla en formatos interoperables (PDF y hojas de cálculo Excel) estructurados de forma limpia para revisiones o firmas.

---

## 2. Requerimientos de Experiencia de Usuario (Pathos)

* **RXU-01: Persistencia Operativa Fuera de Línea (Modo Offline):** El sistema debe permitir la creación y almacenamiento local de reportes en la PWA ante la ausencia de conectividad a internet, ejecutando una sincronización automática al detectar red de datos o WiFi.
* **RXU-02: Interfaz de Usabilidad Extrema en Campo:** El flujo de la aplicación debe optimizarse para que la interacción requiera la menor cantidad de pasos posibles, empleando botones de grandes dimensiones y tipografías legibles bajo condiciones de alta exposición solar.
* **RXU-03: Retroalimentación Inmediata de Captura:** El sistema debe notificar visualmente al usuario de manera clara cuando un registro o fotografía se haya guardado localmente con éxito, mitigando la incertidumbre en zonas de baja conectividad.
* **RXU-04: Mecanismo de Tolerancia a Fallos:** Ante cierres inesperados de la aplicación durante la redacción de una bitácora, el sistema debe ser capaz de restaurar los bloques de texto y datos temporales en la siguiente inicialización.
* **RXU-05: Carga Ágil de Multimedia:** El componente de carga multimedia debe permitir tomar o seleccionar imágenes de manera fluida desde el dispositivo móvil, minimizando el tiempo de interacción del usuario en el frente de trabajo.

---

## 3. Requerimientos de Seguridad y Confianza (Ethos)

* **RS-01: Autenticación Centralizada:** El acceso al sistema debe restringirse mediante un inicio de sesión controlado por correo electrónico y contraseña, administrando las sesiones activas a través de tokens JWT de forma segura.
* **RS-02: Protección de Configuración:** El sistema debe almacenar las credenciales de acceso a la base de datos PostgreSQL y las llaves de la API únicamente mediante variables de entorno protegidas (`.env`), aislándolas del código fuente público.
* **RS-03: Cifrado de Comunicaciones:** Toda transferencia de datos técnicos e información operativa entre el cliente web (PWA) y el servidor de la API REST de Express debe viajar protegida bajo protocolos seguros de transmisión (HTTPS/TLS).
* **RS-04: Integridad Referencial de Datos:** El sistema debe garantizar mediante restricciones en la base de datos que las incidencias, recursos y registros financieros no queden huérfanos o se corrompan durante las operaciones de escritura.
* **RS-05: Validación y Sanitización de Entradas:** El backend del sistema debe validar y sanitizar estrictamente las entradas de texto y valores numéricos en los formularios de asistencia y costos directos, rechazando cualquier intento de inyección de código.