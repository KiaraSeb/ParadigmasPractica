/*Permite pasar solicitudes  a lo largo de una cadena de manejadores. 
Al recibir una solicitud, cada manejador decide si la procesa o si la pasa al siguiente manejador de la cadena. 
Una cadena puede formarse a partir de una rama de un árbol de objetos.
Manejador: objetos autónomos.
Aplicabilidad:
    -se necesita procesar distintos tipos de solicitudes de varias maneras
    -ejecutar varios manejadores en un orden específico
    -cuando el grupo de manejadores y su orden deban cambiar durante el tiempo de ejecución*/

    abstract class Manejador {
        protected siguiente: Manejador;
    
        setSiguiente(manejador: Manejador): void {
            this.siguiente = manejador;
        }
    
        manejar(peticion: string): void {
            if (this.siguiente) {
                this.siguiente.manejar(peticion);
            }
        }
    }
    
    class ManejadorConcreto1 extends Manejador {
        manejar(peticion: string): void {
            if (peticion === "A") {
                console.log("ManejadorConcreto1 maneja la petición A");
            } else {
                super.manejar(peticion);
            }
        }
    }
    
    class ManejadorConcreto2 extends Manejador {
        manejar(peticion: string): void {
            if (peticion === "B") {
                console.log("ManejadorConcreto2 maneja la petición B");
            } else {
                super.manejar(peticion);
            }
        }
    }
    
    // Uso
    const manejador1 = new ManejadorConcreto1();
    const manejador2 = new ManejadorConcreto2();
    manejador1.setSiguiente(manejador2);
    
    manejador1.manejar("A");
    manejador1.manejar("B");
    