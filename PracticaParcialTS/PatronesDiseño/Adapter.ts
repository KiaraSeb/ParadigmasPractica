/*Permite la colaboración entre objetos con interfaces incompatibles.
Adaptador: es un objeto que convierte la interfaz de un objeto, de forma que otro objeto pueda comprenderla.
Aplicabilidad:
    -cuando se quiere usar una clase existente pero su interfaz no es compatible con el resto del código
    -cuando se quiere reutililzar varias subclases existentes que carecen de alguna funcionalidad común 
    que no puede adañirse a la superclase*/

    interface EnchufeEuropeo {
        conectar(): string;
    }
    
    class EnchufeAmericano {
        conectarAmericano(): string {
            return "Conectado con enchufe americano";
        }
    }
    
    class AdaptadorAmericanoAEuropeo implements EnchufeEuropeo {
        constructor(private enchufeAmericano: EnchufeAmericano) {}
    
        conectar(): string {
            return this.enchufeAmericano.conectarAmericano();
        }
    }
    
    // Uso
    const enchufeAmericano = new EnchufeAmericano();
    const adaptador = new AdaptadorAmericanoAEuropeo(enchufeAmericano);
    console.log(adaptador.conectar());
    