//Sistema de archivos en memoria
class Archivo {
    constructor(public nombre: string) {}
}

class Carpeta {
    private elementos: (Carpeta | Archivo)[] = [];

    constructor(public nombre: string) {}

    agregarElemento(elemento: Carpeta | Archivo): void {
        if (!this.elementos.some(el => el.nombre === elemento.nombre)) {
            this.elementos.push(elemento);
        } else {
            throw new Error("El nombre ya existe en la carpeta.");
        }
    }

    listarElementos(): string[] {
        return this.elementos.map(el => el.nombre).sort();
    }

    encontrarElemento(nombre: string): Carpeta | Archivo | undefined {
        return this.elementos.find(el => el.nombre === nombre);
    }

    esCarpeta(): boolean {
        return true;
    }
}

class SistemaArchivos {
    private root: Carpeta = new Carpeta("root");
    private carpetaActual: Carpeta = this.root;

    mkdir(nombre: string): void {
        const nuevaCarpeta = new Carpeta(nombre);
        this.carpetaActual.agregarElemento(nuevaCarpeta);
    }

    touch(nombre: string): void {
        const nuevoArchivo = new Archivo(nombre);
        this.carpetaActual.agregarElemento(nuevoArchivo);
    }

    cd(nombre: string): void {
        const carpeta = this.carpetaActual.encontrarElemento(nombre);
        if (carpeta && carpeta instanceof Carpeta) {
            this.carpetaActual = carpeta;
        } else {
            throw new Error("La carpeta no existe.");
        }
    }

    ls(): string[] {
        return this.carpetaActual.listarElementos();
    }

    pwd(): string {
        return this.obtenerRuta(this.carpetaActual, "");
    }

    private obtenerRuta(carpeta: Carpeta, path: string): string {
        if (carpeta === this.root) {
            return "/root" + path;
        }
        return this.obtenerRuta(this.root, "/" + carpeta.nombre + path);
    }
}

// Ejemplo de uso
const fs = new SistemaArchivos();
fs.mkdir("carpeta1");
fs.touch("archivo1.txt");
fs.cd("carpeta1");
fs.touch("archivo2.txt");

console.log(fs.ls());  // ['archivo2.txt']
fs.cd("..");
console.log(fs.pwd());  // /root
