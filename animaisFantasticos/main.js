const ImgSites = document.querySelectorAll('img');
console.log(ImgSites)

const imagensAnimais = document.querySelectorAll('img[src^="img/imagem"]')
console.log(imagensAnimais)

const linksHrefs = document.querySelectorAll('[href^="#"]')
console.log(linksHrefs)

//const animais = document.querySelector('.animais-descricao h2');
const h2Animais = document.querySelector('.animais-descricao h2');
console.log(h2Animais)

const lastP = document.querySelectorAll('p')

console.log(lastP[--lastP.length])