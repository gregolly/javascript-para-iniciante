const listaAnimais = document.querySelector('.animais-lista');

//console.log(listaAnimais.scrollHeight)

const height = listaAnimais.scrollHeight;
const animaisTop = listaAnimais.offsetTop;
console.log(animaisTop);

const primeiroh2 = document.querySelector('h2');
const h2left = primeiroh2.offsetLeft;

const rect = primeiroh2.getBoundingClientRect();
console.log(rect);

if(rect.top < 0){
  console.log('paassou do elemento')
}
console.log(
  window.innerWidth,
  window.outerWidth,
  window.innerHeight,
  window.outerHeight,
  window.pageYOffset
)

const small = window.matchMedia('(max-width: 600px)').matches;

console.log(small)

if(small){
  console.log('pinto pequeno');
} else{
  console.log('pinto grande');
}