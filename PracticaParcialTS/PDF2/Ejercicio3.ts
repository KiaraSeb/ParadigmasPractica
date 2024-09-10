//Catálogo de artículos de venta
abstract class Articulo {
    abstract mostrar(): string;
}

class ArticuloTexto extends Articulo {
    constructor(private texto: string) {
        super();
    }

    mostrar(): string {
        return `Texto: ${this.texto}`;
    }
}

class ArticuloImagen extends Articulo {
    constructor(private imagen: string) {
        super();
    }

    mostrar(): string {
        return `Imagen: ${this.imagen}`;
    }
}

class ArticuloVideo extends Articulo {
    constructor(private video: string) {
        super();
    }

    mostrar(): string {
        return `Video: ${this.video}`;
    }
}

// Ejemplo de uso
const articulos: Articulo[] = [
    new ArticuloTexto("Descripción de un producto"),
    new ArticuloImagen("imagen_producto.jpg"),
    new ArticuloVideo("video_producto.mp4")
];

articulos.forEach(articulo => {
    console.log(articulo.mostrar());
});
