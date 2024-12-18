document.addEventListener('scroll', function () {
  // Seleciona todos os elementos que você quer animar
  const textElements = document.querySelectorAll('.aboutText, .aboutImg, .salesforceText, .salesforceImg, projectsWebText');// Adicione as classes desejadas aqui

  textElements.forEach(function (textElement) {
    const textPosition = textElement.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (textPosition < windowHeight) {
      textElement.classList.add('show'); // Adiciona a classe para iniciar a animação
    }
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.classList.add('show'); // Adiciona a classe para animar
      }
  });
});

// Observa os elementos que devem ser animados
const elementsToAnimate = document.querySelectorAll('.aboutText, .aboutImg, .salesforceText, .salesforceImg, projectsWebText');
elementsToAnimate.forEach(element => observer.observe(element));
