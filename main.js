import FechaNacimiento from "./fecha-nacimiento.js";
import Nombre from "./nombre.js";
import Persona from "./persona.js";
import Estudiante from "./estudiante.js"
import Maestro from "./maestro.js";
import Grupo from "./grupo.js";

class Main {
    constructor() {
        this.fecha = new FechaNacimiento(3, 3, 2005)
        this.nombre = new Nombre("Ivan", "Escritura", "Lectura & Escritura")
        this.persona = new Persona("Masculino", new FechaNacimiento(21, 12, 2000), new Nombre("Jesus", "Ivan","Godinez"))
    }

    testFechaNacimiento() {
        console.log("-----testFechaNacimiento-----")
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
        console.log("-----testPersona-----")
        //Solo leer el nombre del constructor (Ivan en consola)
        console.log(this.nombre.getNombre());

        //Solo escribir el Apellido Paterno (undefined en consola)
        this.nombre.setApePat("Godinez");
        console.log(this.nombre.setApePat())

        //Escribir y leer el Apellido Materno (Martinez en consola)
        this.nombre.setApeMat("Martinez");
        console.log(this.nombre.getApeMat());
    }
    testPersona() {
        console.log("-----testPersona-----")
        console.log(this.persona.getPerfil());
    }
    testEstudiante() {
        console.log("-----testEstudiante-----")
        let estudiante = new Estudiante(
            new Nombre("Ivan" , "Godinez", "Martinez"),
            new FechaNacimiento(21,12,2000),
            "Masculino",
            20166796,
            "jgodinez0@ucol.mx",
            "Facultad de Telematica"
            );
        estudiante.print()
    }
    testMaestro() {
        console.log("-----testMaestro-----")
        let maestro = new Maestro(
            new Nombre("Carlos", "Flores", "Cortes"),
            new FechaNacimiento(11,11,1970),
            "Masculino",
            1000,
            "201610",
            "Programación"
            );
        maestro.print()
    }
    testGrupo() {
        console.log("-----testGrupo-----")
        let datosEstudiante = {
            nombre: new Nombre("Juan", "Perez", "Rodriguez"),
            FechaNacimiento: new FechaNacimiento(15,3,2000),
            genero: "Masculino",
            numeroCuenta: 20166792,
            correo: "juan@ucol.mx",
            escuela: "Telematica"
        };
        let estudiante1 = new Estudiante(datosEstudiante);
        let estudiante2 = new Estudiante(
            new Nombre("Juan", "Alcachofa", "Ramirez"),
            new FechaNacimiento(17,8,2000),
            "Masculino",
            20166790,
            "juanAlca@ucol.mx",
            "Telematica"
        );
        let estudiante3 = new Estudiante(
            new Nombre("Juan", "Alcachofa", "Ramirez"),
            new FechaNacimiento(17,8,2000),
            "Masculino",
            20166790,
            "juanAlca@ucol.mx",
            "Telematica"
        );
        let estudiante4 = new Estudiante(
            new Nombre("Juan", "Alcachofa", "Ramirez"),
            new FechaNacimiento(17,8,2000),
            "Masculino",
            20165790,
            "juanAlca@ucol.mx",
            "Telematica"
        );
        let grupo = new Grupo(1,"G");
        console.log(grupo.registrar(estudiante1));
        console.log(grupo.registrar(estudiante1));
        console.log(grupo.registrar(estudiante2));
        console.log(grupo.registrar(estudiante3));

        grupo.registrar(estudiante1);
        grupo.registrar(estudiante1);
        grupo.registrar(estudiante1);
        grupo.registrar(estudiante1);

        grupo.listarEstudiantes();

        console.log(grupo._encontrarEstudiante(estudiante1))
        console.log(grupo._encontrarEstudiante(estudiante3))
        console.log(grupo._encontrarEstudianteV2(estudiante2))
        console.log(grupo._encontrarEstudiante(estudiante4))

        console.log(grupo._encontrarIndiceEstudiante(estudiante1))
        console.log(grupo._encontrarIndiceEstudiante(estudiante2))

        console.log(grupo.eliminar(estudiante1));
        console.log(grupo.eliminar(estudiante2));
        
        grupo.listarEstudiantes();

        console.log(grupo.actualizar(estudiante1, estudiante2));


        grupo.listarEstudiantes();
    }
}

let app = new Main();
app.testFechaNacimiento();
app.testNombre();
app.testPersona();
app.testEstudiante();
app.testMaestro();
app.testGrupo();