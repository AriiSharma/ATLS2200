function increaseVolume() {
    showLoadingOverlay();
  
    setTimeout(function() {
      hideLoadingOverlay();
      alert('Volume increased!');
    }, 3000);
  }
  
  function decreaseVolume() {
    showLoadingOverlay();
  
    setTimeout(function() {
      hideLoadingOverlay();
      alert('Volume decreased!');
    }, 3000);
  }
  
  function showLoadingOverlay() {
    var overlay = document.createElement('div');
    overlay.className = 'overlay';
  
    var loadingIcon = document.createElement('div');
    loadingIcon.className = 'loading-icon';
  
    overlay.appendChild(loadingIcon);
    document.body.appendChild(overlay);
  }
  
  function hideLoadingOverlay() {
    var overlay = document.querySelector('.overlay');
    document.body.removeChild(overlay);
  }
  