const flashcards = [
    {
      word: "Betonen",
      translation: "Emphasize",
      example: "Die Forscher betonen, dass diese Erkenntnis wichtig ist.",
      exampleTranslation: "The researchers emphasize that this finding is important."
    },
    {
      word: "Stichprobe",
      translation: "Sample",
      example: "Die Studie basiert auf einer großen Stichprobe von Teilnehmern.",
      exampleTranslation: "The study is based on a large sample of participants."
    },
    {
      word: "Abneigung",
      translation: "Aversion",
      example: "Manche Menschen haben eine natürliche Abneigung gegen Süßes.",
      exampleTranslation: "Some people have a natural aversion to sweets."
    },
    {
      word: "Adipositas",
      translation: "Obesity",
      example: "Adipositas ist ein wachsendes Gesundheitsproblem in vielen Ländern.",
      exampleTranslation: "Obesity is a growing health issue in many countries."
    },
    {
      word: "Diabetes",
      translation: "Diabetes",
      example: "Ein hoher Zuckerkonsum kann zu Diabetes führen.",
      exampleTranslation: "High sugar consumption can lead to diabetes."
    },
    {
      word: "Herz-Kreislauf-Erkrankungen",
      translation: "Cardiovascular Diseases",
      example: "Herz-Kreislauf-Erkrankungen sind häufig mit einem ungesunden Lebensstil verbunden.",
      exampleTranslation: "Cardiovascular diseases are often associated with an unhealthy lifestyle."
    },
    {
      word: "Schmerzgrenze",
      translation: "Pain Threshold",
      example: "Jeder Mensch hat eine individuelle Schmerzgrenze.",
      exampleTranslation: "Everyone has an individual pain threshold."
    }
  ];
  
  let currentCard = 0;
  
  const flashcard = document.getElementById("flashcard");
  const front = document.getElementById("flashcard-front");
  const back = document.getElementById("flashcard-back");
  
  function loadCard(index) {
    front.textContent = flashcards[index].word;
    back.innerHTML = `<p><strong>${flashcards[index].translation}</strong></p>
                      <p><em>${flashcards[index].example}</em></p>
                      <p><small>${flashcards[index].exampleTranslation}</small></p>`;
  }
  
  function flipCard() {
    flashcard.classList.toggle("is-flipped");
  }
  
  function prevCard() {
    if (currentCard > 0) {
      currentCard--;
      loadCard(currentCard);
      flashcard.classList.remove("is-flipped");
    }
  }
  
  function nextCard() {
    if (currentCard < flashcards.length - 1) {
      currentCard++;
      loadCard(currentCard);
      flashcard.classList.remove("is-flipped");
    }
  }
  
  flashcard.addEventListener("click", flipCard);
  loadCard(currentCard);
  