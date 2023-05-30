const questionButton = document.querySelector('#js-new-quote');
const questionBtnClick = questionButton.addEventListener ('click', newTrivia);

const answerButton = document.querySelector('#js-answer-text');
const answerBtnClick = answerButton.addEventListener ('click', newTrivia);

const endpoint = "https://trivia.cyberwisp.com/getrandomchristmasquestion";

async function newQuestion() {
    const output = await newTrivia();
    console.log(output);

    const quoteText = output["question"];
    const quoteArea = document.querySelector("#js-quote-text");
    quoteArea.textContent = quoteText;
}

async function giveAnswer() {
    const output = await newTrivia();
    console.log(output);

    const answerText = output["answer"];
    const answerArea = document.querySelector("#js-answer-text");
    answerArea.textContent = quoteText;
}

async function newTrivia() {
    //console.log("BUTTON PRESSED!");
 
    try {
    const response = await fetch(endpoint);
    if(!response.ok) {
     throw Error(response.statusText)
    }
    //console.log(response);
 
    const jsonData = await response.json();
 
    //console.log(jsonData['question']);
    //console.log(jsonData['answer']);
 
    return(jsonData);
}

catch(err) {
    console.log(err)
    alert("Failed!");
   }
 
 }






