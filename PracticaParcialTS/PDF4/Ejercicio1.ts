//Registrar cursos con correlatividad
class Curso {
    private correlativos: Curso[] = [];

    constructor(
        public codigo: string,
        public titulo: string,
        public duracionHoras: number
    ) {}

    agregarCorrelativo(curso: Curso): void {
        this.correlativos.push(curso);
    }

    puedeTomarCurso(cursosAprobados: Curso[]): boolean {
        return this.correlativos.every(curso => cursosAprobados.includes(curso));
    }
}

// Ejemplo de uso
const fundamentos = new Curso("101", "Fundamentos de Programación", 40);
const cplusplus = new Curso("102", "C++", 60);

cplusplus.agregarCorrelativo(fundamentos);

const cursosAprobados = [fundamentos];
console.log(cplusplus.puedeTomarCurso(cursosAprobados));  // true
