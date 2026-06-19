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

## 📊 4. Matriz de Priorización MoSCoW (Alcance del Negocio - MVP)
*Clasificación estratégica de las funciones del sistema diseñada para la toma de decisiones ejecutivas, asegurando la entrega de un producto funcional, seguro y de alto valor en la ventana de 23 días.*

| 🟢 DEBE TENER (Must Have) | 🔵 DEBERÍA TENER (Should Have) |
| :--- | :--- |
| *Lo que el negocio necesita obligatoriamente para operar de forma segura desde el día uno.*<br><br>* **Reporte de incidencias en campo:** El Ingeniero Residente podrá registrar lo que pasa en la obra con texto y un límite de 3 fotos (las fotos son opcionales y se pueden subir después).<br>* **Control de asistencia y maquinaria:** Formulario digital para pasar lista al personal de las cuadrillas y registrar las horas de uso de la maquinaria pesada.<br>* **Funcionamiento sin internet (Modo Offline):** Capacidad de la aplicación para guardar los datos en zonas rurales o frentes de obra sin señal celular, sincronizándose al recuperar conexión.<br>* **Acceso seguro y control de roles:** Pantalla de inicio de sesión donde el sistema identifica si eres Administrador, Cliente o Residente para mostrarte solo lo que te corresponde.<br>* **Cerrado de sesión por inactividad:** Mecanismo de seguridad que cierra la sesión automáticamente tras un periodo de inactividad, protegiendo los datos si el dispositivo se pierde o se queda encendido en la obra.<br>* **Búsqueda de proyectos y reportes:** Barra de búsqueda inteligente que permite localizar rápidamente cualquier obra o bitácora específica escribiendo su nombre, optimizando el tiempo de consulta.<br>* **Privacidad de datos:** Garantía de que los datos de la obra están protegidos bajo estándares de seguridad informática y accesos restringidos. | *Funciones de alto valor que complementan la operación, pero no detienen el lanzamiento.*<br><br>* **Panel de análisis (Dashboard):** Gráficos visuales dentro de la plataforma para ver el estatus de los proyectos y un resumen de los costos directos generados.<br>* **Exportación automatizada a PDF:** Botón para descargar reportes e incidencias en un formato PDF limpio, listo para imprimir, enviar por correo o firmar.<br>* **Carga rápida de fotos:** Optimización para que al presionar el botón de fotos se abra directamente la cámara nativa del celular, ahorrando tiempo en el frente de obra. |
| 🟤 NO TENDRÁ (Won't Have) | 🟣 PODRÍA TENER (Could Have) |
| *Funciones totalmente fuera del presupuesto y alcance de esta primera etapa.*<br><br>* **Exportación de reportes a archivos de Excel:** El sistema se enfocará exclusivamente en reportes PDF legibles e institucionales.<br>* **Rastreo satelital por GPS restrictivo:** No se bloqueará la aplicación por ubicación geográfica ni se validarán polígonos topográficos en tiempo real.<br>* **Módulo de juego o recompensas (Gamificación):** No habrá sistemas de puntos ni premios por rendimiento de personal.<br>* **Diseño visual personalizado por usuario:** La interfaz mantendrá una estética fija, limpia y corporativa sin opciones de cambio de temas.<br>* **Dictado por voz:** No se incluirá control de manos libres ni dictado de incidencias mediante comandos de voz. | *Mejoras secundarias que se sumarán solo si el tiempo de desarrollo lo permite.*<br><br>* **Modo oscuro integrado:** Opción de cambiar la pantalla a tonos oscuros para evitar el cansancio de la vista en jornadas nocturnas o bajo el sol brillante del día.<br>* **Soporte multi-idioma:** Preparación del sistema para traducción a otros idiomas (el lanzamiento inicial será 100% en español). |

## 5. Especificación del Diagrama de Casos de Uso
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

## 6. Especificación del Diagrama de Casos de Uso
*Modelado formal del comportamiento del sistema basado en los cuadrantes de la Matriz MoSCoW, extendido para soportar Control de Acceso Basado en Roles (RBAC) y persistencia flexible de multimedia.*

### 6.1 Elementos del Diagrama

#### A. Actores del Sistema
* **👤 Ingeniero Residente:** Actor operativo en campo. Registra incidencias, asistencia y maquinaria. Solo tiene permitido visualizar y editar las bitácoras que están explícitamente ligadas a su usuario.
* **👤 Administrador:** Usuario con control total del sistema. Tiene acceso irrestricto para visualizar, auditar y consultar todos los reportes de todas las obras del sistema.
* **👤 Cliente-Dueño / Inversionista:** Actor de supervisión ejecutiva. Cuenta con permisos globales de solo lectura para visualizar el avance de todos los reportes e incidencias del proyecto.
* **👤 Desarrollador:** Perfil técnico de soporte. Cuenta con acceso global de lectura a todos los reportes con fines de mantenimiento técnico, auditoría de datos y depuración de la base de datos.

#### B. Límites del Sistema (System Boundary): CivilTrack PWA
* Frontera que encapsula los servicios de la aplicación y valida los niveles de acceso mediante tokens JWT según el rol del actor.

---

### 6.2 Tabla de Casos de Uso (Mapeo MoSCoW & Roles)

| ID | Caso de Uso | Actores | Cat. MoSCoW | Descripción |
| :--- | :--- | :--- | :--- | :--- |
| **CU-01** | Iniciar Sesión | Todos los actores | **Must Have** | Validación de credenciales. Retorna el token JWT con el rol asignado. |
| **CU-02** | Registrar Incidencia | Ingeniero Residente | **Must Have** | Permite crear la bitácora diaria. Las fotos son opcionales (se puede inicializar con 0 fotos). |
| **CU-03** | Controlar Recursos | Ingeniero Residente | **Must Have** | Captura diaria de asistencia de cuadrillas y uso de maquinaria. |
| **CU-04** | Actualizar Multimedia | Ingeniero Residente | **Must Have** | Permite adjuntar o actualizar las fotografías del reporte de forma posterior. |
| **CU-05** | Consultar Reportes (Propio) | Ingeniero Residente | **Must Have** | Visualización restringida únicamente a las bitácoras asignadas a su usuario. |
| **CU-06** | Consultar Reportes (Global) | Administrador, Cliente, Desarrollador | **Must Have** | Acceso irrestricto para visualizar el histórico completo de incidencias del sistema. |
| **CU-07** | Consultar Dashboard | Supervisor, Administrador, Cliente | **Should Have** | Visualización de métricas y gráficos de rendimiento financiero local. |
| **CU-08** | Exportar Reporte PDF | Supervisor, Administrador, Cliente | **Should Have** | Generación de reportes PDF limpios basados en los filtros de acceso aplicados. |

---

### 6.3 Diagrama de Casos de Uso en Mermaid

```mermaid
graph LR
    %% Definición de Actores (Izquierda y Derecha para distribución limpia)
    subgraph Actores_Campo [Operación]
        Residente["👤 Ingeniero Residente"]
    end

    subgraph Actores_Admin [Gestión y Soporte]
        Admin["👤 Administrador"]
        Cliente["👤 Cliente/Inversionista"]
        Desarrollador["👤 Desarrollador"]
    end

    %% Límite del Sistema
    subgraph CivilTrack["📱 Límite del Sistema: CivilTrack PWA"]
        CU01((CU-01: Iniciar Sesión))
        CU02((CU-02: Registrar Incidencia))
        CU03((CU-03: Controlar Recursos))
        CU04((CU-04: Actualizar Multimedia))
        CU05((CU-05: Consultar Reportes Propio))
        CU06((CU-06: Consultar Reportes Global))
        CU07((CU-07: Consultar Dashboard))
        CU08((CU-08: Exportar Reporte PDF))
    end

    %% Estilos MoSCoW
    style CU01 fill:#e1f5fe,stroke:#0288d1,stroke-width:2px
    style CU02 fill:#e8f5e9,stroke:#2e7d32,stroke-width:2px
    style CU03 fill:#e8f5e9,stroke:#2e7d32,stroke-width:2px
    style CU04 fill:#e8f5e9,stroke:#2e7d32,stroke-width:2px
    style CU05 fill:#e8f5e9,stroke:#2e7d32,stroke-width:2px
    style CU06 fill:#e8f5e9,stroke:#2e7d32,stroke-width:2px
    style CU07 fill:#fff3e0,stroke:#ef6c00,stroke-width:2px
    style CU08 fill:#fff3e0,stroke:#ef6c00,stroke-width:2px

    %% Conexiones del Residente (Scope Local)
    Residente --> CU01
    Residente --> CU02
    Residente --> CU03
    Residente --> CU04
    Residente --> CU05
    Residente --> CU07
    Residente --> CU08

    %% Conexiones de Roles Globales (Scope Total)
    Admin --> CU01
    Admin --> CU06
    Admin --> CU07
    Admin --> CU08

    Cliente --> CU01
    Cliente --> CU06
    Cliente --> CU07
    Cliente --> CU08

    Desarrollador --> CU01
    Desarrollador --> CU06

    %% Inclusiones <<include>> hacia autenticación
    CU02 -. "<<include>>" .-> CU01
    CU03 -. "<<include>>" .-> CU01
    CU04 -. "<<include>>" .-> CU01
    CU05 -. "<<include>>" .-> CU01
    CU06 -. "<<include>>" .-> CU01
    CU07 -. "<<include>>" .-> CU01
    CU08 -. "<<include>>" .-> CU01