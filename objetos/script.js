


var pessoa = {
  nome: 'Greg',
  idade: 24,
}

var quadrado = {
  lados: 4,
  area(lado) {
    return lado * lado;
  },
  perimetro(lado) {
    return this.lados * lado;
  },
}

console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));

console.log(Math.random());

//var height = 100;
var menu = {
  width: 800,
  height: 50,
  backgroundColor: '#84E',
  metadeHeight() {
    return this.height / 2;
  }
}

menu.backgroundColor = '#000';

menu.color = 'blue';

menu.esconder = function() {
  console.log('Escondi');
}

var bg = menu.backgroundColor;

var dadosPessoais = {
  nome: 'Gregolly',
  sobrenome: 'França',
  idade: 24,
  altura: 1.9,
  faculdade: false,
  nomeCompleto(nome, sobrenome){
    return nome + ' ' + sobrenome;
  }
}

var carro = {
  preco: 1000,
  portas: 4,
  marca: 'audi',
  Modificar() {
    return this.preco(2000);
  }
}

console.log(carro);