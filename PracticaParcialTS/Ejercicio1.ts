//CONJUNTO, elementos desordeados y no repetidos
class Conjunto {
    private elementos: Set<number> = new Set();

    agregar(elemento: number): void {
        this.elementos.add(elemento);
    }

    mostrar(): Set<number> {
        return this.elementos;
    }
}

// Ejemplo de uso
const conjunto = new Conjunto();
conjunto.agregar(1);
conjunto.agregar(2);
conjunto.agregar(1);  // No se repite
console.log(conjunto.mostrar());  // Set { 1, 2 }


//CONJUNTO ORDENADO
class ConjuntoOrdenado {
    private elementos: Set<number> = new Set();

    agregar(elemento: number): void {
        this.elementos.add(elemento);
    }

    mostrar(): number[] {
        return Array.from(this.elementos).sort((a, b) => a - b);
    }
}

// Ejemplo de uso
const conjuntoOrdenado = new ConjuntoOrdenado();
conjuntoOrdenado.agregar(3);
conjuntoOrdenado.agregar(1);
conjuntoOrdenado.agregar(2);
console.log(conjuntoOrdenado.mostrar());  // [1, 2, 3]


//LISTA, elementos no repetidos
class Lista {
    private elementos: number[] = [];

    agregar(elemento: number): void {
        this.elementos.push(elemento);
    }

    mostrar(): number[] {
        return this.elementos;
    }
}

// Ejemplo de uso
const lista = new Lista();
lista.agregar(1);
lista.agregar(2);
lista.agregar(1);
console.log(lista.mostrar());  // [1, 2, 1]


//LISTA ORDENADA
class ListaOrdenada {
    private elementos: number[] = [];

    agregar(elemento: number): void {
        this.elementos.push(elemento);
        this.elementos.sort((a, b) => a - b);
    }

    mostrar(): number[] {
        return this.elementos;
    }
}

// Ejemplo de uso
const listaOrdenada = new ListaOrdenada();
listaOrdenada.agregar(3);
listaOrdenada.agregar(1);
listaOrdenada.agregar(2);
console.log(listaOrdenada.mostrar());  // [1, 2, 3]


//VECTOR DINÁMICO
class VectorDinamico {
    private elementos: number[] = [];

    agregar(elemento: number): void {
        this.elementos.push(elemento);
    }

    obtener(indice: number): number | null {
        return this.elementos[indice] !== undefined ? this.elementos[indice] : null;
    }
}

// Ejemplo de uso
const vector = new VectorDinamico();
vector.agregar(5);
vector.agregar(10);
console.log(vector.obtener(0));  // 5


//PILA (stack)
class Pila {
    private elementos: number[] = [];

    apilar(elemento: number): void {
        this.elementos.push(elemento);
    }

    desapilar(): number | undefined {
        return this.elementos.pop();
    }
}

// Ejemplo de uso
const pila = new Pila();
pila.apilar(1);
pila.apilar(2);
console.log(pila.desapilar());  // 2


//COLA
class Cola {
    private elementos: number[] = [];

    encolar(elemento: number): void {
        this.elementos.push(elemento);
    }

    desencolar(): number | undefined {
        return this.elementos.shift();
    }
}

// Ejemplo de uso
const cola = new Cola();
cola.encolar(1);
cola.encolar(2);
console.log(cola.desencolar());  // 1
