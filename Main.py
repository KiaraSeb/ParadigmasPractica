from EmpleadoFactory import EmpleadoFactory
from Compañia import Compañia
from Reporte import ReporteSalario, ReporteHoras

# Crear instancia única de la compañía (Singleton)
compañia = Compañia()

# Crear empleados usando la fábrica
empleado_por_hora = EmpleadoFactory.crear_empleado('Por Hora', 'Kiara', 1, 20)  # Tarifa: $20 por hora
empleado_mensual = EmpleadoFactory.crear_empleado('Mensual', 'Lucas', 2, 3000)  # Salario: $3000 por mes

# Agregar empleados a la compañía
compañia.agregar_empleado(empleado_por_hora)
compañia.agregar_empleado(empleado_mensual)

# Registrar horas trabajadas
empleado_por_hora.registrar_horas(160)
empleado_mensual.registrar_horas(160)

# Generar reportes
reporte_salario = ReporteSalario(compañia)
print(reporte_salario.generar())

reporte_horas = ReporteHoras(compañia)
print(reporte_horas.generar())
