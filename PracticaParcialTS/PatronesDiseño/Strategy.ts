/*Define una familia de algoritmos, coloca cada uno de ellos enuna clase separada y hace sus objetos intercambiables. 
Aplicabilidad:
    -cuando se quiera utilizar distintas variantes de un algoritmo dentro de un objeto y poder cambiar de un algoritmo a otro
    -clases similares que solo se diferencian en la forma en que ejecutan cierto comportamiento*/

    interface Estrategia {
        ejecutar(a: number, b: number): number;
    }
    
    class Sumar implements Estrategia {
        ejecutar(a: number, b: number): number {
            return a + b;
        }
    }
    
    class Restar implements Estrategia {
        ejecutar(a: number, b: number): number {
            return a - b;
        }
    }
    
    class Contexto {
        constructor(private estrategia: Estrategia) {}
    
        setEstrategia(estrategia: Estrategia): void {
            this.estrategia = estrategia;
        }
    
        ejecutarEstrategia(a: number, b: number): number {
            return this.estrategia.ejecutar(a, b);
        }
    }
    
    // Uso
    const contexto = new Contexto(new Sumar());
    console.log(contexto.ejecutarEstrategia(5, 3));  // 8
    contexto.setEstrategia(new Restar());
    console.log(contexto.ejecutarEstrategia(5, 3));  // 2
    