/*Permite recorrer elementos de una colección sin exponer su representación subyacente (lista, pila, árbol, etc). 
Los iteradores implementan varios algoritmos de recorrido, varios objetos iteradores pueden recorrer la misma colección al mismo tiempo.
Aplicabilidad:
    -colección que tenga una estructura de datos compleja a nivel interno pero se quiera ocultar la complejidad al cliente
    -duplicación en el código de recorrido a lo largo de la aplicación
    -recorrer distintas estructuras de datos*/

    class Iterador {
        private posicion = 0;
    
        constructor(private elementos: any[]) {}
    
        siguiente(): any {
            return this.elementos[this.posicion++];
        }
    
        tieneSiguiente(): boolean {
            return this.posicion < this.elementos.length;
        }
    }
    
    // Uso
    const elementos = [1, 2, 3];
    const iterador = new Iterador(elementos);
    
    while (iterador.tieneSiguiente()) {
        console.log(iterador.siguiente());
    }
    