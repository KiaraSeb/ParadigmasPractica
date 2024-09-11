/*Permite copiar objetos existentes sin que el código dependa de sus clases. 
No siempre es posible copiar un objeto "desde fuera" porque hay campos que pueden ser privados e invisibles. 
Por ello, se declara una interfaz que permite clonar un objeto sin acoplar el código a la clase de ese objeto. 
Un objeto que soporta la clonación se denomina prototipo, estos pueden ser alternativas a las subclases.
Aplicabilidad:
    -cuando el código no deba depender de las clases concretas de un objeto que se necesite copiar
    -reducir la cantidad de subclases que solo se diferencian en la forma en que se inicializan sus respectivos objetos.*/

    class Documento {
        constructor(public titulo: string, public contenido: string) {}
    
        clonar(): Documento {
            return new Documento(this.titulo, this.contenido);
        }
    }
    
    // Uso
    const doc1 = new Documento("Informe", "Contenido del informe");
    const doc2 = doc1.clonar();
    console.log(doc1 === doc2); // false
    