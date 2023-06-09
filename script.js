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
const form = document.querySelector('form');
const msg = document.querySelector('textarea[name="user_message"]');
const error = document.getElementById('error');
const name = document.querySelector('input[name="user_name"]');
const email = document.querySelector('input[name="email"]');

form.addEventListener('submit', (event) => {
  const errormsg = [];
  if (name.value.trim() === '') {
    errormsg.push('Name field is required');
  } else if (email.value.trim() === '') {
    errormsg.push('Email field is required');
  } else if (msg.value.trim() === '') {
    errormsg.push('Message field is required');
  } else if (email.value !== email.value.toLowerCase()) {
    errormsg.push('\u00A0\u00A0Email must be in lowercase\u00A0\u00A0');
  }
  if (errormsg.length > 0) {
    event.preventDefault();
    error.textContent = errormsg.join('. ');
  } else {
    error.textContent = '';
  }
});

const projects = [
  {
    id: 'Project1',
    title: 'Tonic',
    title1: 'Tonic',
    company: 'CANOPY',
    company1: 'CANOPY',
    icon: './Properties/Counter.svg',
    specialization: 'Back End Dev',
    specialization1: 'Back End Dev',
    year: '2015',
    description: 'A daily selection of privately <br class="must-ignor">personalized reads;no accounts or <br class="must-ignor">sign-ups required.',
    description1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    technologies: {
      tech1: 'html',
      techE: 'Ruby on rails',
      tech2: 'css',
      tech3: 'javaScript',
    },
    imageMobile: './Properties/Work 1.svg',
    imageDesktop: './Properties/pic_1.png',
    live: '#',
    source: '#',
  },
  {
    id: 'Project2',
    title: 'Multi-Post<br>Stories',
    title1: 'Multi-Post',
    company: 'CANOPY',
    company1: 'FACEBOOK',
    icon: './Properties/Counter.svg',
    specialization: 'Back End Dev',
    specialization1: 'Full Stack Dev',
    year: '2015',
    description: 'Experimental content creation feature that allows users to add to an existing story<br />over the course of a day without spamming theirfriends.',
    description1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    technologies: {
      tech1: 'html',
      techE: 'Ruby on rails',
      tech2: 'css',
      tech3: 'javaScript',
    },
    imageMobile: './Properties/Work 2.svg',
    imageDesktop: './Properties/pic_2.png',
    live: '#',
    source: '#',
  },
  {
    id: 'Project3',
    title: 'Tonic',
    title1: 'Facebook 360',
    company: 'CANOPY',
    company1: 'FACEBOOK 360',
    icon: './Properties/Counter.svg',
    specialization: 'Back End Dev',
    specialization1: 'Full Stack Dev',
    year: '2015',
    description: 'Exploring the future of media in Facebooks first Virtual Realityapp; a place to discover and enjoy 360 photos and videos on Gear VR.',
    description1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    technologies: {
      tech1: 'html',
      techE: 'Ruby on rails',
      tech2: 'css',
      tech3: 'javaScript',
    },
    imageMobile: './Properties/Work 3.svg',
    imageDesktop: './Properties/pic_3.png',
    live: '#',
    source: '#',
  },
  {
    id: 'Project4',
    title: 'Multi-Post<br>Stories',
    title1: 'Uber Navigation',
    company: 'CANOPY',
    company1: 'Uber',
    icon: './Properties/Counter.svg',
    specialization: 'Back End Dev',
    specialization1: 'Lead Developer',
    year: '2018',
    description: 'A daily selection of privately <br class="must-ignor">personalized reads;no accounts or <br class="must-ignor">sign-ups required.',
    description1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    technologies: {
      tech1: 'html',
      techE: 'Ruby on rails',
      tech2: 'css',
      tech3: 'javaScript',
    },
    imageMobile: './Properties/Work 4.svg',
    imageDesktop: './Properties/pic_4.png',
    live: '#',
    source: '#',
  },
];

