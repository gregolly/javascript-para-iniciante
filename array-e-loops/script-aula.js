var videogames = ['switch', 'ps4', 'xbox', '3DS'];

//var ultimoItem = videogames.pop();
/*
videogames.push('3DS');
console.log(videogames.length);

for (var numero = 0; numero <=   10; numero++ ) {
  console.log(numero);
}

var i = 0;
while (i <= 100) {
  console.log(i);
  i = i + 5;
}
*/

for (var item = 0; item < videogames.length; item++) {
  console.log(videogames[item]);
  if(videogames[item] === 'ps4'){
    break;
  }
}

var frutas = ['banana', 'uva', 'pera', 'melancia', 'abacaxi']
frutas.forEach(function(item, i, array){
  console.log(item, i, array);
});

