import { useState } from 'react';
import githubIcon from './assets/githubIcon.png';
import LinkedinLogo from './assets/LinkdinLogo.webp';
import Taskbar from './Taskbar';
import pedram from './assets/pedram.jpg';
import chris from './assets/chris.jpg';
import gaby from './assets/gaby.jpg';
import george from './assets/george.jpg';
import vasean from './assets/vasean.jpeg';

function About() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'Vasean Annin',
      image: `${vasean}`,
      github: 'https://github.com/VaseanAnnin',
      linkdin: 'https://www.linkedin.com/in/vannin/',
      content: `My name is Vasean Annin, and I'm one of the great developers in the GraphQL space. I played a key role in building CacheIQL, focusing primarily on cacheiql-client while also debugging both the client and server. I designed and developed the CacheIQL splash page, bringing the project to life visually. I'm always looking to collaborate—let’s build something amazing together!`,
    },
    {
      title: 'Gaby Davoupour',
      image: `${gaby}`,
      github: 'https://github.com/gabyd613',
      linkdin: 'https://www.linkedin.com/in/gabrielladavoudpour/',
      content: `Hey! I’m Gaby, one of the engineers of CacheIQL focused on the client side of caching and fetching. I’ve been working on different products focusing on areas such as React, GraphQL, as well as backend functionality including Node and Express! I’m always looking to expand on different topics, feel free to reach out with any questions/just to chat !`,
    },
    {
      title: 'George German',
      image: `${george}`,
      github: 'https://github.com/GeorgeGerman29',
      linkedin: 'https://www.linkedin.com/in/george-german/',
      content:
        'Hey, I am George! on this project I focused on the server side of optimizing caching and improving performance. I have experience with React, CSS, Javascript, postgresSQL, Express, MongoDB, GraphQL along with other key technologies, libraries, and tools and am always eager to learn more.',
    },
    {
      title: 'Pedram Kashani',
      image: `${pedram}`,
      github: '',
      linkdin: '',
      content:
        'full stack developer with a strong interest in solving real-world problems through technology. Skills in JavaScript, React, Node.js, and MongoDB, as well as other key technologies and concepts such as Express, Redux, SQL, HTML, CSS, and algorithms and data structures. Through hands-on projects and coursework,  i have gained a solid foundation in both front-end and back-end development. I am eager to connect with fellow students, mentors, and professionals, and I look forward to contributing to innovative projects and opportunities in the tech industry',
    },
    {
      title: 'Chris Matzen',
      image: `${chris}`,
      github: 'https://github.com/matzec42',
      linkdin: 'www.linkedin.com/in/matzec42',
      content:
        'Hello! My name is Chris and I am a part of the engineering team for CacheIQL. Along with my interests in caching and GraphQL, I am a full-stack developer with a passion for the Javascript ecosystem, particularly Node/Express, with skills and experience in React, Redux, SQL and MongoDB, HTML/CSS. I am always up for expanding my knowledge, learning new technologies, and making new connections with folks in tech.  Cheers!',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <>
      <Taskbar />

      <div className='AboutSection'>
        <div className='Header'>
          <h1 className='About'>About</h1>
          <p className='subtext'>Meet the team</p>
        </div>

        <div className='slide-container'>
          <h2>{slides[currentSlide].title}</h2>
          <img src={slides[currentSlide].image} className='profile' />
          <p>{slides[currentSlide].content}</p>
        </div>

        <div className='slide-navigation'>
          <button onClick={prevSlide}>Previous</button>
          <button onClick={nextSlide}>Next</button>
        </div>
        <div className='socialLinks'>
          <button className='Github'>
            <a href={slides[currentSlide].github}>
              <img src={githubIcon} />
            </a>
          </button>
          <button className='Linkdin'>
            <a href={slides[currentSlide].linkdin}>
              <img src={LinkedinLogo} />
            </a>
          </button>
        </div>
      </div>
    </>
  );
}

export default About;
