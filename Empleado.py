from abc import ABC, abstractmethod

# Clase abstracta Empleado
class Empleado(ABC):
    def __init__(self, nombre: str, id: int, tipo: str):
        self.nombre = nombre
        self.id = id
        self.tipo = tipo

    @abstractmethod
    def calcular_salario(self) -> float:
        pass

    @abstractmethod
    def obtener_total_horas_trabajadas(self) -> int:
        pass

    def obtener_nombre(self) -> str:
        return self.nombre

    def obtener_id(self) -> int:
        return self.id

# Decorador para agregar funcionalidad adicional a los empleados
class EmpleadoDecorator(Empleado):
    def __init__(self, empleado: Empleado):
        super().__init__(empleado.obtener_nombre(), empleado.obtener_id(), "Decorador")
        self.empleado = empleado

    @abstractmethod
    def calcular_salario(self) -> float:
        pass

    @abstractmethod
    def obtener_total_horas_trabajadas(self) -> int:
        pass

# Decorador para agregar horas extra
class EmpleadoConHorasExtra(EmpleadoDecorator):
    def __init__(self, empleado: Empleado, tarifa_extra: float):
        super().__init__(empleado)
        self.horas_extra = 0
        self.tarifa_extra = tarifa_extra

    def registrar_horas_extra(self, horas: int):
        self.horas_extra += horas

    def calcular_salario(self) -> float:
        return self.empleado.calcular_salario() + self.horas_extra * self.tarifa_extra

    def obtener_total_horas_trabajadas(self) -> int:
        return self.empleado.obtener_total_horas_trabajadas() + self.horas_extra

# Empleado por hora
class EmpleadoPorHora(Empleado):
    def __init__(self, nombre: str, id: int, tarifa_por_hora: float):
        super().__init__(nombre, id, 'Por Hora')
        self.tarifa_por_hora = tarifa_por_hora
        self.total_horas_trabajadas = 0

    def calcular_salario(self) -> float:
        return self.total_horas_trabajadas * self.tarifa_por_hora

    def registrar_horas(self, horas: int):
        self.total_horas_trabajadas += horas

    def obtener_total_horas_trabajadas(self) -> int:
        return self.total_horas_trabajadas

# Empleado mensual
class EmpleadoMensual(Empleado):
    def __init__(self, nombre: str, id: int, salario_mensual: float):
        super().__init__(nombre, id, 'Mensual')
        self.salario_mensual = salario_mensual
        self.total_horas_trabajadas = 0

    def calcular_salario(self) -> float:
        return self.salario_mensual

    def registrar_horas(self, horas: int):
        self.total_horas_trabajadas += horas

    def obtener_total_horas_trabajadas(self) -> int:
        return self.total_horas_trabajadas

class EmpleadoFactory:
    @staticmethod
    def crear_empleado(tipo: str, nombre: str, id: int, salario: float):
        if tipo == 'Por Hora':
            return EmpleadoPorHora(nombre, id, salario)
        elif tipo == 'Mensual':
            return EmpleadoMensual(nombre, id, salario)
        else:
            raise ValueError('Tipo de empleado no soportado')