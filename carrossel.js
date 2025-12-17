const slides = document.querySelectorAll('.slide');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const indicadoresContainer = document.querySelector('.indicadores');
let currentSlide = 0;

// Criar indicadores
slides.forEach((slide, index) => {
  const indicator = document.createElement('span');
  indicator.addEventListener('click', () => goToSlide(index));
  indicadoresContainer.appendChild(indicator);
});

const indicadores = document.querySelectorAll('.indicadores span');

// Atualizar o carrossel
function updateCarousel() {
  // Mover o carrossel para a posição correta
  const offset = -currentSlide * 100; // deslocamento horizontal
  document.querySelector('.carrossel').style.transform = `translateX(${offset}%)`;

  // Atualizar os indicadores
  indicadores.forEach((indicator, index) => {
    indicator.classList.remove('active');
    if (index === currentSlide) {
      indicator.classList.add('active');
    }
  });

  // Alternar a classe active nos slides
  slides.forEach((slide, index) => {
    slide.classList.remove('active');
    if (index === currentSlide) {
      slide.classList.add('active');
    }
  });
}

// Navegação para o slide anterior
prevButton.addEventListener('click', () => {
  currentSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
  updateCarousel();
});

// Navegação para o slide seguinte
nextButton.addEventListener('click', () => {
  currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
  updateCarousel();
});

// Navegação pelos indicadores
function goToSlide(index) {
  currentSlide = index;
  updateCarousel();
}

// Inicializar o carrossel
updateCarousel();
