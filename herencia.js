class Persona {
    constructor(nombre, edad, genero) {
      this.nombre = nombre
      this.edad = edad;
      this.genero = genero;
    }
}

class Profesor extends Persona {
    constructor(nombre, edad, genero, asignatura, curso) {
        this.nombre = nombre
        this.edad = edad;
        this.genero = genero;
        //añadidas
        this.asignatura = asignatura;
        this.curso = curso;
    }
  }