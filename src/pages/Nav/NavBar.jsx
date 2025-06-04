// import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom';
// import '../home/home.css';

// const NavBar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 10);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

  
//   return (
// <nav className={`navbar ${scrolled ? 'scrolled' : 'transparent'}`}>
//       <div className="nav-container">
//         <div className="nav-content">
  
//           <Link to="/" className="logo">
//             YourLogo
//           </Link>
//           <div className="desktop-menu">
//             <Link to="/" className="nav-link">
//               Home
//             </Link>
//             <Link to="/about" className="nav-link">
//               About
//             </Link>
//             <Link to="/services" className="nav-link">
//               Services
//             </Link>
//             <Link to="/contact" className="nav-link">
//               Contact
//             </Link>
//             <button className="cta-button">Get Started</button>
//           </div>

       
//           <button
//             className="mobile-menu-button"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             {isOpen ? (
//               <svg
//                 className="w-6 h-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             ) : (
//               <svg
//                 className="w-6 h-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M4 6h16M4 12h16M4 18h16"
//                 />
//               </svg>
//             )}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
//         <Link
//           to="/"
//           className="mobile-nav-link"
//           onClick={() => setIsOpen(false)}
//         >
//           Home
//         </Link>
//         <Link
//           to="/about"
//           className="mobile-nav-link"
//           onClick={() => setIsOpen(false)}
//         >
//           About
//         </Link>
//         <Link
//           to="/services"
//           className="mobile-nav-link"
//           onClick={() => setIsOpen(false)}
//         >
//           Services
//         </Link>
//         <Link
//           to="/contact"
//           className="mobile-nav-link"
//           onClick={() => setIsOpen(false)}
//         >
//           Contact
//         </Link>
//         <button className="mobile-cta-button">Get Started</button>
//       </div>
//     </nav>
//   )
// }

// export default NavBar



import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX, FiArrowRight } from 'react-icons/fi';
import '../home/home.css';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : 'transparent'}`}>
      <div className="nav-container">
        <div className="nav-content">
          <Link to="/" className="logo">
            <span style={{ color: '#1D4ED8' }}>Corporate</span>Solutions
          </Link>

          {/* <div className="desktop-menu">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/about" className="nav-link">
              About
            </Link>
            <Link to="/services" className="nav-link">
              Services
            </Link>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
            <button className="cta-button">
              Get Started <FiArrowRight style={{ marginLeft: '4px' }} />
            </button>
          </div> */}
<div className="desktop-menu" style={{
  display: 'flex',
  alignItems: 'center',
  gap: '2rem',
  fontFamily: 'Inter, -apple-system, sans-serif' // Ensures font consistency
}}>
  <Link 
    to="/" 
    className="nav-link"
    style={{
      fontSize: '1rem',
      fontWeight: '500',
      color: '#1a1a1a',
      textDecoration: 'none',
      transition: 'color 0.2s ease',
      ':hover': {
        color: '#4f46e5'
      }
    }}
  >
    Home
  </Link>
  <Link 
    to="/about" 
    className="nav-link"
    style={{
      fontSize: '1rem',
      fontWeight: '500',
      color: '#1a1a1a',
      textDecoration: 'none',
      transition: 'color 0.2s ease',
      ':hover': {
        color: '#4f46e5'
      }
    }}
  >
    About
  </Link>
  <Link 
    to="/services" 
    className="nav-link"
    style={{
      fontSize: '1rem',
      fontWeight: '500',
      color: '#1a1a1a',
      textDecoration: 'none',
      transition: 'color 0.2s ease',
      ':hover': {
        color: '#4f46e5'
      }
    }}
  >
    Services
  </Link>
  <Link 
    to="/contact" 
    className="nav-link"
    style={{
      fontSize: '1rem',
      fontWeight: '500',
      color: '#1a1a1a',
      textDecoration: 'none',
      transition: 'color 0.2s ease',
      ':hover': {
        color: '#4f46e5'
      }
    }}
  >
    Contact
  </Link>
  <button 
    className="cta-button"
    style={{
      fontSize: '1rem',
      fontWeight: '500',
      fontFamily: 'inherit', // Inherits from parent
      padding: '0.5rem 1.25rem',
      backgroundColor: '#4f46e5',
      color: 'white',
      border: 'none',
      borderRadius: '0.375rem',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      display: 'flex',
      alignItems: 'center',
      ':hover': {
        backgroundColor: '#4338ca',
        transform: 'translateY(-1px)'
      }
    }}
  >
    Get Started <FiArrowRight style={{ marginLeft: '4px', fontSize: '1rem' }} />
  </button>
</div>
          <button
            className="mobile-menu-button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <Link to="/" className="mobile-nav-link" onClick={() => setIsOpen(false)}>
          Home
        </Link>
        <Link to="/about" className="mobile-nav-link" onClick={() => setIsOpen(false)}>
          About
        </Link>
        <Link to="/services" className="mobile-nav-link" onClick={() => setIsOpen(false)}>
          Services
        </Link>
        <Link to="/contact" className="mobile-nav-link" onClick={() => setIsOpen(false)}>
          Contact
        </Link>
        <button className="mobile-cta-button">
          Get Started <FiArrowRight style={{ marginLeft: '4px' }} />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;