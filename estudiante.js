import Persona from "./persona.js";

export default class Estudiante extends Persona {
    constructor({nombre, fecha, genero, numeroCuenta, correo, escuela}) {
        super (nombre, fecha, genero)
        this._nombre = nombre;
        this._fecha = fecha;
        this._genero = genero
        this._numeroCuenta = numeroCuenta;
        this._correo = correo;
        this._escuela = escuela;
    }

    getNumeroCuenta() {
        return this._numeroCuenta;
    }
    getPerfil() {
        return `${this._numeroCuenta} ${this._nombre.getNombreCompleto()}`;
    }
    esIgualA(estudiante) {
        if (estudiante.getNumeroCuenta() === this._numeroCuenta) {
            return true;
        }
    }

    print() {
        console.log(this._numeroCuenta);
        console.log(this._correo);
        console.log(this._escuela);
        console.log(this._nombre.getNombreCompleto());
        console.log(this._fecha.getFormatoCorto());
        console.log(this._genero)
    }
}