fetch('data.json')
  .then(res => res.json())
  .then(data => renderCategories(data.categories));

function renderCategories(categories) {
  const main = document.getElementById('main-content');
  categories.forEach(cat => {
    const section = document.createElement('section');
    section.className = 'category';
    section.innerHTML = `<h2>${cat.title}</h2>`;

    const carousel = document.createElement('div');
    carousel.className = 'carousel';

    cat.items.forEach(item => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <img src="${item.image}" alt="${item.title}" />
        <div class="card-body">
          <h3>${item.title}</h3>
          <a href="${item.link}" target="_blank">Ver</a>
        </div>
      `;
      carousel.append(card);
    });

    section.append(carousel);
    main.append(section);
  });
}

/*
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
*/