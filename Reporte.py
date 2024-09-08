from abc import ABC, abstractmethod
from Compañia import Compañia

class Reporte(ABC):
    def __init__(self, compañia: Compañia):
        self.compañia = compañia

    def generar(self) -> str:
        encabezado = f"Reporte generado el: {self.obtener_fecha_actual()}\n"
        cuerpo = self.generar_cuerpo()
        return encabezado + cuerpo

    @staticmethod
    def obtener_fecha_actual():
        from datetime import datetime
        return datetime.now().isoformat()

    @abstractmethod
    def generar_cuerpo(self) -> str:
        pass

class ReporteSalario(Reporte):
    def generar_cuerpo(self) -> str:
        total_salarios = self.compañia.calcular_nomina_total()
        return f"Nómina Total: {total_salarios}\n"

class ReporteHoras(Reporte):
    def generar_cuerpo(self) -> str:
        cuerpo = 'Horas trabajadas por empleado:\n'
        for empleado in self.compañia.obtener_empleados():
            cuerpo += f"{empleado.obtener_nombre()}: {empleado.obtener_total_horas_trabajadas()} horas\n"
        total_horas = self.compañia.calcular_horas_totales()
        cuerpo += f"Total de horas trabajadas en la empresa: {total_horas} horas\n"
        return cuerpo
