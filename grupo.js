export default class Grupo {
    constructor(semestre, grupo) {
        this._semestre = semestre
        this._grupo = grupo
        this._estudiantes = new Array();
    }
    registrar(estudiante) {
        if (this._encontrarEstudiante(estudiante) != null) {
            return false;
        }
        this._estudiantes.push(estudiante);
        return true;
    }
    _encontrarEstudiante(estudiante) {
        let resultado = null;

        this._estudiantes.forEach(e => {
            if (e.esIgualA(estudiante)) {
                resultado = e;
            } 
        });
        return resultado;
    }
    _encontrarEstudianteV2(estudiante) {
        let result = this._estudiantes.find(e => e.esIgualA(estudiante));
        
        return result;
    }
    _encontrarIndiceEstudiante(estudiante) {
        let resultado = -1;

        this._estudiantes.forEach((e, i) => {
            if (e.esIgualA(estudiante)) {
                resultado = i+1;
            }
        });
        return resultado;
    }
    _encontrarIndiceEstudianteV2(estudiante) {
        let indice = this._estudiantes.findIndex(e => e.esIgualA(estudiante));
        
        return indice;
    }
    listarEstudiantes() {
        this._estudiantes.forEach((estudiante, i) => {
            console.log(`${i+1}. ${estudiante.getPerfil()}`)
        })
    }
    eliminar(estudiante) {
        let indice = this._encontrarIndiceEstudiante(estudiante);

        if (indice < 0) {
            return false;
        }
        this._estudiantes.splice(indice, 1);
        return true;
    }
    actualizar(estudiante, nuevoEstudiante) {
        let indice = this._encontrarIndiceEstudiante(estudiante);

        if (indice < 0) {
            return false;
        }
        this._estudiantes.splice(indice, 1, nuevoEstudiante);
        return true;
    }
}