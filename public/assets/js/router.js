const routes = {
    '/login': 'pages/login.html',
    '/register': 'pages/register.html',
    '/search': 'pages/search.html',
};
  
function loadHTML(url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
        document.getElementById('main-container').innerHTML = data;
        setupEventListeners();
        })
        .catch(err => console.error('Erro ao carregar o HTML:', err));
}

function setupEventListeners() {
    document.querySelectorAll('[data-route]').forEach(button => {
        button.addEventListener('click', () => {
        const route = button.getAttribute('data-route');
        navigate(route);
        });
    });
}

function navigate(route) {
    window.history.pushState({}, '', route);
    const url = routes[route] || 'pages/404.html';
    loadHTML(url);
    updateBackgroundColor(route);
}

function updateBackgroundColor(route) {
    const section = document.getElementById('body');
    
    section.classList.remove('search-background');

    if (route === '/search') {
      section.classList.add('search-background');
    } 
}

window.onload = function() {
    const path = window.location.pathname;
    const route = Object.keys(routes).find(r => path.startsWith(r)) || '/login';
    navigate(route);
};

window.onpopstate = function() {
    const path = window.location.pathname;
    const route = Object.keys(routes).find(r => path.startsWith(r)) || '/login';
    navigate(route);
};
  