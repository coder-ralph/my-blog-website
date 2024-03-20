import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className='footer-social'>
        <a href='https://www.facebook.com/ralph.rosael/' target='_blank' rel='noopener noreferrer'>
          <i className='fab fa-facebook-f'></i>
        </a>
        <a href='https://www.youtube.com/@ralphrosael/' target='_blank' rel='noopener noreferrer'>
          <i className='fab fa-youtube'></i>
        </a>
        <a href='https://www.linkedin.com/in/ralphrosael/' target='_blank' rel='noopener noreferrer'>
          <i className='fab fa-linkedin'></i>
        </a>
        <a href='https://www.instagram.com/coderralph/' target='_blank' rel='noopener noreferrer'>
          <i className='fab fa-instagram'></i>
        </a>
        <a href='https://github.com/coder-ralph' target='_blank' rel='noopener noreferrer'>
          <i className='fab fa-github'></i>
        </a>
      </div>

      <div className="footer-text">
        <span className='copyright'>Copyright © 2024 All Rights Reserved.</span>
        <br />
        <a
          href='https://github.com/coder-ralph'
          className='author'
          target='_blank'
          rel='noopener noreferrer'
        >
          Made with 💙 Ralph Rosael.
        </a>
      </div>

      <Link to="/" className="portfolio">
        My Portfolio
      </Link>
    </footer>
  );
};

export default Footer;
