document.addEventListener("DOMContentLoaded", function () {
    const apiUrl = "https://opentdb.com/api.php?amount=20&category=9&difficulty=medium&type=boolean";
    const questionContainer = document.getElementById("question");
    const trueButton = document.getElementById("true-btn");
    const falseButton = document.getElementById("false-btn");
    const resultContainer = document.getElementById("result");
    const scoreContainer = document.getElementById("score");
  
    let questions = [];
    let currentQuestionIndex = 0;
    let score = 0;
  
    trueButton.addEventListener("click", handleAnswer);
    falseButton.addEventListener("click", handleAnswer);
  
    async function fetchQuizQuestions() {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error("Failed to fetch quiz questions");
        }
        const data = await response.json();
        questions = data.results;
        displayQuestion();
      } catch (error) {
        console.log(error);
        alert("Failed to fetch quiz questions");
      }
    }
  
    function displayQuestion() {
      if (currentQuestionIndex < questions.length) {
        const currentQuestion = questions[currentQuestionIndex];
        questionContainer.textContent = currentQuestion.question;
      } else {
        showFinalScore();
      }
    }
  
    function handleAnswer(event) {
      const selectedAnswer = event.target.id === "true-btn" ? "True" : "False";
      const currentQuestion = questions[currentQuestionIndex];
  
      if (selectedAnswer === currentQuestion.correct_answer) {
        score++;
        resultContainer.textContent = "Correct!";
      } else {
        resultContainer.textContent = "Incorrect!";
      }
  
      currentQuestionIndex++;
      displayQuestion();
    }
  
    function showFinalScore() {
      const percentage = (score / questions.length) * 100;
      scoreContainer.textContent = `Your final score: ${score}/${questions.length} (${percentage}%)`;
      resultContainer.textContent = "";
      trueButton.disabled = true;
      falseButton.disabled = true;
    }
  
    fetchQuizQuestions();
  });
  
  