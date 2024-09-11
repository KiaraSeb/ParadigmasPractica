/*Permite componer objetos en estructuras de árbol y trabajar con esas estructuras como si fueran objetos individuales.
También ejecuta un comportamiento de forma recursiva sobre todos los componentes del árbol de objetos.
Aplicabilidad:
    -implementar una estructura de objetaso con forma de árbol
    -cuando el código cliente trate elementos simples y complejos de la misma forma*/
var Archivo = /** @class */ (function () {
    function Archivo(nombre) {
        this.nombre = nombre;
    }
    Archivo.prototype.mostrar = function () {
        console.log(this.nombre);
    };
    return Archivo;
}());
var Carpeta = /** @class */ (function () {
    function Carpeta() {
        this.elementos = [];
    }
    Carpeta.prototype.agregar = function (componente) {
        this.elementos.push(componente);
    };
    Carpeta.prototype.mostrar = function () {
        console.log("Carpeta contiene:");
        this.elementos.forEach(function (el) { return el.mostrar(); });
    };
    return Carpeta;
}());
// Uso
var carpeta = new Carpeta();
carpeta.agregar(new Archivo("archivo1.txt"));
carpeta.agregar(new Archivo("archivo2.txt"));
carpeta.mostrar();
