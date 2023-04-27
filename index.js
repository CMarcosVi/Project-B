function typeWrite(targetElement) {
  const textArray = targetElement.innerHTML.split('');
  targetElement.innerHTML = '';
  let i = 0;
  const timer = setInterval(() => {
    if (i === textArray.length) {
      clearInterval(timer);
      return;
    }
    targetElement.innerHTML += textArray[i];
    i++;
  }, 25);
}
function animateSections() {
  const sections = document.querySelectorAll('.js-scroll');
  const windowHeight = window.innerHeight;
  function handleScroll() {
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      const isVisible = sectionTop - windowHeight < 0;
      section.classList.toggle('ativo', isVisible);
    });
  }
  handleScroll();
  window.addEventListener('scroll', handleScroll);
}
const titulo = document.querySelector('.TituloGame');
const carta = document.querySelector('.historiaDojogo');
typeWrite(titulo);
typeWrite(carta);
animateSections();