function typeWrite(elemento){
    const  textArray = elemento.innerHTML.split('');
    elemento.innerHTML= ' ';
    textArray.forEach((letra, i) => {
        setTimeout(() => {
            elemento.innerHTML += letra
        }, 25*i);
    });
}
const titulo = document.querySelector('.TituloGame')
const carta = document.querySelector('.historiaDojogo')
typeWrite(titulo)
typeWrite(carta)

function initAnimacaoScroll() {
    const sections = document.querySelectorAll('.js-scroll');
    if(sections.length) {
      const windowMetade = window.innerHeight * 0.7;
  
      function animaScroll() {
        sections.forEach((section) => {
          const sectionTop = section.getBoundingClientRect().top;
          const isSectionVisible = (sectionTop - windowMetade) < 0;
          if(isSectionVisible)
            section.classList.add('ativo');
        })
      }
  
      animaScroll();
  
      window.addEventListener('scroll', animaScroll);
    }
  }
  initAnimacaoScroll();