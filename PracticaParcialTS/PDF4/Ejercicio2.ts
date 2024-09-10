class UserStory {
    constructor(
        public numero: string,
        public descripcion: string,
        public estado: string,
        public responsable: string,
        public horasTrabajadas: number
    ) {}

    estaLista(): boolean {
        return this.estado === "listo";
    }
}

class Epic {
    private elementos: (UserStory | Epic)[] = [];
    public estado: string = "en desarrollo";
    public horasTrabajadas: number = 0;

    constructor(public nombre: string) {}

    agregarElemento(elemento: UserStory | Epic): void {
        this.elementos.push(elemento);
    }

    calcularHorasTrabajadas(): number {
        this.horasTrabajadas = this.elementos.reduce(
            (total, elemento) => total + elemento.horasTrabajadas,
            0
        );
        return this.horasTrabajadas;
    }

    actualizarEstado(): void {
        const todosListos = this.elementos.every(el => {
            if (el instanceof UserStory) {
                return el.estaLista();
            } else if (el instanceof Epic) {
                return el.estado === "listo";
            }
            return false;
        });

        if (todosListos) {
            this.estado = "listo";
        }
    }
}

// Ejemplo de uso
const us1 = new UserStory("001", "Calcular monto", "listo", "Juan", 5);
const us2 = new UserStory("002", "Guardar factura", "listo", "Ana", 3);

const epic1 = new Epic("Creación de Factura");
epic1.agregarElemento(us1);
epic1.agregarElemento(us2);

epic1.calcularHorasTrabajadas();
epic1.actualizarEstado();
console.log(epic1.estado);  // listo
console.log(epic1.horasTrabajadas);  // 8
