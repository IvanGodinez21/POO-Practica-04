export default class Persona {
    /**
     * @param {string} genero 
     * @param {date} fecha 
     * @param {string} nombre 
     */
    constructor(genero, fecha, nombre) {
        this.genero = genero
        this.fecha = fecha
        this.nombre = nombre
    }
    getPerfil(){
        return `${this.genero} ${this.fecha.getFormatoCorto()} ${this.nombre.getNombre()}`
    }
}
