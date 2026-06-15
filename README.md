# CivilTrack - Plataforma Digital de Control Operativo en Campo

## 🏢 Datos Institucionales
* **Institución:** Benemérita Universidad Autónoma de Puebla (BUAP)
* **Facultad:** Ciencias de la Computación (FCC)
* **Materia:** Ingeniería de Software
* **Catedrática:** Dra. Arlem Aleida Castillo Avila
* **Periodo de Ejecución:** 15 de Junio de 2026 al 05 de Julio de 2026

### 👥 Integrantes del Equipo
* **Lopez Momox Limhi Gerson** (Matrícula: 202379434) - *Project Manager & Analista*
* **González Rojas Cristian Uriel** (Matrícula: 202336276) - *Líder de Backend & Arquitectura*
* **Bañuelos Atonal Omar** (Matrícula: 202319666) - *Líder de Frontend & UI/UX*
* **Cortes Tapia Ahmed** (Matrícula: ) - *QA Tester & Technical Writer*

---

## 🎯 1. Visión del Producto
CivilTrack es una Aplicación Web Progresiva (PWA) diseñada bajo un enfoque **Mobile-First ("con casco y botas")**, desarrollada exclusivamente para digitalizar y automatizar el reporte diario de obra, centralizando la evidencia fotográfica y técnica en la nube de forma segura, eliminando el caos operativo del papel y los grupos de WhatsApp en constructoras de pequeña y mediana escala.

---

## 📋 2. Product Backlog (Pila de Producto General)

| ID | Historia de Usuario / Requisito | Prioridad | Estimación (Puntos) | Estado |
| :--- | :--- | :--- | :--- | :--- |
| **HU-01** | Como Residente quiero Iniciar Sesión para acceder de manera segura a las obras asignadas. | Alta | 3 | Pendiente (Sprint 0) |
| **HU-02** | Como Administrador quiero Registrar Obras para dar de alta nuevos frentes de trabajo. | Alta | 5 | Pendiente |
| **HU-03** | Como Residente quiero Crear Reportes Diarios con texto y notas técnicas del avance físico. | Alta | 5 | Pendiente |
| **HU-04** | Como Residente quiero Adjuntar Evidencia Fotográfica usando la cámara o galería del móvil. | Alta | 8 | Pendiente |
| **HU-05** | Como Administrador quiero Visualizar un Dashboard con la línea de tiempo de reportes. | Media | 5 | Pendiente |
| **HU-06** | Como Administrador quiero Exportar Reportes en PDF/Excel para enviarlos a supervisión. | Alta | 8 | Pendiente |

---

## 📅 3. Cronograma Oficial y Calendario Recalibrado de Sprints
Ajustado estrictamente a la ventana crítica académica del **15/06/2026 al 08/07/2026**, limitando el ciclo de vida del MVP a **4 Sprints** de paso acelerado:

### FASE 1: Cimientos y Capa de Seguridad
* **Sprint 0: Setup, Arquitectura e Infraestructura Base**
  * *Fechas:* 15 Junio - 20 Junio, 2026
  * *Entregables:* Monorepo en GitHub, base de datos PostgreSQL estructurada y aprobada, endpoint `/api/status` ("Hello World") verificado mediante consumo desde React.
* **Sprint 1: Seguridad y Autenticación de Usuarios (Auth)**
  * *Fechas:* 21 Junio - 26 Junio, 2026
  * *Entregables:* Implementación de JSON Web Tokens (JWT) en la API REST, encriptación de contraseñas y pantalla interactiva de Login móvil protegida por roles.

### FASE 2: Núcleo Operativo, Multimedia y Cierre
* **Sprint 2: Core I - Módulo de Gestión de Obras (CRUD) y Estructura de Bitácora**
  * *Fechas:* 27 Junio - 02 Julio, 2026
  * *Entregables:* Panel de administración de proyectos y formularios de captura técnica de incidencias, personal activo, maquinaria e insumos diarios.
* **Sprint 3: Core II - Evidencia Fotográfica en la Nube y Motor de Exportación Unificado**
  * *Fechas:* 03 Julio - 05 Julio, 2026
  * *Entregables:* Integración con Cloud Storage para imágenes y algoritmo automatizado de compilación y descarga de reportes en formatos PDF y Excel (.xlsx).

