/*Permite guardar y restaurar el estado previo de un objeto sin revelar los detalles de su implementación.
Originador: es un objeto que almacena la copia del estado de un objeto
Cuidador: almacena mementos dentro de otros objetos
Aplicabilidad:
    -producir instantáneas del estado del objeto para poder restaurar un estado previo del objeto
    -el acceso directo a los campos, consultores o modificadores del objeto viole su encapsulación*/

    class Memento {
        constructor(private estado: string) {}
    
        obtenerEstado(): string {
            return this.estado;
        }
    }
    
    class Originador {
        private estado: string;
    
        guardarEstado(): Memento {
            return new Memento(this.estado);
        }
    
        restaurarEstado(memento: Memento): void {
            this.estado = memento.obtenerEstado();
        }
    
        setEstado(estado: string): void {
            this.estado = estado;
        }
    
        mostrarEstado(): void {
            console.log(this.estado);
        }
    }
    
    // Uso
    const originador = new Originador();
    originador.setEstado("Estado 1");
    const memento = originador.guardarEstado();
    originador.setEstado("Estado 2");
    originador.mostrarEstado();  // Estado 2
    originador.restaurarEstado(memento);
    originador.mostrarEstado();  // Estado 1
    