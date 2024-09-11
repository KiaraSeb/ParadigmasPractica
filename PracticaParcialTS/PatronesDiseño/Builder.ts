/*Permite construir objetos complejos paso a paso, produciendo distintos tipos
 y representaciones de un objeto empleando el mismo código de construcción. 
 Un constructor con un montón de parámetros tiene su inconveniente: no todos los parámetros son necesarios todo el tiempo. 
 Los distintos constructores ejecutan la misma tarea de forma distinta.
Clase directora: sabe qué pasos del cosntructor ejecutar para lograr un producto que funcione.
Aplicabilidad:
    -para evitar un "constructor telescópico"
    -cuando el código debe crear distintas representaciones de ciertos productos
    -construir árboles con el patrón Composite u otros objetos complejos*/

    class Casa {
        paredes?: string;
        techo?: string;
    
        mostrarDetalles(): void {
            console.log(`Paredes: ${this.paredes}, Techo: ${this.techo}`);
        }
    }
    
    interface CasaBuilder {
        construirParedes(): CasaBuilder;
        construirTecho(): CasaBuilder;
        obtenerCasa(): Casa;
    }
    
    class CasaModernaBuilder implements CasaBuilder {
        private casa = new Casa();
    
        construirParedes(): CasaBuilder {
            this.casa.paredes = "Vidrio";
            return this;
        }
    
        construirTecho(): CasaBuilder {
            this.casa.techo = "Techo plano";
            return this;
        }
    
        obtenerCasa(): Casa {
            return this.casa;
        }
    }
    
    class Director {
        constructor(private builder: CasaBuilder) {}
    
        construirCasa(): Casa {
            return this.builder.construirParedes().construirTecho().obtenerCasa();
        }
    }
    
    // Uso
    const builder = new CasaModernaBuilder();
    const director = new Director(builder);
    const casa = director.construirCasa();
    casa.mostrarDetalles();
    