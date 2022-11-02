class Usuario {
    constructor (nombre, apellido, libros, mascotas)
    {
        this.nombre=nombre;
        this.apellido=apellido;
        this.libros=libros;
        this.mascotas=mascotas;
    }
}

const u = new Usuario ("Marcos", "Rojos", [{nombre:"Esperandolo a tito", autor:"Eduardo sacheri"}, {nombre:"Riquelme el torero", autor:"Alfredo Di Salvo"}],["perro", "gato"])


const getFullName = () => {
let nombreCompleto = u.nombre + u.apellido;
console.log(nombreCompleto)
}

const addMascota = () => {
    
}

const addBook = () => {}

console.log(u)

const getBookNames = () => {
    b = u.libros[0].nombre;
    b2 = u.libros[1].nombre;
    console.log(b,",",b2);
}

const countMascota = () => {
    n = u.mascotas.length
    console.log(n);
}

getFullName();
getBookNames();
countMascota();