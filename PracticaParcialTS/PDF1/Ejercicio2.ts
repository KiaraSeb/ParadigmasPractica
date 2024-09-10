// Interfaz para las secuencias
interface Secuencia {
    generarSecuencia(): { secuencia: (number | null)[], falta: number };
}

// Secuencia de números pares
class SecuenciaPares implements Secuencia {
    generarSecuencia(): { secuencia: (number | null)[], falta: number } {
        const secuencia = [2, 4, null, 8];  // Falta el 6
        return { secuencia: secuencia, falta: 6 };
    }
}

// Secuencia de números impares
class SecuenciaImpares implements Secuencia {
    generarSecuencia(): { secuencia: (number | null)[], falta: number } {
        const secuencia = [1, 3, null, 7];  // Falta el 5
        return { secuencia: secuencia, falta: 5 };
    }
}

// Secuencia de Fibonacci
class SecuenciaFibonacci implements Secuencia {
    generarSecuencia(): { secuencia: (number | null)[], falta: number } {
        const secuencia = [0, 1, null, 3];  // Falta el 2
        return { secuencia: secuencia, falta: 2 };
    }
}

// Secuencia de múltiplos de 5
class SecuenciaMultiplosCinco implements Secuencia {
    generarSecuencia(): { secuencia: (number | null)[], falta: number } {
        const secuencia = [5, 10, null, 20];  // Falta el 15
        return { secuencia: secuencia, falta: 15 };
    }
}

// Clase Juego que utiliza una secuencia
class Juego {
    private puntaje: number = 0;
    private secuencia: Secuencia;

    constructor(secuencia: Secuencia) {
        this.secuencia = secuencia;
    }

    // Método para jugar una ronda
    jugar(): void {
        const { secuencia, falta } = this.secuencia.generarSecuencia();
        console.log("Secuencia:", secuencia.map(num => num === null ? "?" : num));

        // Simulación de entrada del usuario (en un caso real, usarías `prompt`)
        const respuesta = parseInt(prompt("¿Cuál es el número que falta en la secuencia?") || "0");

        if (respuesta === falta) {
            console.log("¡Correcto!");
            this.puntaje++;
        } else {
            console.log(`Incorrecto, el número correcto era: ${falta}`);
            this.puntaje--;
        }

        console.log("Puntaje actual:", this.puntaje);
    }
}

// Ejemplo de uso
// Puedes elegir entre diferentes secuencias
const juegoPares = new Juego(new SecuenciaPares());
const juegoImpares = new Juego(new SecuenciaImpares());
const juegoFibonacci = new Juego(new SecuenciaFibonacci());
const juegoMultiplosCinco = new Juego(new SecuenciaMultiplosCinco());

// Jugar una ronda (eligiendo una de las secuencias)
juegoPares.jugar();  // Puedes cambiar a otra secuencia como juegoImpares.jugar(), etc.
