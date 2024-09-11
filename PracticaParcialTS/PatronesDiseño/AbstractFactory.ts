/*Permite producir familias de objetos relacionados sin especificar sus clases concretas. 
Todas las variantes del mismo objeto deben moverse a una única jerarquía de clase. 
Aplicabilidad:
    -el código necesita funcioanr con varias familias de productos relacionados 
    -cuando una clase con un grupo de métodos de fábrica nublen su responsabilidad principal*/

    interface Silla {
        sentarse(): string;
    }
    
    class SillaModerna implements Silla {
        sentarse(): string {
            return "Sentado en una silla moderna";
        }
    }
    
    class SillaVictoriana implements Silla {
        sentarse(): string {
            return "Sentado en una silla victoriana";
        }
    }
    
    interface MueblesFactory {
        crearSilla(): Silla;
    }
    
    class MueblesModernoFactory implements MueblesFactory {
        crearSilla(): Silla {
            return new SillaModerna();
        }
    }
    
    class MueblesVictorianoFactory implements MueblesFactory {
        crearSilla(): Silla {
            return new SillaVictoriana();
        }
    }
    
    // Uso
    const fabrica = new MueblesModernoFactory();
    console.log(fabrica.crearSilla().sentarse());
    