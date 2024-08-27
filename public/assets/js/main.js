
function loadHTML(id, url) {
  fetch(url)
    .then(response => response.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
    })
    .catch(err => console.error('Erro ao carregar o HTML:', err));
}
  
window.onload = function() {
  loadHTML('login', 'pages/login.html');
};
  