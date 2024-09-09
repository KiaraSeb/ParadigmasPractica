//Red social con relaciones entre usuarios, grupos y páginas
class Usuario {
    private relaciones: Relacion[] = [];

    constructor(private nombre: string) {}

    // Método para agregar una relación con otro usuario
    agregarRelacion(relacion: Relacion): void {
        this.relaciones.push(relacion);
    }

    // Método para obtener el nombre del usuario
    obtenerNombre(): string {
        return this.nombre;
    }

    // Método para mostrar todas las relaciones del usuario
    mostrarRelaciones(): void {
        this.relaciones.forEach(relacion => {
            console.log(`${this.nombre} está relacionado con ${relacion.mostrar()}`);
        });
    }
}

class Relacion {
    constructor(private tipo: string, private conectadoCon: Usuario) {}

    // Método para mostrar la relación con el otro usuario
    mostrar(): string {
        return `${this.conectadoCon.obtenerNombre()} (Tipo: ${this.tipo})`;
    }
}

// Ejemplo de uso
const usuario1 = new Usuario("Juan");
const usuario2 = new Usuario("Ana");

// Crear relaciones entre los usuarios
usuario1.agregarRelacion(new Relacion("Amistad", usuario2));

// Mostrar las relaciones del usuario1
usuario1.mostrarRelaciones();


