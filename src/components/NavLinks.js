import React, { useEffect, useState, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Search from './Search';
import '../index.css';

const NavLinks = ({ categories }) => {
  const { pathname } = useLocation();
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [setActiveMenuItem] = useState('');
  const submenuRef = useRef(null);

  useEffect(() => {
    if (pathname === '/' || pathname === '/about') {
      const sectionId = pathname === '/' ? 'home' : 'about';
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (submenuRef.current && !submenuRef.current.contains(event.target)) {
        setSubmenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const toggleSubmenu = () => {
    setSubmenuOpen(!submenuOpen);
  };

  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);
    closeSubmenu();
  };

  const closeSubmenu = () => {
    setSubmenuOpen(false);
  };

  return (
    <ul className='menu-lists'>
      <label htmlFor='menu-btn' className='fa-solid fa-xmark' />
      {/* className='fa-solid fa-xmark */}

      <NavLink exact to='/' activeClassName='active' onClick={() => handleMenuItemClick('home')}>
        <li>Home</li>
      </NavLink>

      <li className={`submenu-item ${submenuOpen ? 'open' : ''}`} ref={submenuRef}>
        <div className='submenu-toggle' onClick={toggleSubmenu}>
          <span>Category</span>
          <i className={`fa-solid fa-chevron-${submenuOpen ? 'up' : 'down'}`} />
        </div>
        <ul className={`submenu ${submenuOpen ? 'open' : ''}`}>
          {categories?.map(category => (
            <li key={category.slug}>
              <NavLink
                to={`/posts/${category.slug}`}
                activeClassName='active'
                onClick={() => handleMenuItemClick(category.name)}
              >
                {category.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </li>

      <NavLink to='/about' activeClassName='active' onClick={() => handleMenuItemClick('about')}>
        <li>About Me</li>
      </NavLink>
      
      <NavLink to='/contact' activeClassName='active' onClick={() => handleMenuItemClick('contact')}>
        <li>Contact</li>
      </NavLink>

      <li>
        <Search />
      </li>
    </ul>
  );
};

export default NavLinks;
