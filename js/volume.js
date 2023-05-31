let volume = 50;
let birdPosition = 50;
const volumeLevel = document.querySelector('.volume-level');
const bird = document.querySelector('#bird');
const message = document.querySelector('#message');

document.addEventListener('mousemove', handleMouseMove);

function handleMouseMove(event) {
  const gameArea = document.querySelector('.game-area');
  const gameAreaHeight = gameArea.clientHeight;
  const gameAreaTop = gameArea.offsetTop;
  const mouseY = event.clientY - gameAreaTop;

  if (mouseY > birdPosition && mouseY < gameAreaHeight - birdPosition) {
    bird.style.top = mouseY + 'px';
  }
}

function changeVolume(action) {
  if (action === 'increase') {
    if (volume < 100) {
      volume += 10;
      displayMessage(`Volume increased to ${volume}%!`, 'success');
    } else {
      displayMessage("Oops, I can't increase the volume anymore!", 'error');
    }
  } else if (action === 'decrease') {
    if (volume > 0) {
      volume -= 10;
      displayMessage(`Volume decreased to ${volume}%!`, 'success');
    } else {
      displayMessage("Oops, I can't decrease the volume anymore!", 'error');
    }
  }

  volumeLevel.textContent = `Volume Level: ${volume}%`;

  if (volume === 0 || volume === 100) {
    endGame();
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

function endGame() {
  displayMessage('Game Over!', 'error');
  document.removeEventListener('mousemove', handleMouseMove);
}



  