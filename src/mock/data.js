import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'UX Designer and Researcher', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'UX Designer and Researcher',
  name: 'Erick Gavin',
  subtitle: 'Erick Gavin is a designer living in Miami who loves reading and Data Visualization.',
  cta: 'Check out my work',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'I am a user experience designer and researcher. I focus on utilizing both quantitative and qualitative data to assist in informing my design process while designing experiences for engagement that connects my audience with the product in a thoughtful manner.',
  paragraphTwo: 'I believe that to design great products we should be constantly listening to those we assist, iterate in a manner conscious with business requirements, and create interfaces that look great.',
  paragraphThree: ' ',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Have a cool project you would love to collaborate on?',
  btn: '',
  email: 'erickgavin7@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      //change to Instagram
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/gav07',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/egavin07/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/GAV07',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
