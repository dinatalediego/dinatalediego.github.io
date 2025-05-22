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


{
  "categories": [
    {
      "title": "Proyectos de Data Science",
      "items": [
        {
          "title": "Pipeline MLOps",
          "description": "Automatización de entrenamiento, validación y despliegue de modelos.",
          "image": "images/mlops.png",
          "link": "https://github.com/dinatalediego/mlops-pipeline",
          "labels": ["Python","Docker","CI/CD"]
        },
        {
          "title": "XGBoost para conversiones",
          "description": "Modelo predictivo de conversión de leads con XGBoost y métricas F1.",
          "image": "images/xgboost.png",
          "link": "https://github.com/dinatalediego/xgboost-model",
          "labels": ["XGBoost","Scikit-learn"]
        },
        {
          "title": "NLP: Análisis de discursos",
          "description": "Extracción de entidades y temas clave de discursos de Nobel con SpaCy.",
          "image": "images/nlp.png",
          "link": "https://github.com/dinatalediego/nobel-nlp-analysis",
          "labels": ["NLP","SpaCy","WordCloud"]
        }
      ]
    },
    {
      "title": "Mis intereses de investigación",
      "items": [
        {
          "title": "Diccionario Nobel Economía",
          "description": "Framework de ideas clave de los laureados de los últimos 50 años.",
          "image": "images/nobel-econ.png",
          "link": "research/nobel-dictionary.html",
          "labels": ["Economía","Historia"]
        },
        {
          "title": "AI en Real Estate",
          "description": "Casos de uso de IA para optimizar precios y predicción de demanda.",
          "image": "images/realestate-ai.png",
          "link": "research/ai-realestate.html",
          "labels": ["AI","BI"]
        }
      ]
    },
    {
      "title": "Framework de Expertos",
      "items": [
        {
          "title": "Richard Thaler",
          "description": "Pionero de la economía del comportamiento.",
          "image": "images/thaler.jpg",
          "link": "https://es.wikipedia.org/wiki/Richard_Thaler"
        },
        {
          "title": "Andrew Ng",
          "description": "Líder en educación de IA y cofundador de Coursera.",
          "image": "images/andrewng.jpg",
          "link": "https://www.coursera.org/instructor/andrewng"
        }
      ]
    },
    {
      "title": "Lifestyle & Proyectos Personales",
      "items": [
        {
          "title": "Aprendizaje de Alemán",
          "description": "Ejercicios de storytelling y práctica A1/A2.",
          "image": "images/german.png",
          "link": "https://github.com/dinatalediego/german-practice"
        },
        {
          "title": "Rap sobre Data Science",
          "description": "Canción didáctica para recordar pasos de modelado.",
          "image": "images/rap.png",
          "link": "https://github.com/dinatalediego/rap-datascience"
        }
      ]
    },
    {
      "title": "Educación y Certificaciones",
      "items": [
        {
          "title": "IBM Data Science Professional Certificate",
          "description": "Completado en Coursera (2025).",
          "image": "images/ibm.png",
          "link": "https://www.coursera.org/account/accomplishments/professional-cert/XYZ"
        },
        {
          "title": "Certificación Google Data Analytics",
          "description": "Completado en Coursera (2024).",
          "image": "images/google.png",
          "link": "https://www.coursera.org/account/accomplishments/verify/ABC"
        }
      ]
    },
    {
      "title": "Github Highlights",
      "items": [
        {
          "title": "Portfolio Dashboard",
          "description": "Este proyecto end-to-end en GitHub Pages.",
          "image": "images/portfolio.png",
          "link": "https://github.com/dinatalediego/portfolio-dashboard",
          "stars": 42
        },
        {
          "title": "Pricing Analytics",
          "description": "Script de análisis de precios históricos y forecasting.",
          "image": "images/pricing.png",
          "link": "https://github.com/dinatalediego/pricing-analytics",
          "stars": 58
        }
      ]
    },
    {
      "title": "Inspiración Visual & UI/UX",
      "items": [
        {
          "title": "Simons Dashboard",
          "description": "Dashboard cuantitativo inspirado en Simons.",
          "image": "images/simons.png",
          "link": "https://github.com/dinatalediego/simons-dashboard"
        },
        {
          "title": "Mockups MAX/Netflix",
          "description": "Prototipos de UI para portafolio streaming.",
          "image": "images/netflix-mockup.png",
          "link": "https://dribbble.com/shots/ABC123"
        }
      ]
    }
  ]
}