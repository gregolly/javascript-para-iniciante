var carro = 'Fusca';
function mostrarCarro() {
  
  console.log(carro);
}

mostrarCarro(); // fusca no console
console.log(carro); // erro, carro is not defined

if(true){
  let mes = 'dezembro';
  console.log(mes);
}
//console.log(mes);

{
  var carro2 = 'Gol';
  const ano = 2018;
}

console.log(carro2); // Carro
//console.log(ano); // erro ano is not defined

for(let i = 0; i < 10; i++) {
  console.log(`Número ${i}`);
}

//console.log(i);

const semana = 'sexta';
//semana = 'quinta';
//const semana = 'quinta';
console.log(semana);

const data = {
  ano: 2018,
  mes: 'dezembro',
}

data.ano = 2019;
data.dia = 25;
