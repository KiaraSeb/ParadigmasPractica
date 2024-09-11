/*Permite definir un mecanismo de suscripción para notificar a varios objetos sobre cualquier evento
 que le suceda al objero que estan observando.
Aplicabilidad:
    -los cambios de un estado de un objeto puedan s¿necesitar cambiar otros objetos
    -algunos objetos deban observar a otro, durante un tiempo limitado*/
var Sujeto = /** @class */ (function () {
    function Sujeto() {
        this.observadores = [];
    }
    Sujeto.prototype.agregarObservador = function (observador) {
        this.observadores.push(observador);
    };
    Sujeto.prototype.notificar = function (mensaje) {
        this.observadores.forEach(function (o) { return o.actualizar(mensaje); });
    };
    return Sujeto;
}());
var Cliente = /** @class */ (function () {
    function Cliente(nombre) {
        this.nombre = nombre;
    }
    Cliente.prototype.actualizar = function (mensaje) {
        console.log("".concat(this.nombre, " recibi\u00F3: ").concat(mensaje));
    };
    return Cliente;
}());
// Uso
var sujeto = new Sujeto();
var cliente1 = new Cliente("Cliente 1");
var cliente2 = new Cliente("Cliente 2");
sujeto.agregarObservador(cliente1);
sujeto.agregarObservador(cliente2);
sujeto.notificar("Nuevo producto disponible");
