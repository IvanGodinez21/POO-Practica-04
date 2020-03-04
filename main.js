import FechaNacimiento from "./fecha-nacimiento.js";
import Nombre from "./nombre.js";

class Main {
    constructor() {
        this.fecha = new FechaNacimiento(3, 3, 2005)t
        this.nombre = new Nombre("Ivan", "Godiinez", "Martinez")
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
        console.log(this.nombre.getNombre());

    }
}

let app = new Main();
app.testFechaNacimiento();
app.testNombre();