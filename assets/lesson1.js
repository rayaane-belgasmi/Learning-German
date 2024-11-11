// Lesson One JavaScript

// Vocabulary Data
const vocabulary = [
    {
      german: "Zusammenhang",
      english: "connection",
      sentence: "Es gibt einen Zusammenhang zwischen Persönlichkeit und Geschmack.",
      translation: "There is a connection between personality and taste."
    },
    {
      german: "Aktuelle Studie",
      english: "current study",
      sentence: "Die aktuelle Studie zeigt interessante Ergebnisse.",
      translation: "The current study shows interesting results."
    },
    {
      german: "Verstärkt",
      english: "enhances",
      sentence: "Zucker verstärkt die süßen Momente des Lebens.",
      translation: "Sugar enhances the sweet moments of life."
    },
    {
      german: "Ohnehin",
      english: "anyway",
      sentence: "Das wusste ich ohnehin schon.",
      translation: "I knew that already anyway."
    },
    {
      german: "Unvorstellbar",
      english: "unimaginable",
      sentence: "Ein Leben ohne Schokolade ist unvorstellbar.",
      translation: "A life without chocolate is unimaginable."
    },
    {
      german: "Neu-Rituale",
      english: "new rituals",
      sentence: "Halloween ist eines der Neu-Rituale in Deutschland.",
      translation: "Halloween is one of the new rituals in Germany."
    },
    {
      german: "Eisdiele",
      english: "ice cream parlor",
      sentence: "Im Sommer gehe ich gerne in die Eisdiele.",
      translation: "In summer, I like going to the ice cream parlor."
    },
    {
      german: "Sprachlich",
      english: "linguistically",
      sentence: "Sprachlich ist das Wort 'süß' sehr interessant.",
      translation: "Linguistically, the word 'sweet' is very interesting."
    },
    {
      german: "Zuckerguss",
      english: "icing",
      sentence: "Der Kuchen hat einen leckeren Zuckerguss.",
      translation: "The cake has a delicious icing."
    },
    {
      german: "Komplimente bis an die Schmerzgrenze machen",
      english: "to give compliments to the point of pain",
      sentence: "Er macht ihr Komplimente bis an die Schmerzgrenze.",
      translation: "He gives her compliments to the point of pain."
    },
    {
      german: "Jemandem Honig ums Maul schmieren",
      english: "to butter someone up",
      sentence: "Sie schmiert ihrem Chef Honig ums Maul.",
      translation: "She is buttering up her boss."
    },
    {
      german: "Verzicht",
      english: "abstinence",
      sentence: "Der Verzicht auf Süßigkeiten fällt schwer.",
      translation: "Abstaining from sweets is difficult."
    },
    {
      german: "Trotz bester Vorsätze",
      english: "despite best intentions",
      sentence: "Trotz bester Vorsätze esse ich Schokolade.",
      translation: "Despite best intentions, I eat chocolate."
    },
    {
      german: "Womöglich",
      english: "possibly",
      sentence: "Womöglich ist Zucker ungesund.",
      translation: "Possibly, sugar is unhealthy."
    },
    {
      german: "Zuckrige Versuchungen",
      english: "sugary temptations",
      sentence: "Kekse sind zuckrige Versuchungen.",
      translation: "Cookies are sugary temptations."
    },
    {
      german: "Verträgliche Persönlichkeit",
      english: "agreeable personality",
      sentence: "Sie hat eine sehr verträgliche Persönlichkeit.",
      translation: "She has a very agreeable personality."
    },
    {
      german: "Vorliebe",
      english: "preference",
      sentence: "Er hat eine Vorliebe für Süßes.",
      translation: "He has a preference for sweets."
    },
    {
      german: "Naschen",
      english: "to snack",
      sentence: "Ich nasche gerne Schokolade.",
      translation: "I like to snack on chocolate."
    },
    {
      german: "Einhergehen",
      english: "to accompany",
      sentence: "Naschen kann mit Gewichtszunahme einhergehen.",
      translation: "Snacking can accompany weight gain."
    },
    {
      german: "Hinweise gefunden",
      english: "found evidence",
      sentence: "Die Forscher haben Hinweise gefunden.",
      translation: "The researchers found evidence."
    },
    {
      german: "Kulturübergreifendes Phänomen",
      english: "cross-cultural phenomenon",
      sentence: "Das ist ein kulturübergreifendes Phänomen.",
      translation: "That is a cross-cultural phenomenon."
    },
    {
      german: "Stichproben",
      english: "samples",
      sentence: "Die Studie basiert auf Stichproben aus verschiedenen Ländern.",
      translation: "The study is based on samples from different countries."
    },
    {
      german: "Betonen",
      english: "to emphasize",
      sentence: "Die Forscher betonen die Wichtigkeit der Ergebnisse.",
      translation: "The researchers emphasize the importance of the results."
    },
    {
      german: "Nachweisbar",
      english: "verifiable",
      sentence: "Der Effekt ist nachweisbar.",
      translation: "The effect is verifiable."
    },
    {
      german: "Metapher",
      english: "metaphor",
      sentence: "'Süß' wird oft als Metapher verwendet.",
      translation: "'Sweet' is often used as a metaphor."
    },
    {
      german: "Neigen zu",
      english: "to tend to",
      sentence: "Menschen neigen zu süßen Speisen.",
      translation: "People tend to sweet foods."
    },
    {
      german: "Weit hergeholt",
      english: "far-fetched",
      sentence: "Die Theorie ist etwas weit hergeholt.",
      translation: "The theory is somewhat far-fetched."
    },
    {
      german: "Gewiss",
      english: "certainly",
      sentence: "Es gibt gewiss verschiedene Faktoren.",
      translation: "There are certainly various factors."
    },
    {
      german: "Abneigung",
      english: "aversion",
      sentence: "Er hat eine Abneigung gegen Zucker.",
      translation: "He has an aversion to sugar."
    },
    {
      german: "Ketzerische Frage",
      english: "heretical question",
      sentence: "Das ist eine ketzerische Frage.",
      translation: "That is a heretical question."
    },
    {
      german: "Spiegelbildlich",
      english: "mirror image",
      sentence: "Die Reaktionen sind spiegelbildlich.",
      translation: "The reactions are mirror images."
    },
    {
      german: "Adipositas",
      english: "obesity",
      sentence: "Zuviel Zucker kann zu Adipositas führen.",
      translation: "Too much sugar can lead to obesity."
    },
    {
      german: "Essbarer Superschurke",
      english: "edible supervillain",
      sentence: "Zucker gilt als essbarer Superschurke.",
      translation: "Sugar is considered an edible supervillain."
    },
    {
      german: "Wahrnehmung",
      english: "perception",
      sentence: "Die Wahrnehmung von Zucker hat sich geändert.",
      translation: "The perception of sugar has changed."
    },
    {
      german: "Herz-Kreislauf-Erkrankungen",
      english: "cardiovascular diseases",
      sentence: "Zucker erhöht das Risiko von Herz-Kreislauf-Erkrankungen.",
      translation: "Sugar increases the risk of cardiovascular diseases."
    },
    // Add more vocabulary items as needed
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

  const closeBtn = document.querySelector('.close');
  if (closeBtn) {
    closeBtn.addEventListener('click', function() {
      document.getElementById('carouselModal').style.display = 'none';
    });
  } else {
    console.error('Close button not found.');
  }
  