document.addEventListener('scroll', function () {
  // Seleciona todos os elementos que você quer animar
  const textElements = document.querySelectorAll('.aboutText, .aboutImg, .salesforceText, .salesforceImg, .projectsWebMaster');// Adicione as classes desejadas aqui

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
const elementsToAnimate = document.querySelectorAll('.aboutText, .aboutImg, .salesforceText, .salesforceImg, .projectsWebMaster');
elementsToAnimate.forEach(element => observer.observe(element));


const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");

const swiperEl = document.querySelector("swiper-container");
swiperEl.addEventListener("autoplaytimeleft", (e) => {
  const [swiper, time, progress] = e.detail;
  progressCircle.style.setProperty("--progress", 1 - progress);
  progressContent.textContent = `${Math.ceil(time / 1000)}s`;
});
