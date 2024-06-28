import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import Home from './pages/Home';
import About from './pages/About';
import Board from './pages/Board';
import Mission from './pages/Mission';
import Doctors from './pages/Doctors';
import Departments from './pages/Departments';
import Blog from './pages/Blog';
import BlogContents from './pages/BlogContents'; // Yeni eklenen bileşen
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import './App.css';
import logo from './logo.png';
import instagramLogo from './instagram-logo.png';
import 'leaflet/dist/leaflet.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const NavLinks = () => (
    <>
      <li><Link to="/" onClick={closeMenu} className="nav-button">Anasayfa</Link></li>
      <li><Link to="/about" onClick={closeMenu} className="nav-button">Hakkımızda</Link></li>
      <li><Link to="/board" onClick={closeMenu} className="nav-button">Yönetim Kurulu</Link></li>
      <li><Link to="/mission" onClick={closeMenu} className="nav-button">Misyon & Vizyon</Link></li>
      <li><Link to="/doctors" onClick={closeMenu} className="nav-button">Hekimlerimiz</Link></li>
      <li><Link to="/departments" onClick={closeMenu} className="nav-button">Tıbbi Birimler</Link></li>
      <li><Link to="/blog" onClick={closeMenu} className="nav-button">Blog</Link></li>
      <li><Link to="/gallery" onClick={closeMenu} className="nav-button">Galeri</Link></li>
      <li><Link to="/contact" onClick={closeMenu} className="nav-button">İletişim</Link></li>
    </>
  );

  return (
    <Router>
      <div>
        <nav>
          <div className="nav-container">
            <div className="logo">
              <Link to="/">
                <img src={logo} alt="Logo" />
              </Link>
              <span className="logo-text">Ekvator Sağlık Merkezi</span>
            </div>
            <div className="menu-icon" onClick={toggleMenu}>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
            {!isMobile && (
              <ul className="nav-links">
                <NavLinks />
              </ul>
            )}
          </div>
          {isMobile && menuOpen && (
            <ul className="mobile-nav-links" ref={menuRef}>
              <NavLinks />
            </ul>
          )}
        </nav>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/board" element={<Board />} />
            <Route path="/mission" element={<Mission />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/departments" element={<Departments />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogContents />} /> {/* Blog içeriği için yönlendirme */}
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <footer>
          <div className="footer-content">
            <div className="footer-left">
              <p>Tüm Hakları Saklıdır | All rights reserved. &copy; 2024 Ekvator Sağlık Merkezi</p>
            </div>
            <div className="footer-right">
              <p>+90 532 400 33 69</p>
              <a href="mailto:ekvatorsaglikmerkezi@gmail.com">ekvatorsaglikmerkezi@gmail.com</a>
              <a href="https://www.instagram.com/ekvatorsaglikmerkezi" target="_blank" rel="noopener noreferrer">
                <img src={instagramLogo} alt="Instagram Logo" className="instagram-logo" />
                <span>@ekvatorsaglikmerkezi</span>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
