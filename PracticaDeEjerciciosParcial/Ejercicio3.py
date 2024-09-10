#Catálogo de artículos de venta
class Articulo(ABC):
    @abstractmethod
    def mostrar(self):
        pass

class ArticuloTexto(Articulo):
    def __init__(self, texto):
        self.texto = texto

    def mostrar(self):
        return f"Texto: {self.texto}"

class ArticuloImagen(Articulo):
    def __init__(self, imagen):
        self.imagen = imagen

    def mostrar(self):
        return f"Imagen: {self.imagen}"

class ArticuloVideo(Articulo):
    def __init__(self, video):
        self.video = video

    def mostrar(self):
        return f"Video: {self.video}"

# Ejemplo de uso
articulos = [
    ArticuloTexto("Descripción de un producto"),
    ArticuloImagen("imagen_producto.jpg"),
    ArticuloVideo("video_producto.mp4")
]

for articulo in articulos:
    print(articulo.mostrar())
