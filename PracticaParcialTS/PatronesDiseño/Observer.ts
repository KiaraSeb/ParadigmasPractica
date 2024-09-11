/*Permite definir un mecanismo de suscripción para notificar a varios objetos sobre cualquier evento
 que le suceda al objero que estan observando.
Aplicabilidad:
    -los cambios de un estado de un objeto puedan s¿necesitar cambiar otros objetos 
    -algunos objetos deban observar a otro, durante un tiempo limitado*/

    interface Observador {
        actualizar(mensaje: string): void;
    }
    
    class Sujeto {
        private observadores: Observador[] = [];
    
        agregarObservador(observador: Observador): void {
            this.observadores.push(observador);
        }
    
        notificar(mensaje: string): void {
            this.observadores.forEach(o => o.actualizar(mensaje));
        }
    }
    
    class Cliente implements Observador {
        constructor(private nombre: string) {}
    
        actualizar(mensaje: string): void {
            console.log(`${this.nombre} recibió: ${mensaje}`);
        }
    }
    
    // Uso
    const sujeto = new Sujeto();
    const cliente1 = new Cliente("Cliente 1");
    const cliente2 = new Cliente("Cliente 2");
    
    sujeto.agregarObservador(cliente1);
    sujeto.agregarObservador(cliente2);
    
    sujeto.notificar("Nuevo producto disponible");
    