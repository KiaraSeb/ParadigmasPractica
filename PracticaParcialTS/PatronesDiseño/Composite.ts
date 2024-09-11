/*Permite componer objetos en estructuras de árbol y trabajar con esas estructuras como si fueran objetos individuales.
También ejecuta un comportamiento de forma recursiva sobre todos los componentes del árbol de objetos.
Aplicabilidad:
    -implementar una estructura de objetaso con forma de árbol
    -cuando el código cliente trate elementos simples y complejos de la misma forma*/

    interface Componente {
        mostrar(): void;
    }
    
    class Archivo implements Componente {
        constructor(private nombre: string) {}
    
        mostrar(): void {
            console.log(this.nombre);
        }
    }
    
    class Carpeta implements Componente {
        private elementos: Componente[] = [];
    
        agregar(componente: Componente): void {
            this.elementos.push(componente);
        }
    
        mostrar(): void {
            console.log("Carpeta contiene:");
            this.elementos.forEach(el => el.mostrar());
        }
    }
    
    // Uso
    const carpeta = new Carpeta();
    carpeta.agregar(new Archivo("archivo1.txt"));
    carpeta.agregar(new Archivo("archivo2.txt"));
    carpeta.mostrar();
    