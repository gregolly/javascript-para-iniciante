const menu = document.querySelector('.menu');

menu.classList.add('ativo');
menu.classList.remove('azul');
menu.classList.toggle('azul');
if(menu.classList.contains('azul')){
  menu.classList.add('possui-azul')
} else {
  menu.classList.add('nao-possui-azul')
}

menu.className += ' Vermelho'

console.log(menu.className)

const animais = document.querySelector('.animais');

console.log(animais.attributes);

const img = document.querySelector('img');

const srcImg = img.getAttribute('src');

img.setAttribute('alt', 'É uma raposa')
const possuiAlt = img.hasAttribute('alt', 'É uma raposa')

console.log(srcImg)


const carro = {
  ports: 4,
  andar: function(km) {
    console.log(`Andou ${km}`)
  }
}