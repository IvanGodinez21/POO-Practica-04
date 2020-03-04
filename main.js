import FechaNacimiento from "./fecha-nacimiento.js";
import Nombre from "./nombre.js";

class Main {
    constructor() {
        this.fecha = new FechaNacimiento(3, 3, 2005)
        this.nombre = new Nombre("Ivan", "Escritura", "Lectura & Escritura")
    }

    testFechaNacimiento() {
        //lectura del atributo Fecha
        console.log(this.fecha.getFecha());

        //escritura del atributo Fecha
        console.log(this.fecha.setFecha(new Date(2207, 5, 2)));
        console.log(this.fecha.getFormatoExtendido())
        console.log(this.fecha.setFecha(new Date(2007, 5, 2)));
        console.log(this.fecha.getFormatoExtendido())

        //acceso de los métodos
        console.log(this.fecha.getFormatoCorto());
        console.log(this.fecha.getFormatoExtendido());
        console.log(this.fecha.getEdad());
    } 
    testNombre() {
        //Solo leer el nombre del constructor (Ivan en consola)
        console.log(this.nombre.getNombre());

        //Solo escribir el Apellido Paterno (undefined en consola)
        this.nombre.setApePat("Godinez");
        console.log(this.nombre.setApePat())

        //Escribir y leer el Apellido Materno (Martinez en consola)
        this.nombre.setApeMat("Martinez");
        console.log(this.nombre.getApeMat());

    }
}

let app = new Main();
app.testFechaNacimiento();
app.testNombre();