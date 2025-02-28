import { useState } from 'react';
import Taskbar from './Taskbar';

function About() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'Vasean Annin',
      content:
        "Welcome to the About section. Here's where we introduce ourselves.",
    },
    {
      title: 'Gaby Davoupour',
      content: 'We are a dedicated team working on exciting projects.',
    },
    {
      title: 'George German',
      content: "Let's dive into what we are building together!",
    },
    {
      title: 'Pedram Kashani',
      content: "Let's dive into what we are building together!",
    },
    {
      title: 'Chris Matzen',
      content: "Let's dive into what we are building together!",
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
      <div className='Header'>
        <h1 className='About'>About</h1>
        <p className='aboutSubtext'>Meet the team</p>
      </div>

      <div className='slide-container'>
        <h2>{slides[currentSlide].title}</h2>
        <p>{slides[currentSlide].content}</p>
      </div>

      <div className='slide-navigation'>
        <button onClick={prevSlide}>Previous</button>
        <button onClick={nextSlide}>Next</button>
      </div>
    </>
  );
}

export default About;