let count = 1;
projects.forEach((project) => {
  const newDiv = document.createElement('div');
  newDiv.innerHTML = `
    <div class="card_${count}">
    <div class="card-image">
    <img class="work" src="${project.imageMobile}" alt="image">
    <img class="pic card-image"src="${project.imageDesktop}" alt="image">
    </div>
    <div class="Card_text flex-column">
    <h3 class="tonic-1 ignore-mbl">${project.title}</h3>
    <h3 class="tonic-1 ignore-desk">${project.title1}</h3>
    <ul class="page flex-row">
      <li class="title_1 ignore-mbl">${project.company}</li>
      <li class="title_1 ignore-desk">${project.company1}</li>
      <li><img src="${project.icon}" alt="Dot icon" ></li>
      <li class="ignore-mbl">${project.specialization}</li>
      <li class="ignore-desk">${project.specialization1}</li>
      <li><img src="${project.icon}" alt="Dot icon" ></li>
      <li>${project.year}</li>
    </ul>
    <p class="Text">
    ${project.description}
    </p>
    <ul class="other-tags flex-row primarytext33">
        <li class="box"><span>${project.technologies.tech1}</span></li>
        <li class="box_desk "><span>${project.technologies.techE}</span></li>
        <li class="box"><span>${project.technologies.tech2}</span></li>
        <li class="box"><span>${project.technologies.tech3}</span></li>
    </ul>
    <button type="button" id="${project.id}" class="flex-row see">See Project</button>
    </div>
    
    </div>`;
  if (count === 2) {
    count -= 1;
  } else {
    count += 1;
  }
  cardSection.append(newDiv);
});

const seeproject = document.querySelectorAll('.see');
const overlay = document.getElementById('overlay1');
const popup = document.querySelector('.popup');
const over = document.querySelector('.over');
seeproject.forEach((p) => p.addEventListener('click', (p) => {
  const { id } = p.target;
  const pop = projects.find((p) => p.id === id);
  popup.innerHTML = `
  <div class="titles">
    <div class="flex-row" style="justify-content:space-between;">
      <h2 class="tonic-1 ignore-mbl" style="padding-left:6%">${pop.title}</h2>
      <h2 class="tonic-1 tonic-12  ignore-desk">${pop.title1}</h2>
      <button class="close close12" style="border-color:white;">&times;</button>
    </div>
    <div class="Card_text flex-column">
    <ul class="page page12 flex-row" style="padding-left:7%">
      <li class="title_1 ignore-mbl">${pop.company}</li>
      <li class="title_1  ignore-desk">${pop.company1}</li>
      <li><img src="${pop.icon}" alt="Dot icon" ></li>
      <li class="ignore-mbl">${pop.specialization}</li>
      <li class="ignore-desk">${pop.specialization1}</li>
      <li><img src="${pop.icon}" alt="Dot icon" ></li>
      <li>${pop.year}</li>
    </ul>
    </div>
    <img src="${pop.imageMobile}" alt="live" class="work" style="padding-left:6%; margin-top:0%">
    <img src="${pop.imageDesktop}" alt="live" class="pic"  style="width:1256px; height:440px; margin: 20px;">
    <div class="explain">
      <p class="tonic-text2">
        ${pop.description1}
        <br class="ignore-desk">
        <br class="ignore-desk">
        <span class="ignore-desk">${pop.description1}</span>
      </p>
      <div class="smart">
          <ul class="other-tag flex-row" style="padding-left:6%">
            <li class="box">${pop.technologies.tech1}</li>
            <li class="box_desk ignore-mbl">${pop.technologies.techE}</li>
            <li class="box">${pop.technologies.tech2}</li>
            <li class="box">${pop.technologies.tech3}</li>
          </ul>
          <ul class="other-tag flex-row" style="padding-left:6%">
            <li class="box ignore-desk">Ruby</li>
            <li class="box ignore-desk">Bootstrap</li>
          </ul>
          <div class="btns">
            <button type="button" id="live" class="but">See live &nbsp;
              <img src="./Properties/source.svg" alt="live" class = "live">
            </button>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
            <button type="button" id="source" class="but">See source &nbsp;
              <img src="./Properties/github.png" alt="source">
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