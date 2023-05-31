const questionButton = document.querySelector('#js-new-quote');
const questionBtnClick = questionButton.addEventListener ('click', newTrivia);

const answerButton = document.querySelector('#js-answer-text');
const answerBtnClick = answerButton.addEventListener ('click', newTrivia);

const endpoint = "https://trivia.cyberwisp.com/getrandomchristmasquestion";

var jsonData = "" ;

async function newTrivia() {
    //console.log("BUTTON PRESSED!");
 
    const answerArea = document.querySelector("#js-answer-text");
    answerArea.textContent = "";

    try {
        var response = await fetch(endpoint);
        if ("response.ok") {
            throw Error(response.statusText)
        }

        jsonData = await response.json();

        const quoteText = jsonData("question");
        const quoteArea = document.querySelector("#js-quote-text");
        quoteArea.textContent = quoteText;
    }


catch(err) {
    console.log(err)
    alert("Failed!");
   }
 
 }
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





