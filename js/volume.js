let volume = 50;
let birdPositionX = 50;
let birdPositionY = 50;
const volumeLevel = document.querySelector('.volume-level');
const bird = document.querySelector('#bird');
const message = document.querySelector('#message');
const gameArea = document.querySelector('.game-area');
let isDragging = false;

gameArea.addEventListener('mousedown', handleMouseDown);
gameArea.addEventListener('mousemove', handleMouseMove);
gameArea.addEventListener('mouseup', handleMouseUp);

function handleMouseDown() {
  isDragging = true;
}

function handleMouseMove(event) {
  if (isDragging) {
    const gameAreaWidth = gameArea.clientWidth;
    const gameAreaHeight = gameArea.clientHeight;
    const mouseX = event.clientX - gameArea.offsetLeft;
    const mouseY = event.clientY - gameArea.offsetTop;

    if (mouseX >= 0 && mouseX <= gameAreaWidth && mouseY >= 0 && mouseY <= gameAreaHeight) {
      bird.style.left = mouseX + 'px';
      bird.style.top = mouseY + 'px';
      adjustVolume(mouseY, gameAreaHeight);
    }
  }
}

function handleMouseUp() {
  isDragging = false;
}

function adjustVolume(mouseY, gameAreaHeight) {
  const maxVolume = 100;
  const minVolume = 0;
  const maxPosition = gameAreaHeight;
  const minPosition = 0;

  const volumePercentage = Math.round(((mouseY - minPosition) / (maxPosition - minPosition)) * (maxVolume - minVolume) + minVolume);

  volumeLevel.textContent = `Volume Level: ${volumePercentage}%`;
  volume = volumePercentage;
}

function submitVolume() {
  if (volume > 0 && volume < 100) {
    displayMessage(`Volume submitted: ${volume}%`, 'success');
  } else {
    displayMessage('Volume must be between 1% and 99%', 'error');
  }
}

function displayMessage(msg, type) {
  message.textContent = msg;
  message.classList.add(type);
  message.style.visibility = 'visible';

  setTimeout(() => {
    message.textContent = '';
    message.classList.remove(type);
    message.style.visibility = 'hidden';
  }, 2000);
}





  



  