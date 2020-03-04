const diaSemana = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
const mesAño = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Nomviembre", "Diciembre"];

export default class FechaNacimiento {
    /**
     * @param {number} dia 
     * @param {number} mes 
     * @param {number} año 
     */
    constructor(dia, mes, año) {
        this._fecha = new Date(año, mes -1, dia);
        /**
         * Método de acceso de escritura para el atributo fecha
         * @param {Date} fecha
         */
    }
    getFecha() {
        return this._fecha;
    }

    setFecha(fecha) {
        if(fecha <= Date.now()) {
            this._fecha = fecha;
            return true;
        }
        return false;
    }

    getFormatoCorto() {
        return `${this._fecha.getDate()}/${this._fecha.getMonth() + 1}/${this._fecha.getFullYear()}`;
    }
    getFormatoExtendido() {
        let dia = diaSemana[this._fecha.getDay()];
        let mes = mesAño[this._fecha.getMonth()];
       return (`${dia} ${this._fecha.getDate()} de ${mes} del ${this._fecha.getFullYear()}`)
    }
    getEdad() {
        let ms = Date.now() - this._fecha;
        let msAño = 1000 * 60 * 60 * 24 * 365;
        let edad = Math.trunc(ms / msAño);
        return (`Edad: ${edad}`);
    }
}

