/*Proporciona una interfaz para crear objetos en una superclase. 
Las superclases pueden alterar la clase de los objetos devueltos por el método fábrica.
Las subclases solo pueden devolver produtos de distintos tipos si tienen una clase base o interfaz común.
Aplicabilidad:
    -cuando no se conocen las dependencias y los tipos de objetos 
    -cuando se quiere proporcionar una biblioteca o framework
    -cuando se quiere ahorrar recursos del sistema mediante la reutilización de objetos*/

    interface Transporte {
        entregar(): string;
    }
    
    class Camion implements Transporte {
        entregar(): string {
            return "Entrega por camión";
        }
    }
    
    class Barco implements Transporte {
        entregar(): string {
            return "Entrega por barco";
        }
    }
    
    abstract class Logistica {
        abstract crearTransporte(): Transporte;
    
        planEntrega(): string {
            const transporte = this.crearTransporte();
            return transporte.entregar();
        }
    }
    
    class LogisticaTerrestre extends Logistica {
        crearTransporte(): Transporte {
            return new Camion();
        }
    }
    
    class LogisticaMaritima extends Logistica {
        crearTransporte(): Transporte {
            return new Barco();
        }
    }
    
    // Uso
    const logistica = new LogisticaTerrestre();
    console.log(logistica.planEntrega());
    