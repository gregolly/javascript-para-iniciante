const img = document.querySelector('img');
const distanciaPrimeiraImg = img.offsetTop;

//console.log(distanciaPrimeiraImg)

//retorne a soma da largura das imagens
function somaImagens() {
  const imagens = document.querySelectorAll('img');
  let soma = 0;
  imagens.forEach((imagem) => {
    soma += imagem.offsetWidth;
  });
  console.log(soma)
}

window.onload = function() {
  somaImagens();
}

//verifique se os links da páginas possuem o minimo de larguara para o dedo

const links = document.querySelectorAll('a');

links.forEach((link) => {
  const linkWidth = link.offsetWidth;
  const linkHeight = link.offsetHeight;
  if(linkWidth >= 48 && linkHeight >= 48){
    console.log(link, 'Possui assessibilidade')
  } else {
    console.log(link, 'Possui boa assessibilidade')
  }
});

console.log(links)

//se o browser for maior que 720

const browserSmall = window.matchMedia('(max-width: 720px)').matches;

if(browserSmall){
  const menu = document.querySelector('.menu');
  menu.classList.add('menu-mobile');
}
