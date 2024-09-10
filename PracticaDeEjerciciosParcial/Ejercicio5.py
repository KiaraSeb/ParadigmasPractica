#Catálogo de música
class Autor:
    def __init__(self, nombre):
        self.nombre = nombre
        self.canciones = []

    def agregar_cancion(self, cancion):
        self.canciones.append(cancion)

class Cancion:
    def __init__(self, titulo, autor):
        self.titulo = titulo
        self.autor = autor
        autor.agregar_cancion(self)

class Disco:
    def __init__(self, titulo):
        self.titulo = titulo
        self.canciones = []

    def agregar_cancion(self, cancion):
        self.canciones.append(cancion)

# Ejemplo de uso
autor = Autor("John Lennon")
cancion1 = Cancion("Imagine", autor)
cancion2 = Cancion("Jealous Guy", autor)

disco = Disco("Best of John Lennon")
disco.agregar_cancion(cancion1)
disco.agregar_cancion(cancion2)

print(f"Disco: {disco.titulo}")
for cancion in disco.canciones:
    print(f"- {cancion.titulo} (Autor: {cancion.autor.nombre})")
