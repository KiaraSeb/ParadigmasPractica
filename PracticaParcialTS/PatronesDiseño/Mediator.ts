/*Permite reducir las dependencias caóticas entre objetos. El patrón restringe las comunicaciones directas entre los objetos, 
forzándolos a colaborar únicamente a través de lun objeto mediador. 
Los elementos UI deben comunicarse indirectamente a través del objeto mediador.
Aplicabilidad:
    -cuando sea difícil cambias algunas de las clases porque están fuertemente acopladas a otras
    -no se pueda reutilizar un componente en un programa diferente porque sea demasiado dependiente a otros componentes*/

    interface Mediador {
        notificar(remitente: string, evento: string): void;
    }
    
    class MediadorConcreto implements Mediador {
        private componenteA: ComponenteA;
        private componenteB: ComponenteB;
    
        setComponenteA(componente: ComponenteA): void {
            this.componenteA = componente;
        }
    
        setComponenteB(componente: ComponenteB): void {
            this.componenteB = componente;
        }
    
        notificar(remitente: string, evento: string): void {
            if (evento === "A") {
                console.log("Mediador reacciona al evento A");
                this.componenteB.accionB();
            }
        }
    }
    
    class ComponenteA {
        constructor(private mediador: Mediador) {}
    
        accionA(): void {
            console.log("Componente A hace algo.");
            this.mediador.notificar("A", "A");
        }
    }
    
    class ComponenteB {
        constructor(private mediador: Mediador) {}
    
        accionB(): void {
            console.log("Componente B hace algo.");
        }
    }
    
    // Uso
    const mediador = new MediadorConcreto();
    const componenteA = new ComponenteA(mediador);
    const componenteB = new ComponenteB(mediador);
    
    mediador.setComponenteA(componenteA);
    mediador.setComponenteB(componenteB);
    
    componenteA.accionA();
    