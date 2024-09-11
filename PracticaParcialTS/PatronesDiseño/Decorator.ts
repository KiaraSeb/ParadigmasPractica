/*Permite añadir funcionalidades a objetos colocando estos objetos dentro de objetos encapsulados especiales 
que contienen estas funcionalidades. Se utiliza en vez de la herencia, un objeto tiene una referencia a otro 
y le delega parte del trabajo.
Aplicabilidad:
    -asignar funcionalidades adicionales a objetos durante el tiempo de ejecución sin descomponer el código
    -cuando no sea posible extender el comportamiento de un objeto utilizando herencia*/

    interface Cafe {
        costo(): number;
        descripcion(): string;
    }
    
    class CafeSimple implements Cafe {
        costo(): number {
            return 10;
        }
        descripcion(): string {
            return "Café simple";
        }
    }
    
    class DecoradorLeche implements Cafe {
        constructor(private cafe: Cafe) {}
    
        costo(): number {
            return this.cafe.costo() + 2;
        }
        descripcion(): string {
            return this.cafe.descripcion() + " con leche";
        }
    }
    
    // Uso
    const cafe = new CafeSimple();
    const cafeConLeche = new DecoradorLeche(cafe);
    console.log(cafeConLeche.descripcion()); // Café simple con leche
    console.log(cafeConLeche.costo());       // 12
    