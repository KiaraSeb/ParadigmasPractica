//Números imaginarios
class NumeroImaginario {
    constructor(private real: number, private imaginario: number) {}

    sumar(otro: NumeroImaginario): NumeroImaginario {
        return new NumeroImaginario(this.real + otro.real, this.imaginario + otro.imaginario);
    }

    restar(otro: NumeroImaginario): NumeroImaginario {
        return new NumeroImaginario(this.real - otro.real, this.imaginario - otro.imaginario);
    }

    multiplicar(otro: NumeroImaginario): NumeroImaginario {
        const real = this.real * otro.real - this.imaginario * otro.imaginario;
        const imaginario = this.real * otro.imaginario + this.imaginario * otro.real;
        return new NumeroImaginario(real, imaginario);
    }

    dividir(otro: NumeroImaginario): NumeroImaginario {
        const divisor = otro.real * otro.real + otro.imaginario * otro.imaginario;
        const real = (this.real * otro.real + this.imaginario * otro.imaginario) / divisor;
        const imaginario = (this.imaginario * otro.real - this.real * otro.imaginario) / divisor;
        return new NumeroImaginario(real, imaginario);
    }

    toString(): string {
        return `${this.real} + ${this.imaginario}i`;
    }
}

// Ejemplo de uso
const num1 = new NumeroImaginario(3, 2);
const num2 = new NumeroImaginario(1, 4);
console.log(num1.sumar(num2).toString()); // 4 + 6i
console.log(num1.restar(num2).toString()); // 2 - 2i
