const img = document.querySelector('img');

function callback(event){
  console.log(event);
}

//img.addEventListener('click', callback);

const animaisLista = document.querySelector('.animais-lista');

function callbackLista(event){
  console.log(event.currentTarget);
  console.log(event.target);
  console.log(event.type);
}
//animaisLista.addEventListener('click', callbackLista);

const linkExterno = document.querySelector('a[href^="http"]');

function handleLink(event){
  event.preventDefault();
  //console.log(event)
  console.log(this.getAttribute('href'))
}

//linkExterno.addEventListener('click', handleLink);

const h1 = document.querySelector('h1');

function handleEvent(event){
  console.log(event.type, event)
}
//h1.addEventListener('click', handleEvent)
//h1.addEventListener('mouseenter', handleEvent)
//h1.addEventListener('mousemove', handleEvent)

//window.addEventListener('scroll', handleEvent)
///window.addEventListener('resize', handleEvent)

function handleKeyBoard(e){
  if(e.key === 'f'){
    document.body.classList.toggle('fullscreen');
  }
}
window.addEventListener('keydown', handleKeyBoard)

const imgs = document.querySelectorAll('img');

function handleImg(e){
  console.log(e.target.getAttribute('src'));
}
imgs.forEach((img) =>{
  img.addEventListener('click', handleImg)
});