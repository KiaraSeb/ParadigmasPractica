/*Permite a un objeto alterar su comportamietno cuando su estado interno cambia, parece como si el objeto cambiara su clase.
Aplicabilidad:
    -objeto que se comporta de forma diferente dependiendo de su estado actual
    -clase contaminada con enormes condicionales que alteran el modo en que se comporta la clase */

    interface Estado {
        manejar(contexto: Contexto): void;
    }
    
    class EstadoConcretoA implements Estado {
        manejar(contexto: Contexto): void {
            console.log("Estado A maneja la acción");
            contexto.setEstado(new EstadoConcretoB());
        }
    }
    
    class EstadoConcretoB implements Estado {
        manejar(contexto: Contexto): void {
            console.log("Estado B maneja la acción");
            contexto.setEstado(new EstadoConcretoA());
        }
    }
    
    class Contexto {
        private estado: Estado;
    
        constructor(estado: Estado) {
            this.estado = estado;
        }
    
        setEstado(estado: Estado): void {
            this.estado = estado;
        }
    
        solicitar(): void {
            this.estado.manejar(this);
        }
    }
    
    // Uso
    const contexto = new Contexto(new EstadoConcretoA());
    contexto.solicitar();  // Estado A maneja la acción
    contexto.solicitar();  // Estado B maneja la acción
    