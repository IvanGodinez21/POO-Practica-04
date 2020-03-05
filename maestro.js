import Persona from "./persona.js";

export default class Maestro extends Persona {
    constructor(nombre, fecha, genero, sueldo, numeroTrabajador, tipoTrabajador) {
        super (nombre, fecha, genero)
        this._nombre = nombre;
        this._fecha = fecha;
        this._genero = genero;
        this._sueldo = sueldo;
        this._numeroTrabajador = numeroTrabajador;
        this._tipoTrabajador = tipoTrabajador;

    }
    print() {
        console.log(this._sueldo);
        console.log(this._numeroTrabajador);
        console.log(this._tipoTrabajador);
        console.log(this._nombre.getNombreCompleto());
        console.log(this._fecha.getFormatoCorto());
        console.log(this._genero)
    }
}