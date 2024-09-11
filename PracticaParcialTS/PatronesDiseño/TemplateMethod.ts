/*Define el esqueleto de un algoritmo en la superficie pero permite que las sublclases sobrescriban pasos del algoritmo 
sin cambiar sus estructura. Divide el algoritmo en pasos, permitiendo a las subclases sobrescribir estos pasos pero no el método en sí
Aplicabilidad:
    -permitir a los clientes que extiendan únicamente paso particulares de un algoritmo
    -clases que contengan algoritmos casi idénticos pero con diferenciad mínimas*/

    abstract class ClaseAbstracta {
        templateMethod(): void {
            this.primeraOperacion();
            this.segundaOperacion();
            this.terceraOperacion();
        }
    
        abstract primeraOperacion(): void;
        abstract segundaOperacion(): void;
    
        terceraOperacion(): void {
            console.log("Tercera operación común");
        }
    }
    
    class ImplementacionConcreta extends ClaseAbstracta {
        primeraOperacion(): void {
            console.log("Primera operación concreta");
        }
    
        segundaOperacion(): void {
            console.log("Segunda operación concreta");
        }
    }
    
    // Uso
    const objeto = new ImplementacionConcreta();
    objeto.templateMethod();
    