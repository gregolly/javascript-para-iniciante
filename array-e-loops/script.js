var copaDoMundo = ['1959', '1962', '1970', '1994', '2002'];

for (let i = 0; i < copaDoMundo.length; i++) {
  console.log(`O brasil ganhou a copa do mundo nos seguintes anos  ${copaDoMundo[i]}`);
}

var frutas = ['banana', 'uva', 'pera', 'melancia', 'abacaxi']
var pineApple = 'abacaxi';

for (let f = 0; f < frutas.length; f++){
  console.log(frutas[f]);
  if(frutas[f] === 'uva'){
    break;
  }
}

var ultimaFruta = frutas[frutas.length - 1];