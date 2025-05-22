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
          <p>${item.description || ''}</p>
          <a href="${item.link}" target="_blank">Ver</a>
        </div>
      `;
      carousel.append(card);
    });

    section.append(carousel);
    main.append(section);
  });
}