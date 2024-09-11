/*Permite dividir una clase grande, o un grupo de clases estrechamente relacionadas, 
en dos jerarquías separadas (abstracción e implementación) que pueden desarrollarse independientemente la una de la otra. 
Se puede evitar la explosión de una jerarquía de clase transformándola en varias jerarquías relacionadas (herencia).
Aplicabilidad:
    -dividir y organizar una clase monolítica que tenga muchas variantes de una sola funcionalidad
    -extender una clase en varias dimensiones ortogonales (independientes)
    -se necesita cambiaar implementaciones durante el tiempo de ejecución*/

    interface Dispositivo {
        encender(): void;
        apagar(): void;
    }
    
    class Televisor implements Dispositivo {
        encender(): void {
            console.log("Televisor encendido");
        }
        apagar(): void {
            console.log("Televisor apagado");
        }
    }
    
    class ControlRemoto {
        constructor(protected dispositivo: Dispositivo) {}
    
        encender(): void {
            this.dispositivo.encender();
        }
    }
    
    class ControlRemotoAvanzado extends ControlRemoto {
        silenciar(): void {
            console.log("Televisor silenciado");
        }
    }
    
    // Uso
    const televisor = new Televisor();
    const control = new ControlRemotoAvanzado(televisor);
    control.encender();
    control.silenciar();
    