---

## 🛠️ 4. Tablero de Control Ágil (Cierre de Sprint 0)

### Tareas Técnicas Concluidas (Sprint Backlog 0)
* `[TS0-01]` Setup del Repositorio Monorepo en GitHub y políticas de ramas (`main` / `develop`). **(Responsable: Limhi)**
* `[TS0-02]` Rediseño, corrección y aprobación del modelo relacional en PostgreSQL. **(Responsable: Ahmed)**
* `[TS0-03]` Configuración del servidor Backend (Node.js/Express) y endpoint base. **(Responsable: Cristian)**
* `[TS0-04]` Setup del Frontend con React, Vite y Tailwind CSS, y fetching de prueba exitoso. **(Responsable: Omar)**

### 📉 Burndown Chart (Métricas de Esfuerzo - Sprint 0)
* **Día 1:** 19 horas pendientes de esfuerzo técnico planificado.
* **Día 2:** 16 horas pendientes *(Limhi finaliza la estructura de accesos globales)*.
* **Día 3:** 10 hours pendientes *(Ahmed concluye los scripts SQL limpios)*.
* **Día 4:** 5 horas pendientes *(Cristian levanta el servidor y habilita CORS)*.
* **Día 5:** 0 horas pendientes *(Omar unifica la interfaz con Tailwind y despliega localmente)*.
* *Análisis de la Curva:* Descenso óptimo y controlado dentro de la ventana del bloque de infraestructura, eliminando deudas técnicas iniciales para el inicio del Sprint 1.

## 💼 5. Caso de Negocio Estructurado (Business Case Vivo)
*Soporte de Justificación Estratégica, Metodológica y Financiera bajo los lineamientos puros de la Ingeniería de Software.*

### 5.1 Definición y Propósito Fundamental
En la ingeniería de software, una excelente idea técnica no garantiza el financiamiento ni el éxito operativo. El Caso de Negocio de CivilTrack funciona como un documento directivo formal que justifica la asignación de nuestros recursos humanos, tecnológicos y temporales para este desarrollo. Su propósito central no es detallar la especificación técnica de requerimientos (SRS), sino responder de manera objetiva a la validación estratégica de por qué este sistema debe construirse y cuál es su viabilidad real frente al mercado de la construcción en campo.

#### 5.1.1 Justificación del Problema y Opciones de Solución
* **Problema Identificado:** El desfase de 48 a 72 horas en la consolidación de reportes diarios debido al uso de papel y la dispersión multimedia en WhatsApp.
* **Alternativas Evaluadas:**
  * *Adquisición de ERPs Comerciales (SAP/Neodata):* Descartado por altos costos de licenciamiento y excesiva complejidad de módulos contables que no se adaptan al uso rápido "con casco y botas" en el frente de obra.
  * *Desarrollo a Medida (CivilTrack PWA):* Opción seleccionada por su enfoque de usabilidad extrema (Mobile-First), nulo costo de licenciamiento de software comercial y adaptabilidad inmediata a los requerimientos del Ing. Uziel Ramírez.

---

### 5.2 Componentes Estructurales del Caso de Negocio
De acuerdo con los estándares formales de la antología del curso, se desglosan los elementos mínimos obligatorios:

#### A. Resumen Ejecutivo (Executive Summary)
CivilTrack es una plataforma digital Mobile-First diseñada para optimizar y automatizar el control operativo en frentes de obra civil de pequeñas y medianas constructoras, eliminando el desorden administrativo de las bitácoras físicas y los canales informales de mensajería. El proyecto se desarrollará bajo el marco ágil SCRUM en una ventana crítica de 4 Sprints (del 15 de junio al 8 de julio de 2026). Con una inversión inicial mínima enfocada en infraestructura Cloud, la solución mitiga el riesgo de pérdidas de información técnica y reduce en un 100% el tiempo de consolidación de reportes diarios, proyectando un Retorno de Inversión (ROI) operativo del 188% y un periodo de recuperación de la inversión (Payback Period) de apenas 1.5 meses tras su despliegue.

