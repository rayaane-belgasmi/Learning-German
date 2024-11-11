// Lesson One JavaScript

// Vocabulary Data
const vocabulary = [
    // Include all vocabulary items with sentences and translations as previously provided
    {
      german: "Zusammenhang",
      english: "connection",
      sentence: "Es gibt einen Zusammenhang zwischen Persönlichkeit und Geschmack.",
      translation: "There is a connection between personality and taste."
    },
    // ... (include all other vocabulary items)
  ];
  
  // Function to display vocabulary
  function displayVocabulary() {
    const vocabList = document.querySelector('.vocab-list');
    vocabulary.forEach(item => {
      const vocabItem = document.createElement('div');
      vocabItem.classList.add('vocab-item');
      vocabItem.innerHTML = `
        <h3>${item.german} - ${item.english}</h3>
        <p><strong>Satz:</strong> ${item.sentence}</p>
        <p><em>${item.translation}</em></p>
      `;
      vocabList.appendChild(vocabItem);
    });
  }
  
  // Quiz functionality
  let currentQuestion = 0;
  let score = 0;
  
  function startQuiz() {
    const quizContainer = document.getElementById('quiz-container');
    showQuestion(quizContainer);
  }
  
  function showQuestion(container) {
    if (currentQuestion < vocabulary.length) {
      const vocab = vocabulary[currentQuestion];
      container.innerHTML = `
        <div class="quiz-question">
          <p>Was bedeutet "${vocab.german}" auf Englisch?</p>
          <ul class="quiz-options">
            ${generateOptions(vocab)}
          </ul>
        </div>
      `;
    } else {
      container.innerHTML = `<p>Dein Ergebnis: ${score}/${vocabulary.length}</p>`;
    }
  }
  
  function generateOptions(correctVocab) {
    const options = [correctVocab.english];
    while (options.length < 4) {
      const randomVocab = vocabulary[Math.floor(Math.random() * vocabulary.length)].english;
      if (!options.includes(randomVocab)) {
        options.push(randomVocab);
      }
    }
    // Shuffle options
    options.sort(() => Math.random() - 0.5);
    return options.map(option => `<li><button onclick="checkAnswer('${option}', '${correctVocab.english}')">${option}</button></li>`).join('');
  }
  
  function checkAnswer(selected, correct) {
    if (selected === correct) {
      score++;
    }
    currentQuestion++;
    showQuestion(document.getElementById('quiz-container'));
  }
  
  // Carousel functionality
  document.getElementById('openCarousel').addEventListener('click', function() {
    document.getElementById('carouselModal').style.display = 'block';
    swiper.update(); // Update Swiper after display
  });
  
  document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('carouselModal').style.display = 'none';
  });
  
  // Initialize Swiper
  const swiper = new Swiper('.swiper', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  
  // Load slides into Swiper
  const swiperWrapper = document.querySelector('.swiper-wrapper');
  const totalSlides = 3; // Adjust based on the number of images you have
  for (let i = 1; i <= totalSlides; i++) {
    const slide = document.createElement('div');
    slide.classList.add('swiper-slide');
    slide.innerHTML = `<img src="assets/images/text-slide${i}.jpg" alt="Text Slide ${i}" style="width:100%; height:auto;">`;
    swiperWrapper.appendChild(slide);
  }
  
  // Initialize the page
  window.onload = function() {
    displayVocabulary();
    startQuiz();
  };
  