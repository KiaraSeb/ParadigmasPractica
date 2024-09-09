//Sistema para calcular los gastos en una empresa
class Gasto {
    protected descripcion: string;
    protected monto: number;

    constructor(descripcion: string, monto: number) {
        this.descripcion = descripcion;
        this.monto = monto;
    }

    mostrar(): string {
        return `${this.descripcion}: $${this.monto}`;
    }
}

class GastoCompra extends Gasto {
    constructor(producto: string, monto: number) {
        super(`Gasto por compra de ${producto}`, monto);
    }
}

class GastoServicio extends Gasto {
    constructor(compania: string, monto: number) {
        super(`Gasto por servicio de la compañía '${compania}'`, monto);
    }
}

class GastoExtraordinario extends Gasto {
    constructor(descripcion: string, monto: number) {
        super(`Gasto extraordinario '${descripcion}'`, monto);
    }
}

// Ejemplo de uso
const gastos: Gasto[] = [
    new GastoCompra("productos de limpieza", 3000),
    new GastoServicio("ServiLimp", 2500),
    new GastoExtraordinario("Medialunas para la reunión", 100)
];

gastos.forEach(gasto => {
    console.log(gasto.mostrar());
});