#### B. Definición del Problema u Oportunidad
El control operativo diario en campo de la construcción se enfrenta a un cuello de botella crítico en la fase de captura y centralización de datos. Actualmente, la dependencia de bitácoras físicas en papel y la dispersión de evidencia fotográfica en canales informales (WhatsApp) generan un retraso promedio de **48 a 72 horas** para consolidar un reporte unificado. Este desfase cuantitativo provoca:
* Un exceso de **4 horas semanales de trabajo administrativo muerto** por cada ingeniero residente destinado exclusivamente a ordenar fotos y transcribir datos manuales.
* Un riesgo latente de pérdida de cobro de conceptos ejecutados debido a la falta de metadatos fiables o extravío de documentos físicos.

#### C. Visión Tecnológica y Solución Propuesta
El alcance del producto de software consiste en el desarrollo de un Producto Mínimo Viable (MVP) estructurado como una Aplicación Web Progresiva (PWA). CivilTrack automatizará el proceso de levantamiento de incidencias, personal activo, maquinaria y costos básicos directos en campo, acoplando la captura multimedia instantánea de evidencias. Las características clave del MVP se liberarán de forma incremental a lo largo de 4 sprints fijos, garantizando una interfaz ultra simplificada apta para condiciones de baja conectividad y alta exposición solar en obra.

#### D. Análisis de Alternativas
Todo proyecto tecnológico tiene más de un camino. Evaluamos tres escenarios objetivos para CivilTrack:
1. **Hacer nada (Do nothing / Status Quo):** Mantener el flujo actual en papel y WhatsApp. Costo: Continuar perdiendo 16 horas de ingeniería al mes por residente y arriesgar penalizaciones contractuales por retrasos en la entrega de estimaciones técnicas a los clientes supervisores.
2. **Comprar solución comercial (COTS - Commercial Off-The-Shelf):** Adquirir licencias de ERPs constructivos. Costo: Inviable debido a los altos costos de licenciamiento corporativo y una curva de aprendizaje excesivamente compleja que no se adapta a las necesidades de ingenieros independientes o estudiantes.
3. **Desarrollar software a medida (In-house / CivilTrack):** Solución seleccionada. Permite un diseño Mobile-First enfocado exclusivamente en las necesidades del Ing. Uziel Irvinne López Ramírez, con control total de la infraestructura en la nube y nulos costos de intermediarios comerciales.

#### E. Análisis Costo-Beneficio y Viabilidad Financiera
* **Costos Directos e Indirectos:**
  * *Horas de desarrollo humano:* 4 Ingenieros de Software (Equipo BUAP) durante 4 Sprints (Costo de oportunidad académico).
  * *Infraestructura Cloud:* Base de Datos PostgreSQL, hosting de la API REST (Express) y almacenamiento multimedia (AWS S3 / Cloud Storage) estimado en un buffer operativo de ~$15 a $25 USD mensuales.
* **Beneficios Tangibles:** Recuperación de las 4 horas semanales por residente (eliminando la transcripción manual) y digitalización inmediata de reportes en formatos interoperables (PDF/Excel) listos para firmas.
* **Beneficios Intangibles:** Reducción drástica del estrés administrativo nocturno del supervisor, incremento de la transparencia técnica ante el cliente final y blindaje legal de la evidencia en la nube contra pérdidas del almacenamiento físico local.
* **Métricas Financieras Proyectadas:**
  * **Retorno de Inversión (ROI):** Calculado sobre la optimización del tiempo del personal técnico frente al costo mínimo de servidores, proyectando un beneficio neto del **188%** en el primer año de uso operativo.
  * **Tiempo de Recuperación (Payback Period):** La inversión inicial de configuración e infraestructura del Sprint 0 se amortiza por completo en los primeros **1.5 meses** tras el despliegue de la solución estable.

#### F. Evaluación de Riesgos y Matriz de Mitigación (Risk Assessment)
Para garantizar la viabilidad operativa y el control de la deuda técnica, las amenazas identificadas se gestionarán bajo la siguiente matriz:

