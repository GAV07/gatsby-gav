import { nanoid } from 'nanoid';

export const colors = {
  primary: '#F7F4F3',
  secondary: '#A5C4D4',
  purple: '#7B6D8D',
  blue: '#8499B1',
  red: '#FF5D73',
  black: '#191E27',
};

// HEAD DATA
export const headData = {
  title: 'Erick Gavin',
  lang: '', // e.g: en, es, fr, jp
  description: '',
};

// HERO DATA
export const heroData = {
  title: 
    'Does the Black Community move closer to this ideal of Black Prosperity through increased participation in the innovation economy',
  name: 'Erick Gavin',
  question: 'Currently keeping me up at night',
  subtitle: 'Erick Gavin',
  cta: 'Check out my work',
};

// ABOUT DATA
export const aboutData = {
  img: 'Gavin_close.jpg',
  paragraphOne:
    'I am a user experience designer and researcher. I focus on utilizing both quantitative and qualitative data to assist in informing my design process while designing experiences for engagement that connects my audience with the product in a thoughtful manner.',
  paragraphTwo:
    'I believe that to design great products we should be constantly listening to those we assist, iterate in a manner conscious with business requirements, and create interfaces that look great.',
  paragraphThree: ' ',
  resume: '', // if no resume, the button will not show up
};

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
      // change to Instagram
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
