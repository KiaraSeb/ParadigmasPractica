//Sistemas de tarifas
class Tarifa {
    constructor(private tarifaPorHora: number, private tarifaMensual: number, private tarifaPorMega: number) {}

    calcularPorTiempo(horas: number): number {
        return horas * this.tarifaPorHora;
    }

    calcularMensual(): number {
        return this.tarifaMensual;
    }

    calcularPorConsumo(gigas: number): number {
        return gigas * this.tarifaPorMega;
    }

    calcularMixta(horas: number, gigas: number): number {
        const tiempo = this.calcularPorTiempo(horas);
        const mensual = this.calcularMensual();
        const consumo = this.calcularPorConsumo(gigas);
        const mejorTarifa = Math.min(tiempo, mensual, consumo);
        return mejorTarifa * 1.1;  // 10% de recargo
    }
}

// Ejemplo de uso
const tarifa = new Tarifa(2, 50, 1);
console.log(tarifa.calcularPorTiempo(10)); // 20
console.log(tarifa.calcularMixta(10, 40)); // tarifa más barata con recargo
