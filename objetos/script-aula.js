var dadosPessoais = {
  nome: 'Gregolly',
  sobrenome: 'França',
  idade: 24,
  altura: 1.9,
  faculdade: false,
  //nomeCompleto(nome, sobrenome){
   // return `${this.nome}  ${this.sobrenome}`;
  //}
}
dadosPessoais.nomeCompleto = function() {
  return `${this.nome}  ${this.sobrenome}`;
}
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'audi',
}
carro.preco = 3000;


var cachorro = {
  raca: 'Labrador',
  cor: 'Preto',
  idade: 10,
  latir(pessoa) {
    if(pessoa === 'homem') {
      return 'Latir';
    } else {
      return 'Dormir';
    }
  }
}