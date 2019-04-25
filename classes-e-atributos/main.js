// adicione a classe ativo a todos os itens do menu
const itensMenu = document.querySelectorAll('.menu a')

itensMenu.forEach((item) => {
  item.classList.add('ativo');
});

// apenas no primeiro
itensMenu.forEach((item) => {
  item.classList.remove('ativo');
});

itensMenu[0].classList.add('ativo')

//selecionador todas as imagens e verificar se tem atributo 'alt'
const imgs = document.querySelectorAll('img');

imgs.forEach(() => {
 const possuiAtributo = img.hasAttribute('alt')
 console.log(possuiAtributo)
})


//selecionar link externo e modificar caminho
const Link = document.querySelector('a[href^="http"]');

Link.setAttribute('href', 'https://google.com.br')

console.log(Link)
