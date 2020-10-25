import { nanoid } from 'nanoid';

export const colors = {
  primary: '#F7F4F3',
  secondary: '#A5C4D4',
  purple: '#7B6D8D',
  blue: '#8499B1',
  red: '#FF5D73',
  black: '#191E27'
}

// HEAD DATA
export const headData = {
  title: 'Erick Gavin', 
  lang: '', // e.g: en, es, fr, jp
  description: '', 
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
  img: 'Gavin_close.jpg',
  paragraphOne: 'I am a user experience designer and researcher. I focus on utilizing both quantitative and qualitative data to assist in informing my design process while designing experiences for engagement that connects my audience with the product in a thoughtful manner.',
  paragraphTwo: 'I believe that to design great products we should be constantly listening to those we assist, iterate in a manner conscious with business requirements, and create interfaces that look great.',
  paragraphThree: ' ',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'SAVR_Hero_v1.jpg',
    title: 'SAVR',
    info: 'AR platform for physical spaces.',
    info2: '',
    url: '',
    color: colors.blue,
    repo: '', 
  },
  {
    id: nanoid(),
    img: 'Sleep_lower.png',
    title: 'Sleep Please',
    info: '',
    info2: '',
    url: '',
    color: colors.red,
    repo: '', 
  },
  {
    id: nanoid(),
    img: 'Dream_Logo.png',
    title: 'Dream Impact',
    info: '',
    info2: '',
    url: '',
    color: colors.black,
    repo: '', 
  },
  {
    id: nanoid(),
    img: 'Lavu_Dash.png',
    title: 'Lavu',
    info: '',
    info2: '',
    url: '',
    color: colors.purple,
    repo: '', 
  },
  {
    id: nanoid(),
    img: 'Dubois.png',
    title: 'Dubois Visualizations',
    info: '',
    info2: '',
    url: '',
    color: colors.secondary,
    repo: '', 
  },
  {
    id: nanoid(),
    img: 'Portfolio.png',
    title: 'Portfolio Site',
    info: '',
    info2: '',
    url: '',
    color: colors.blue,
    repo: '', 
  }
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
      name: 'instagram',
      url: 'https://www.instagram.com/regalgavin/',
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
