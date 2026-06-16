## Ingeniería de Requerimientos: El Puente de Cristal
*Especificación formal de requerimientos del sistema basada en el equilibrio de Logos (Lógica/Función), Pathos (Experiencia/Emoción) y Ethos (Seguridad/Confianza).*

### Requerimientos Funcionales (Logos)
Representan la lógica pura del negocio, las funciones esenciales y las transformaciones de datos que el sistema debe ejecutar obligatoriamente para cumplir su propósito operativo.

1. **RF-01: Crear Reporte Diario:** El sistema debe permitir al Ingeniero Residente capturar el frente de trabajo, el porcentaje de avance físico y adjuntar un mínimo de 3 evidencias fotográficas con metadatos de geolocalización (GPS) integrados desde el dispositivo móvil.
2. **RF-02: Flujo de Aprobación/Rechazo:** El sistema debe proveer al Administrador un mecanismo de un solo clic para aprobar reportes, o en su defecto, la opción de rechazarlos requiriendo un motivo obligatorio. Al ejecutarse el rechazo, el sistema debe disparar una notificación automática al residente responsable.
3. **RF-03: Dashboard de Avance Semafórico:** El sistema debe desplegar un panel de control para el Administrador que visualice mediante un código de colores (verde/amarillo/rojo) el estado del avance real comparado frente al cronograma programado de todas las obras activas.
4. **RF-04: Vista de Solo Lectura para Clientes:** El sistema debe permitir el acceso a usuarios con rol de Cliente, restringiendo su interacción exclusivamente a la consulta del porcentaje de avance físico versus el porcentaje cobrado y a la visualización de la galería multimedia, sin permisos de edición.
5. **RF-05: Generación de Reportes PDF Oficiales:** El sistema debe compilar y exportar de forma automatizada un archivo PDF mensual que incluya portada institucional, la bitácora cronológica de texto y el compendio de evidencias fotográficas indexadas, estructurado para entregas bancarias o de supervisión.

### Requerimientos de Experiencia de Usuario (Pathos)
Definen las cualidades de usabilidad, eficiencia y empatía del sistema con el contexto real del usuario, buscando reducir la fricción operativa y asegurar la adopción tecnológica en campo.

1. **RXU-01: Persistencia Operativa Fuera de Línea (Modo Offline):** El sistema debe permitir al Residente la creación y almacenamiento local de reportes en ausencia de conectividad a internet, ejecutando una sincronización automática en segundo plano al detectar redes 4G/5G o WiFi.
2. **RXU-02: Optimización de Captura Rápida:** El flujo de la aplicación móvil debe garantizar que el tiempo transcurrido entre la apertura de la interfaz y la captura fotográfica no exceda los 3 segundos, incorporando componentes visuales de grandes dimensiones aptos para el uso con guantes de seguridad en obra.
3. **RXU-03: Claridad Cognitiva Inmediata:** La interfaz del Cliente debe diseñarse para transmitir el estado general del proyecto en menos de 5 segundos mediante indicadores visuales directos, omitiendo tecnicismos o jerga compleja de ingeniería de software.
4. **RXU-04: Mecanismo de Tolerancia a Fallos y Recuperación:** Ante cierres inesperados de la aplicación durante la redacción de una bitácora, el sistema debe restaurar de manera íntegra los bloques de texto y archivos multimedia temporales en la siguiente inicialización.
5. **RXU-05: Interfaz de Aprobación Masiva:** La vista del Administrador debe permitir procesar de manera continua hasta 10 reportes diarios en una sola pantalla interactiva, minimizando la necesidad de desplazamientos (scroll) o clics redundantes.

### Requerimientos de Seguridad y Confianza (Ethos)
Establecen las directrices de integridad, blindaje técnico, autenticidad y cumplimiento de políticas que garantizan la autoridad y la validez legal de la información almacenada en el sistema.

1. **RS-01: Autenticación Multifactor (2FA):** El acceso para perfiles con rol de Administrador debe requerir obligatoriamente un segundo factor de autenticación basado en contraseñas temporales de un solo uso (TOTP) generadas por SMS o aplicaciones de autenticación.
2. **RS-02: Registro de Auditoría Inmutable (Ledger Logs):** El sistema debe escribir una bitácora de auditoría no modificable ni eliminable que registre de manera detallada el autor, tipo de acción, fecha, hora exacta e IP de procedencia para cada interacción con los reportes.
3. **RS-03: Cifrado Extremo a Extremo de Datos:** Toda transferencia de datos multimedia e información técnica debe viajar protegida bajo el protocolo TLS 1.3, y los datos en reposo dentro de la base de datos (así como el almacenamiento temporal offline) deben estar encriptados mediante el estándar AES-256.
4. **RS-04: Segregación Estricta de Roles y Datos:** El sistema debe aplicar políticas de aislamiento a nivel de base de datos para asegurar que los Clientes solo visualicen sus proyectos específicos sin acceso a costos internos, y que los Residentes operen únicamente dentro de los frentes de trabajo explícitamente asignados.
5. **RS-05: Validación de Evidencia y Estampado Digital:** El sistema debe rechazar de forma automática la carga de imágenes si el sensor GPS del dispositivo se encuentra desactivado o si las coordenadas capturadas caen fuera del polígono georreferenciado de la obra. Cada imagen aceptada se procesará para incrustar una marca de agua indeleble con el identificador del usuario, la marca de tiempo y las coordenadas de captura.