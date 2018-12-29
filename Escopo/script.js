{
  var cor = 'preto';
  const marca = 'Fiat';
  let portas = 4;
  console.log(cor, marca, portas);
}
//console.log(cor, marca, portas);
// o erro acontece porque const e let não estouram o escopo

const dois = 2;
function somarDois(x) {
  return x + dois;
}
function dividirDois(x) {
  return x / dois;
}

console.log(somarDois(4));
console.log(dividirDois(6));

const numero = 50;

for(let numero = 0; numero < 10; numero++){
  console.log(numero);
}

const total = 10 * numero;
console.log(total);