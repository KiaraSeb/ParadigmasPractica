/*Permite asegurar que una clase tenga una única instancia y que proporcione un punto de acceso global a dicha instancia.
Aplicabilidad:
    -una clase del programa deba tener solo una isntancia disponible para todos los clientes
    -cuando se necesita un control más estricto de las variable globales*/

    class Singleton {
        private static instancia: Singleton;
    
        private constructor() {}
    
        static obtenerInstancia(): Singleton {
            if (!Singleton.instancia) {
                Singleton.instancia = new Singleton();
            }
            return Singleton.instancia;
        }
    }
    
    // Uso
    const instancia1 = Singleton.obtenerInstancia();
    const instancia2 = Singleton.obtenerInstancia();
    console.log(instancia1 === instancia2); // true
    