| ID | Categoría de Riesgo | Descripción del Riesgo | Impacto | Estrategia de Mitigación Ágil |
| :--- | :--- | :--- | :--- | :--- |
| **R-01** | **Tecnológico** | Inconsistencia de entornos locales o fallas de conectividad con PostgreSQL como las ocurridas en el arranque. | Alto | Uso obligatorio del archivo `.env.example` y revisiones cruzadas (*pair programming*) antes de integrar código a `main`. |
| **R-02** | **Operativo** | Resistencia al cambio o dificultad para registrar datos bajo el sol e inclemencias climáticas en la obra. | Alto | Diseño de interfaz UI/UX Mobile-First basado estrictamente en las entrevistas previas con el Ing. Uziel Ramírez (botones grandes, flujos de pocos clics). |
| **R-03** | **Financiero / Tiempo** | Ventana de ejecución académica críticamente corta (23 días) que comprometa la entrega del MVP. | Crítico | Enfoque riguroso en Scrum. Congelamiento estricto del alcance al cierre del Sprint 2; el Sprint 3 priorizará la estabilidad del motor de exportación e imágenes sobre adiciones estéticas avanzadas. |

#### G. Cronograma de Hitos (Milestone Schedule)
Mapa de ruta de alto nivel para el cumplimiento de las metas críticas sin micro-gestión diaria:
* **Hito 1 (20/06/2026) - Cierre del Sprint 0:** Monorepo en GitHub configurado, base de datos PostgreSQL estructurada y aprobada, endpoint base verificado mediante fetching exitoso.
* **Hito 2 (26/06/2026) - Cierre del Sprint 1:** Capa de Seguridad activa, endpoints de la API REST tokenizados mediante JWT y pantalla de Login funcional.
* **Hito 3 (02/07/2026) - Cierre del Sprint 2:** Core I completado (Panel de administración de proyectos activos y formularios funcionales de captura de datos técnicos diarios).
* **Hito 4 (08/07/2026) - Cierre del Sprint 3:** Core II integrado (Carga multimedia a Cloud Storage y algoritmo de generación automatizada de reportes en PDF/Excel). Congelamiento definitivo del código del MVP para entrega formal a la Dra. Arlem Castillo.

---

### 5.3 El Caso de Negocio en Entornos Ágiles
A diferencia del modelo tradicional en cascada (Waterfall) donde este documento se congelaría de forma contractual antes de programar la primera línea de código, en CivilTrack el Caso de Negocio actúa como un **artefacto vivo**. Al finalizar cada una de nuestras revisiones de iteración (*Sprint Review*), se confrontará el incremento de software frente a la realidad operativa de la obra civil. 

La selección de **SCRUM** sobre Kanban está técnicamente fundamentada en la necesidad de establecer este *Timeboxing* estricto ante la ventana temporal compacta de 23 días (del 15/06/2026 al 08/07/2026). Los bloques de Sprints fijos y la división clara de roles asignados de manera transversal (Líder Frontend, Backend, DBA y PM) nos obligan a liberar incrementos de software funcionales y balancear la carga de trabajo, evitando que las condiciones del mercado del cliente o problemas técnicos superen los beneficios calculados. Si el costo del almacenamiento multimedia en la nube se eleva drásticamente, el marco ágil nos permite pivotar los requerimientos de manera anticipada, minimizando cualquier tipo de pérdida financiera.

### 5.4 Matriz de Mitigación de Riesgos Ágiles

| ID | Riesgo Detectado | Impacto | Estrategia de Mitigación Ágil |
| :--- | :--- | :--- | :--- |
| **R-01** | **Ventana de tiempo crítica (23 días):** Riesgo de no terminar el Core multimedia por retrasos de código. | Crítico | Restricción estricta del alcance en el Sprint 3. Priorizar la subida de imágenes base antes de pulir la estética visual avanzada. |
| **R-02** | **Inconsistencia de Entornos Locales:** Problemas de conectividad de los desarrolladores con PostgreSQL como los ocurridos inicialmente. | Alto | Uso obligatorio del archivo `.env.example` y auditoría en las minutas de los Daily Scrums por el PM. |