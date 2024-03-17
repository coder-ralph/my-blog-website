import React, { useEffect, useState } from 'react';
import programmerImage from '../images/programmer.gif';

const About = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`about-me ${scrolling ? 'scrolling' : ''}`}>
      <h1 className="about-title">About Me</h1>

      <div className="about-image">
        <img src={programmerImage} alt="Top Section" title="Programmer GIF" />
      </div>

      <h2>Greetings, I'm Eli Ralph Rosael,</h2>
      <p>
        a graduating student on the verge of earning myBachelor of Science in Information Systems – been a wild ride! I live in Tibiao, Antique, 
        and I come from a family of four. When I'm not buried in academics, I'm into basketball, badminton, and doodling away. For most of myfree 
        time, I indulge myself in mobile games such as Clash of Clans, Valorant, and Mobile Legends. They are my go-to stress busters, they keep 
        me sane and connect with friends in the virtual space. Now, let's talk coding– I'm all about that programming life. I’m a self-taught developer 
        and I’m quite passionate about honing my skills in programming so I’m always digging into online resources to up mygame.Onething I’ve realized 
        these days, I’m forever learning especially in this field.
      </p>
    </div>
  );
}

export default About;
