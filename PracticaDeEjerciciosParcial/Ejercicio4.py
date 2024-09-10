#Red social con relaciones entre usuarios, grupos y páginas
class Usuario:
    def __init__(self, nombre):
        self.nombre = nombre
        self.relaciones = []

    def agregar_relacion(self, relacion):
        self.relaciones.append(relacion)

    def mostrar_relaciones(self):
        for relacion in self.relaciones:
            print(f"{self.nombre} está relacionado con {relacion.mostrar()}")

class Relacion:
    def __init__(self, tipo, conectado_con):
        self.tipo = tipo
        self.conectado_con = conectado_con

    def mostrar(self):
        return f"{self.conectado_con.nombre} (Tipo: {self.tipo})"

class Grupo:
    def __init__(self, nombre):
        self.nombre = nombre

class Pagina:
    def __init__(self, nombre):
        self.nombre = nombre

# Ejemplo de uso
usuario1 = Usuario("Juan")
usuario2 = Usuario("Ana")
grupo = Grupo("Amantes de la tecnología")
pagina = Pagina("Página oficial de Python")

usuario1.agregar_relacion(Relacion("Amistad", usuario2))
usuario1.agregar_relacion(Relacion("Miembro", grupo))
usuario1.agregar_relacion(Relacion("Seguidor", pagina))

usuario1.mostrar_relaciones()
