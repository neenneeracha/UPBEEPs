
  const hasCookie = document.cookie.includes('popup=closed');
if (!hasCookie) {
  const popup = document.getElementById('popup');
  popup.style.display = 'block';

  const closeButton = document.getElementById('close-button');
  closeButton.addEventListener('click', () => {
    document.cookie = 'popup=closed; max-age=300';
    popup.style.display = 'none';
  });
}
function closePopup() {
  const popup = document.getElementById('popup');
  popup.style.display = 'none';
}