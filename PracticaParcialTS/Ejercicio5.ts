//Catálogo de música
class Autor {
    private canciones: Cancion[] = [];

    constructor(public nombre: string) {}

    agregarCancion(cancion: Cancion): void {
        this.canciones.push(cancion);
    }
}

class Cancion {
    constructor(public titulo: string, public autor: Autor) {
        autor.agregarCancion(this);
    }
}

class Disco {
    private canciones: Cancion[] = [];

    constructor(public titulo: string) {}

    agregarCancion(cancion: Cancion): void {
        this.canciones.push(cancion);
    }

    mostrarCanciones(): void {
        console.log(`Disco: ${this.titulo}`);
        this.canciones.forEach(cancion => {
            console.log(`- ${cancion.titulo} (Autor: ${cancion.autor.nombre})`);
        });
    }
}

// Ejemplo de uso
const autor = new Autor("John Lennon");
const cancion1 = new Cancion("Imagine", autor);
const cancion2 = new Cancion("Jealous Guy", autor);

const disco = new Disco("Best of John Lennon");
disco.agregarCancion(cancion1);
disco.agregarCancion(cancion2);

disco.mostrarCanciones();
