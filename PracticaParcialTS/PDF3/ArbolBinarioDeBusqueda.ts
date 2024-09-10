//Árbol binario de búsqueda
class Nodo {
    constructor(public valor: number, public izquierda: Nodo | null = null, public derecha: Nodo | null = null) {}
}

class ArbolBinarioBusqueda {
    private raiz: Nodo | null = null;

    agregar(valor: number): void {
        this.raiz = this.insertar(this.raiz, valor);
    }

    private insertar(nodo: Nodo | null, valor: number): Nodo {
        if (nodo === null) return new Nodo(valor);
        if (valor < nodo.valor) nodo.izquierda = this.insertar(nodo.izquierda, valor);
        else if (valor > nodo.valor) nodo.derecha = this.insertar(nodo.derecha, valor);
        return nodo;
    }

    contiene(valor: number): boolean {
        return this.buscar(this.raiz, valor);
    }

    private buscar(nodo: Nodo | null, valor: number): boolean {
        if (nodo === null) return false;
        if (valor === nodo.valor) return true;
        if (valor < nodo.valor) return this.buscar(nodo.izquierda, valor);
        return this.buscar(nodo.derecha, valor);
    }

    imprimir(): void {
        this.inOrden(this.raiz);
    }

    private inOrden(nodo: Nodo | null): void {
        if (nodo !== null) {
            this.inOrden(nodo.izquierda);
            console.log(nodo.valor);
            this.inOrden(nodo.derecha);
        }
    }
}

// Ejemplo de uso
const arbol = new ArbolBinarioBusqueda();
arbol.agregar(10);
arbol.agregar(5);
arbol.agregar(20);
arbol.imprimir();
console.log(arbol.contiene(5));  // true
console.log(arbol.contiene(15)); // false
