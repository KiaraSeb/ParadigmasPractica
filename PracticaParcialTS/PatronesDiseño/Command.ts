/*Convierte una solicitud en un objeto independiente que contiene toda la información sobre la solicitud. 
Esta trandformación te permite parametrizar los métodos con diferentes solicitudes, retrasar 
o poner en cola la ejecución de una solicitud y soportar operaciones que no se pueden realizar.
Aplicabilidad:
    -parametrizar objetos con operaciones
    -poner operaciones en cola, programar su ejecución, o ejecutarlas de forma remota
    -implementar operaciones reversibles*/

    interface Comando {
        ejecutar(): void;
    }
    
    class Luz {
        encender(): void {
            console.log("Luz encendida");
        }
    
        apagar(): void {
            console.log("Luz apagada");
        }
    }
    
    class EncenderLuz implements Comando {
        constructor(private luz: Luz) {}
    
        ejecutar(): void {
            this.luz.encender();
        }
    }
    
    class ApagarLuz implements Comando {
        constructor(private luz: Luz) {}
    
        ejecutar(): void {
            this.luz.apagar();
        }
    }
    
    // Uso
    const luz = new Luz();
    const encender = new EncenderLuz(luz);
    const apagar = new ApagarLuz(luz);
    
    encender.ejecutar();
    apagar.ejecutar();
    