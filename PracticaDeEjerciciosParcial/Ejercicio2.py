class Gasto:
    def __init__(self, descripcion: str, monto: float):
        self.descripcion = descripcion
        self.monto = monto

    def mostrar(self) -> str:
        return f"{self.descripcion}: ${self.monto}"

class GastoCompra(Gasto):
    def __init__(self, producto: str, monto: float):
        super().__init__(f"Gasto por compra de {producto}", monto)

class GastoServicio(Gasto):
    def __init__(self, compania: str, monto: float):
        super().__init__(f"Gasto por servicio de la compañía '{compania}'", monto)

class GastoExtraordinario(Gasto):
    def __init__(self, descripcion: str, monto: float):
        super().__init__(f"Gasto extraordinario '{descripcion}'", monto)

# Ejemplo de uso
gastos = [
    GastoCompra("productos de limpieza", 3000),
    GastoServicio("ServiLimp", 2500),
    GastoExtraordinario("Medialunas para la reunión", 100)
]

for gasto in gastos:
    print(gasto.mostrar())
