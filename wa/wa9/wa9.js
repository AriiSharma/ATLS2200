const questionButton = document.querySelector('#js-new-quote');
questionButton.addEventListener('click', newSong);

const answerButton = document.querySelector('#js-answer-text');
answerButton.addEventListener('click', showLyrics);

const endpoint = "https://genius-song-lyrics1.p.rapidapi.com/search/?q=%3CREQUIRED%3E&per_page=10&page=1";
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f6ce7afa25msh9fd81ad9ad2783cp1fb93djsnd5c018cfa8cf',
		'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
	}
};

async function fetchSong() {
    try {
        const response = await fetch(endpoint, options);
        if (!response.ok) {
            throw new Error(response.statusText);
        }

        const jsonData = await response.json();
        return jsonData;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

async function newSong() {
    const output = await fetchSong();
    console.log(output);
     
    const quoteText = output["question"]; // Replace "question" with the appropriate key from the API response
    const quoteArea = document.querySelector("#js-quote-text");
    quoteArea.textContent = quoteText;
}

async function showLyrics() {
    const output = await fetchSong();
    console.log(output);

    const answerText = output["answer"]; // Replace "answer" with the appropriate key from the API response
    const answerArea = document.querySelector("#js-answer-text");
    answerArea.textContent = answerText;
}
