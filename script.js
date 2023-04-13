const ham = document.getElementById('ham-menu');
const menu = document.getElementById('menu');
const cardSection = document.getElementById('portfolio');
function clickMenu() {
  ham.style.display = 'block';
  menu.style.display = 'none';
}
function clickX() {
  ham.style.display = 'none';
  menu.style.display = 'block';
}


const projects = [
  {
    id: 'project1',
    title: 'Tonic',
    company: 'CANOPY',
    specialization: 'Back End Dev',
    year: 2015,
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technologies: {
      tech1: 'html',
      tech2: 'css',
      tech3: 'javaScript',
    },
    image: './Properties/pic_1.png',
    live: '#',
    source: '#',
  },

  {
    id: 'project2',
    title: 'Multi-Post Stories',
    company: 'FACEBOOK',
    specialization: 'Full Stack Dev',
    year: 2015,
    description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    technologies: {
      tech1: 'html',
      tech2: 'css',
      tech3: 'javaScript',
    },
    image: './Properties/pic_2.png',
    live: '#',
    source: '#',
  },

  {
    id: 'project3',
    title: 'Facebook 360',
    company: 'FACEBOOK',
    specialization: 'Full Stack Dev',
    year: 2015,

    description: "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    technologies: {
      tech1: 'html',
      tech2: 'css',
      tech3: 'javaScript',
    },
    image: './Properties/pic_3.png',
    live: '#',
    source: '#',
  },

  {
    id: 'project4',
    title: 'Uber Navigation',
    company: 'Uber',
    specialization: 'Lead Developer',
    year: 2018,

    description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    technologies: {
      tech1: 'html',
      tech2: 'css',
      tech3: 'javaScript',
    },
    image: './Properties/pic_4.png',
    live: '#',
    source: '#',
  },
];

// let count = 1;
projects.forEach((project) => {
 const newDiv = document.createElement('div');
  newDiv.innerHTML = `
    <div class="card_1">
    <div class="card-image">
    <img src="${project.image}" alt="image">
    </div>
    <div class="port-cards">
    <h3 class="tonic-1">${project.title}</h3>
    <ul class="page flex-row">
      <li class="title_1">${project.company}</li>
      <li><img src="./Properties/Counter.svg" alt="Dot icon" ></li>
      <li>${project.specialization}</li>
      <li><img src="./Properties/Counter.svg" alt="Dot icon" ></li>
      <li>${project.year}</li>
    </ul>
    <p class="Text">
    ${project.description}
    </p>
    <ul class="other-tags flex-row">
        <li class="box"><span>${project.technologies.tech1}</span></li>
        <li class="box"><span>${project.technologies.tech2}</span></li>
        <li class="box"><span>${project.technologies.tech3}</span></li>
    </ul>
    <button type="button" id="${project.id}" class="flex-row see">See Project</button>
    </div>
    
    </div>`;
    cardSection.append(newDiv);
});

// const image = document.querySelectorAll('.image');
// image.forEach((im) => {
//   if (count % 2 === 0) {
//     im.classList.add('two');
//   }
//   count += 1;
// });

const seeproject = document.querySelectorAll('.see');
const overlay = document.getElementById('overlay1');
const popup = document.querySelector('.popup');
const over = document.querySelector('.over');
seeproject.forEach((p) => p.addEventListener('click', (p) => {
  const { id } = p.target;
  const pop = projects.find((p) => p.id === id);  
  popup.innerHTML = `
  <div class="titles">
    <div class="tile">
      <h2 class="title">${pop.title}</h2>
      <button class="close">&times;</button>
    </div>
    <ul class="social-icons fav">
      <li class="cano">${pop.company}</li>
      <li class="dev"><img src="./images/Counter.png" alt="dot">&nbsp; ${pop.specialization}</li>
      <li class="dev"><img src="./images/Counter.png" alt="dot">&nbsp; ${pop.year}</li>
    </ul>
    </div>
    <img src="${pop.image}" alt="live" class="beryl tonic-text2">
    <div class="explain">
      <p class="tonic-text2">
        ${pop.description}
      </p>
      <div class="smart">
          <ul class="tech social-icons">
            <li class="techitems">${pop.technologies.tech1}</li>
            <li class="techitems">${pop.technologies.tech2}</li>
            <li class="techitems">${pop.technologies.tech3}</li>
          </ul>
          <div class="btns">
            <button type="button" id="live" class="but">See live &nbsp; &nbsp;
              <img src="./images/live.png" alt="live">
            </button>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
            <button type="button" id="source" class="but">See source &nbsp; &nbsp;
              <img src="./images/github.svg" alt="source">
            </button>
          </div>
      </div>
  </div>  `;

  const live = document.getElementById('live');
  const source = document.getElementById('source');

  live.addEventListener('click', () => {
    document.location.href = pop.live;
  });

  source.addEventListener('click', () => {
    document.location.href = pop.source;
  });

  overlay.classList.toggle('active');
  popup.classList.toggle('active');
  over.classList.toggle('active');

  const close = document.querySelector('.close');

  close.addEventListener('click', () => {
    popup.classList.remove('active');
    over.classList.remove('active');
    overlay.classList.remove('active');
  });
}));
