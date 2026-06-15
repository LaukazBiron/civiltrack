# CivilTrack - Plataforma Digital de Control Operativo en Campo

## 🏢 Datos Institucionales
* **Institución:** Benemérita Universidad Autónoma de Puebla (BUAP)
* **Facultad:** Ciencias de la Computación (FCC)
* **Materia:** Ingeniería de Software
* **Catedrática:** Dra. Arlem Aleida Castillo Avila
* **Periodo de Ejecución:** 15 de Junio de 2026 al 08 de Julio de 2026

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
  * *Fechas:* 03 Julio - 08 Julio, 2026
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

## 💼 5. Caso de Negocio Absoluto (Business Case Vivo)

De acuerdo con los fundamentos de ingeniería de software institucionales, este Caso de Negocio no se concibe como un contrato inmutable, sino como un **artefacto vivo** que se recalibra al cierre de cada Sprint Review para asegurar el alineamiento de valor con el cliente.

### 5.1 Justificación del Problema y Opciones de Solución
* **Problema Identificado:** El desfase de 48 a 72 horas en la consolidación de reportes diarios debido al uso de papel y la dispersión multimedia en WhatsApp.
* **Alternativas Evaluadas:**
  1. *Adquisición de ERPs Comerciales (SAP/Neodata):* Descartado por altos costos de licenciamiento y excesiva complejidad de módulos contables que no se adaptan al uso rápido "con casco y botas" en el frente de obra.
  2. *Desarrollo a Medida (CivilTrack PWA):* Opción seleccionada por su enfoque de usabilidad extrema (Mobile-First), nulo costo de licenciamiento de software comercial y adaptabilidad inmediata a los requerimientos del Ing. Uziel Ramírez.

### 5.2 Simulación de Viabilidad Financiera y Métrica de Retorno de Inversión (ROI)

Para justificar de forma absoluta la viabilidad ante el sínodo evaluador, se presenta el análisis de flujos y recuperación basado en un despliegue para una constructora mediana estándar con 3 frentes de obra activos:

#### A. Costos de Desarrollo e Infraestructura (Estimados para el MVP)
* **Capital Humano (Costo de Oportunidad - Equipo BUAP):** 4 Ingenieros de Software durante 4 Sprints (23 días).
* **Infraestructura Cloud Estándar:** Servidor Node.js (Render/Heroku) + BD PostgreSQL + AWS S3 / Cloud Storage = ~$15 - $25 USD / mes (Fase inicial).

#### B. Beneficios Tangibles y Cuantificables (Cálculo del ROI Operativo)
* **Ahorro de Tiempo Directo:** 4 horas semanales recuperadas por cada Ingeniero Residente (evitando transcripción manual de reportes).
  * *Cálculo:* 4 horas x 3 residentes = 12 horas de ingeniería optimizadas a la semana.
* **Reducción de Pérdidas por Conceptos No Cobrados:** Mitigación del 100% en la pérdida de evidencia fotográfica. Ante una aclaración con el cliente supervisor, la disponibilidad inmediata de los metadatos de imágenes evita retrasos en los pagos de estimaciones técnicas (frecuentemente valuadas en miles de pesos).

#### C. Beneficios Intangibles
* **Reducción del Estrés Administrativo:** Eliminación de llamadas, correos e interrogatorios nocturnos para averiguar el avance del día.
* **Trazabilidad Legal:** Almacenamiento seguro, cronológico e inalterable de incidencias en campo ante auditorías o penalizaciones por retraso de obra.

### 5.3 Matriz de Mitigación de Riesgos Ágiles

| ID | Riesgo Detectado | Impacto | Estrategia de Mitigación Ágil |
| :--- | :--- | :--- | :--- |
| **R-01** | **Ventana de tiempo crítica (23 días):** Riesgo de no terminar el Core multimedia por retrasos de código. | Crítico | Restricción estricta del alcance en el Sprint 3. Priorizar la subida de imágenes base antes de pulir la estética visual avanzada. |
| **R-02** | **Inconsistencia de Entornos Locales:** Problemas de conectividad de los desarrolladores con PostgreSQL como los ocurridos inicialmente. | Alto | Uso obligatorio del archivo `.env.example` y auditoría en las minutas de los Daily Scrums por el PM. |