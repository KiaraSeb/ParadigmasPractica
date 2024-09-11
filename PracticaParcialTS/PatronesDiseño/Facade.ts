/*Proporciona una interfaz simplificada a una biblioteca, un framework o cualquier otro grupo complejo de clases.
Aplicabilidad:
    -interfaz limitada pero directa a un subsistema complejo
    -estructurar un subsistema en capas*/

    class SistemaAudio {
        encender(): void {
            console.log("Audio encendido");
        }
    }
    
    class SistemaTV {
        encender(): void {
            console.log("TV encendida");
        }
    }
    
    class HomeTheaterFachada {
        private audio = new SistemaAudio();
        private tv = new SistemaTV();
    
        encenderTodo(): void {
            this.audio.encender();
            this.tv.encender();
        }
    }
    
    // Uso
    const homeTheater = new HomeTheaterFachada();
    homeTheater.encenderTodo();
    