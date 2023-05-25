
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText ="It was a crazy hot day in Boulder.  So :insertx: decided to wear all white breezy clothes. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Arii saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
const insertX =["Ari", "Ari's other friend", "Ari's friend"];
const insertY =["the Alfred Packers", "the Hills", "the campus"];
const insertZ =["spontaneously combusted. There were so many food places to pick from", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

randomize.addEventListener('click', result);

function result() {
    let newStory = storyText;
  
    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);
  
    newStory = newStory.replaceAll(':insertx:',xItem);
    newStory = newStory.replaceAll(':inserty:',yItem);
    newStory = newStory.replaceAll(':insertz:',zItem);
  
    if (customName.value !== '') {
      const name = customName.value;
      newStory = newStory.replaceAll('Arii', name);
    }
  
    if (document.getElementById("uk").checked) {
      const weight = `${Math.round(300*0.0714286)} stone`;
      const temperature =  `${Math.round((94-32) * 5 / 9)} centigrade`;
      newStory = newStory.replaceAll('94 fahrenheit', temperature);
      newStory = newStory.replaceAll('300 pounds', weight);
    }
  
    story.textContent = newStory;
    story.style.visibility = 'visible';
  }