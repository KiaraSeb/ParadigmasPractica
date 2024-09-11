/*Separa algoritmos de los objetos sobre los que operan.
Aplicabilidad:
    -realizar operaciones sobre todos los elementos de una compleja estructura de objetos, como un árbol de objetos
    -limpiar la lógica de negocio de comportamientos auxiliares*/

    interface Elemento {
        aceptar(visitante: Visitante): void;
    }
    
    class ElementoConcretoA implements Elemento {
        aceptar(visitante: Visitante): void {
            visitante.visitarElementoA(this);
        }
    }
    
    class ElementoConcretoB implements Elemento {
        aceptar(visitante: Visitante): void {
            visitante.visitarElementoB(this);
        }
    }
    
    interface Visitante {
        visitarElementoA(elemento: ElementoConcretoA): void;
        visitarElementoB(elemento: ElementoConcretoB): void;
    }
    
    class VisitanteConcreto implements Visitante {
        visitarElementoA(elemento: ElementoConcretoA): void {
            console.log("Visitando elemento A");
        }
    
        visitarElementoB(elemento: ElementoConcretoB): void {
            console.log("Visitando elemento B");
        }
    }
    
    // Uso
    const elementos: Elemento[] = [new ElementoConcretoA(), new ElementoConcretoB()];
    const visitante = new VisitanteConcreto();
    
    elementos.forEach(e => e.aceptar(visitante));
    