const username = 'dinatalediego';

fetch(`https://api.github.com/users/${username}/repos`)
  .then(response => response.json())
  .then(repos => {
    const carousel = document.getElementById('carousel-content');

    repos.forEach((repo, index) => {
      const activeClass = index === 0 ? 'active' : '';
      const item = document.createElement('div');
      item.className = `carousel-item ${activeClass}`;
      item.innerHTML = `
        <div class="card text-dark bg-light mx-auto" style="width: 80%;">
          <div class="card-body">
            <h5 class="card-title">${repo.name}</h5>
            <p class="card-text">${repo.description || 'Sin descripción'}</p>
            <a href="${repo.html_url}" class="btn btn-primary" target="_blank">Ver en GitHub</a>
          </div>
        </div>
      `;
      carousel.appendChild(item);
    });
  })
  .catch(error => console.error('Error al cargar repos:', error));
