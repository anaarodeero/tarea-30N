class Rectangulo {
    constructor(alto, ancho) {
      this.alto = alto;
      this.ancho = ancho;
    }
}

var cuadrado = new Rectangulo(10, 10);

console.log(cuadrado.area);