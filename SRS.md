# 📝 Software Requirements Specification (SRS) - CivilTrack
*Especificación formal de requerimientos del sistema basada en el equilibrio metodológico de Logos (Lógica/Función), Pathos (Experiencia/Emoción) y Ethos (Seguridad/Confianza), alineada estrictamente al alcance del MVP.*

---

## 1. Requerimientos Funcionales (Logos)

* **RF-01: Registro de Incidencias de Obra:** El sistema debe permitir al usuario capturar las incidencias diarias del frente de trabajo, detallando observaciones de texto y adjuntando hasta 3 evidencias fotográficas desde el almacenamiento o cámara del dispositivo.
* **RF-02: Control de Recursos en Campo:** El sistema debe proveer formularios dedicados para el registro diario del personal activo (asistencia/cuadrillas) y la maquinaria utilizada en la jornada.
* **RF-03: Visualización de Estatus Operativo:** El sistema debe desplegar un panel de control local (Dashboard) que muestre de forma gráfica el rendimiento diario del proyecto, desglosando los costos directos básicos capturados.
* **RF-04: Historial y Edición de Bitácoras:** El sistema debe permitir al usuario consultar y editar bitácoras operativas de jornadas anteriores para corregir datos técnicos o de asistencia antes del cierre mensual.
* **RF-05: Exportación Automatizada (PDF):** El sistema debe compilar la información capturada y exportarla en PDF estructurados de forma limpia para revisiones o firmas.

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

## 4. Matriz de Priorización MoSCoW (Lanzamiento de MVP)
*Clasificación estratégica del alcance del proyecto basada en la estructura formal de cuadrantes para asegurar el cumplimiento de la ventana de desarrollo de 23 días sin sobrecarga de deuda técnica.*

| 🟢 DEBE TENER (Must Have) | 🔵 DEBERÍA TENER (Should Have) |
| :--- | :--- |
| *Funciones principales del producto, cumplimiento y acceso.*<br><br>* **RF-01: Registro de incidencias en campo** (Texto libre y almacenamiento local de hasta 3 fotografías).<br>* **RF-02: Control de recursos esenciales** (Formularios de asistencia de personal y uso de maquinaria pesada).<br>* **RXU-01: Persistencia fuera de línea (Modo Offline)** básico para guardar los datos localmente en la PWA sin señal.<br>* **RS-01: Registro y autenticación de usuario** mediante inicio de sesión tradicional y manejo de tokens JWT.<br>* **RS-02: Protección de configuración** de la base de datos PostgreSQL mediante variables de entorno (`.env`). | *Características importantes que aportan gran valor, pero no detienen el lanzamiento.*<br><br>* **RF-03: Panel de análisis operativo (Dashboard)** gráfico local que desglose visualmente los costos directos capturados.<br>* **RF-05: Exportación Automatizada a PDF** (Compilación limpia de la información en un reporte PDF listo para firmas o revisiones).<br>* **RXU-05: Carga ágil de multimedia** que se conecte directamente con la cámara nativa del dispositivo móvil para reducir clics en el frente de obra. |
| 🟤 NO TENDRÁ (Won't Have) | 🟣 PODRÍA TENER (Could Have) |
| *Funciones totalmente fuera del alcance del MVP académico actual.*<br><br>* **Exportación interoperable a formato Excel** u otras hojas de cálculo (priorizando únicamente el motor de PDF).<br>* **Sistemas de georreferenciación restrictivos (GPS)** o validaciones complejas por polígonos topográficos en campo.<br>* **Funciones de gamificación** o sistemas de recompensas por rendimiento de cuadrillas.<br>* **Temas de usuario personalizados** o interfaces altamente configurables.<br>* **Integración de comandos de voz** para el dictado de incidencias de manos libres. | *Mejoras secundarias o estéticas si el tiempo y los Sprints lo permiten.*<br><br>* **Modo oscuro** en la interfaz UI/UX para reducir la fatiga visual en jornadas nocturnas o ante alta exposición solar.<br>* **Opciones de filtrado avanzado** e histórico multidimensional en la consulta de bitácoras pasadas.<br>* **Soporte de idiomas adicional** (diseño internacional), manteniendo la aplicación exclusivamente en español para el lanzamiento. |

## 5. Especificación del Diagrama de Casos de Uso - El Puente de Cristal
*Modelado formal del comportamiento del sistema basado estrictamente en las fronteras definidas por los cuadrantes Must Have y Should Have de la Matriz MoSCoW. Los requerimientos Could y Won't Have quedan explícitamente fuera del límite del sistema.*

### 5.1 Elementos del Diagrama

#### A. Actores del Sistema
*   **👤 Supervisor de Obra (Actor Principal):** Personal técnico en el frente de trabajo encargado de la captura de datos, gestión de recursos y consulta del estatus operativo de la obra civil.

#### B. Límites del Sistema (System Boundary): CivilTrack PWA
*   Representa la frontera de la aplicación web progresiva y la API REST que encapsula la lógica de negocio autorizada.

---

### 5.2 Tabla de Casos de Uso (Mapeo MoSCoW)

| ID | Caso de Uso (Acción) | Actor | Categoría MoSCoW | Requerimiento Asociado | Description |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **CU-01** | Iniciar Sesión | Supervisor | **Must Have** | RS-01 / RS-02 | El usuario ingresa sus credenciales de forma segura para obtener un token JWT y acceder al sistema. |
| **CU-02** | Registrar Incidencia | Supervisor | **Must Have** | RF-01 / RXU-01 | Permite redactar la bitácora de la jornada y almacenar hasta 3 fotografías, con soporte offline si no hay red. |
| **CU-03** | Controlar Recursos | Supervisor | **Must Have** | RF-02 | Permite registrar la asistencia de las cuadrillas de personal y el uso cronológico de la maquinaria pesada. |
| **CU-04** | Consultar Dashboard | Supervisor | **Should Have** | RF-03 / RXU-03 | Despliega gráficos locales con el rendimiento financiero diario y el desglose de costos directos capturados. |
| **CU-05** | Exportar Reporte PDF | Supervisor | **Should Have** | RF-04 / RF-05 | Compila la información de las bitácoras seleccionadas y genera de forma automatizada un archivo PDF limpio listo para firmas. |

---

### 5.3 Relaciones y Reglas de Negocio (Diagramación)

1. **Relación de Inclusión (`<<include>>`):**
   * Los Casos de Uso **CU-02 (Registrar Incidencia)**, **CU-03 (Controlar Recursos)**, **CU-04 (Consultar Dashboard)** y **CU-05 (Exportar Reporte PDF)** requieren obligatoriamente que el usuario esté autenticado. Por lo tanto, todos ellos incluyen (`<<include>>`) conceptualmente al **CU-01 (Iniciar Sesión)**.
2. **Exclusiones Explícitas (Fuera del Límite del Sistema):**
   * **NO** se modela el caso de uso "Exportar a Excel" (Excluido del MVP).
   * **NO** se modelan módulos de "Validación de Polígonos GPS", "Configuración de Idiomas" ni "Activación de Comandos de Voz", ya que violarían la restricción crítica del bloque de la antología.