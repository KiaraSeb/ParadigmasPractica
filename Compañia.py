from Empleado import Empleado

class Compañia:
    _instancia = None

    def __new__(cls):
        if cls._instancia is None:
            cls._instancia = super(Compañia, cls).__new__(cls)
            cls._instancia.empleados = []
        return cls._instancia

    def agregar_empleado(self, empleado: Empleado):
        self.empleados.append(empleado)

    def calcular_nomina_total(self) -> float:
        return sum(empleado.calcular_salario() for empleado in self.empleados)

    def calcular_horas_totales(self) -> int:
        return sum(empleado.obtener_total_horas_trabajadas() for empleado in self.empleados)

    def obtener_empleados(self):
        return self.empleados
