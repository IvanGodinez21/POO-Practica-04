import Nombre from "./nombre.js"
import FechaNacimiento from "./fecha-nacimiento.js"

export default class Persona {
    /**
     * @param {string} genero 
     * @param {FechaNacimiento} fecha 
     * @param {Nombre} nombre 
     */
    constructor(genero, fecha, nombre) {
        this._genero = genero
        this._fecha = fecha
        this._nombre = nombre
    }
    getPerfil(){
        return `${this._genero} ${this._fecha.getFormatoCorto()} ${this._nombre.getNombre()}`
    }
}
