export default class Grupo {
    constructor(semestre, grupo) {
        this._semestre = semestre
        this._grupo = grupo
        this._estudiantes = new Array();
    }
    registrar(estudiante) {
    this._estudiantes.push(estudiante);
    }
    listarEstudiantes() {
        this._estudiantes.forEach((estudiante, i) => {
            console.log(`${i+1}. ${estudiante.getPerfil()}`)
        })
    }
}