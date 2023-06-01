const questionButton = document.querySelector('#js-new-quote');
questionButton.addEventListener('click', newTrivia);

const answerButton = document.querySelector('#js-tweet');
answerButton.addEventListener('click', giveAnswer);

const endpoint = "https://trivia.cyberwisp.com/getrandomchristmasquestion";

let currentTrivia = null;

async function newTrivia() {
  const answerArea = document.querySelector("#js-answer-text");
  answerArea.textContent = "";

  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const jsonData = await response.json();

    currentTrivia = jsonData;

    const quoteText = currentTrivia.question;
    const quoteArea = document.querySelector("#js-quote-text");
    quoteArea.textContent = quoteText;
  } catch (err) {
    console.log(err);
    alert("Failed to fetch trivia question!");
  }
}

function giveAnswer() {
  if (currentTrivia) {
    const answerText = currentTrivia.answer;
    const answerArea = document.querySelector("#js-answer-text");
    answerArea.textContent = answerText;
  } else {
    alert("No trivia question available. Click 'Generate a new bit of trivia!' to get a question.");
  }
}







