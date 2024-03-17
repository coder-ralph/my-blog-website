import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className='footer-social'>
        <a href='/' target='_blank' rel='noopener noreferrer'>
          <i className='fab fa-facebook-f'></i>
        </a>
        <a href='https://www.youtube.com/' target='_blank' rel='noopener noreferrer'>
          <i className='fab fa-youtube'></i>
        </a>
        <a href='https://twitter.com/' target='_blank' rel='noopener noreferrer'>
          <i className='fab fa-twitter'></i>
        </a>
        <a href='https://www.instagram.com/' target='_blank' rel='noopener noreferrer'>
          <i className='fab fa-instagram'></i>
        </a>
        <a href='https://github.com/coder-ralph' target='_blank' rel='noopener noreferrer'>
          <i className='fab fa-github'></i>
        </a>
      </div>

      <div className="footer-text">
        <span className='copyright'>Copyright © 2023</span>
        <span> | </span>
        <span>All Rights Reserved.</span>
        <br />
        <a
          href='https://github.com/coder-ralph'
          className='author'
          target='_blank'
          rel='noopener noreferrer'
        >
          Made with ❤️ Ralph Rosael
        </a>
      </div>

      <Link to="/portfolio" className="the-team-link">
        My Portfolio
      </Link>
    </footer>
  );
};

export default Footer;
