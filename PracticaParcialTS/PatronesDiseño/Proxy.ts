/*Proporciona un sustituto o marcador de posición para otro objeto. 
Un proxy controla el acceso al objeto original, permitiéndo hacer algo antes o después de que la solicitud llegue al objeto original. 
Se camufla como objeto de la BD, puede gestionar la inicialización diferida y el caché de resultados sin que el cilente 
o el objeto rasl de la BD lo sepa.
Aplicabilidad:
    -objeto de servicio pesado que utiliza muchos recursos del sistema
    -el objeto de servicio se ubica en un servidor remoto
    -mantener un historial de solicitudes al objeto de servicio*/

    interface Servicio {
        operacion(): string;
    }
    
    class ServicioReal implements Servicio {
        operacion(): string {
            return "Realizando la operación";
        }
    }
    
    class ServicioProxy implements Servicio {
        private servicioReal: ServicioReal;
    
        operacion(): string {
            if (!this.servicioReal) {
                this.servicioReal = new ServicioReal();
            }
            return this.servicioReal.operacion();
        }
    }
    
    // Uso
    const servicio = new ServicioProxy();
    console.log(servicio.operacion());
    