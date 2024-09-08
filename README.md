Descripción de los Patrones de Diseño Utilizados en Python
Factory Method: Se utiliza en EmpleadoFactory.py para crear empleados de diferentes tipos (por hora o mensual) de forma flexible.

Singleton: La clase Compañia sigue el patrón Singleton, lo que garantiza que solo haya una única instancia de la compañía en toda la aplicación.

Decorator: Se utiliza para extender el comportamiento de los empleados (agregar horas extra, por ejemplo) sin modificar las clases de empleado originales.

Template Method: La clase Reporte implementa un método base para generar reportes, mientras que las clases derivadas (ReporteSalario y ReporteHoras) implementan la parte específica del contenido del reporte.