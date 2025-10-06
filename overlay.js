// overlay.js
function openOverlay(wordsArray) {
  const overlay = document.getElementById('overlayModal');
  const overlayBody = document.getElementById('overlayBody');
  
  overlayBody.innerHTML = '';

  wordsArray.forEach(word => {
    const span = document.createElement('span');
    span.classList.add('word');
    span.textContent = word;
    span.addEventListener('click', () => {
      span.classList.toggle('selected');
    });
    overlayBody.appendChild(span);
  });

  overlay.classList.add('show');
}

function closeOverlay() {
  document.getElementById('overlayModal').classList.remove('show');
}
