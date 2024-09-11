/*Permite mantener más objetos dentro de la cantidad disponible de RAM compartiendo las partes comunes del estado 
entre varios objetos en lugar de mantener toda la información en cada objeto.
Aplicabilidad:
    -ÚNICAMENTE cuando el programa deba soportar una enorme cantidad de objetos que apenas quepan en la RAM disponible*/

    class Caracter {
        constructor(private letra: string) {}
    
        mostrar(posicion: number): void {
            console.log(`Carácter ${this.letra} en la posición ${posicion}`);
        }
    }
    
    class FabricaCaracteres {
        private caracteres: { [key: string]: Caracter } = {};
    
        obtenerCaracter(letra: string): Caracter {
            if (!this.caracteres[letra]) {
                this.caracteres[letra] = new Caracter(letra);
            }
            return this.caracteres[letra];
        }
    }
    
    // Uso
    const fabrica = new FabricaCaracteres();
    const caracterA = fabrica.obtenerCaracter("A");
    caracterA.mostrar(1);
    const caracterB = fabrica.obtenerCaracter("B");
    caracterB.mostrar(2);
    