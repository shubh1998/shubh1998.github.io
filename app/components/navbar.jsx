// @flow strict
"use client";
import Link from "next/link";
import { useEffect, useState } from "react";


function Navbar() {
  const [activeSection, setActiveSection] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false); // Close menu after clicking
    }
  };

  useEffect(() => {
    const handleScrollEvent = () => {
      const sections = ['about', 'experience', 'skills', 'projects', 'education', 'contact'];
      const scrollPosition = window.scrollY + 100;

      // Update background based on scroll position
      setIsScrolled(window.scrollY > 50);

      // Check if we're at the very top (hero section)
      if (window.scrollY < 100) {
        setActiveSection(null);
        return;
      }

      // Find which section is currently in view
      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            return;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollEvent);
    handleScrollEvent(); // Call once on mount

    return () => window.removeEventListener('scroll', handleScrollEvent);
  }, []);

  return (
    <nav className={`sticky top-0 z-[100] transition-all duration-300 ${isScrolled ? 'bg-[#0d1224] shadow-lg backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="flex items-center justify-between py-5 px-4 md:px-0">
        <div className="flex flex-shrink-0 items-center">
          <Link
            href="/"
            className=" text-[#16f2b3] text-2xl md:text-3xl font-bold">
            SHUBHAM GUPTA
          </Link>
        </div>

        {/* Mobile menu button toggle svg*/}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white focus:outline-none z-[110]"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        <ul className={`
          fixed md:static top-0 left-0 w-full md:w-auto h-screen md:h-auto
          bg-[#0d1224] md:bg-transparent
          flex flex-col md:flex-row items-center justify-center md:justify-end
          gap-6 md:gap-0 md:space-x-1
          transition-transform duration-300 ease-in-out
          ${isMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
          z-[105] md:z-auto
        `} id="navbar-default">
          <li>
            <button 
              onClick={() => handleScroll('about')}
              className="block px-4 py-2 no-underline outline-none hover:no-underline cursor-pointer bg-transparent border-0">
              <div className={`font-bold text-base md:text-sm transition-colors duration-300 ${activeSection === 'about' ? 'text-pink-600' : 'text-white hover:text-pink-600'}`}>ABOUT</div>
            </button>
          </li>
          <li>
            <button 
              onClick={() => handleScroll('experience')}
              className="block px-4 py-2 no-underline outline-none hover:no-underline cursor-pointer bg-transparent border-0">
              <div className={`font-bold text-base md:text-sm transition-colors duration-300 ${activeSection === 'experience' ? 'text-pink-600' : 'text-white hover:text-pink-600'}`}>EXPERIENCE</div>
            </button>
          </li>
          <li>
            <button 
              onClick={() => handleScroll('skills')}
              className="block px-4 py-2 no-underline outline-none hover:no-underline cursor-pointer bg-transparent border-0">
              <div className={`font-bold text-base md:text-sm transition-colors duration-300 ${activeSection === 'skills' ? 'text-pink-600' : 'text-white hover:text-pink-600'}`}>SKILLS</div>
            </button>
          </li>
          <li>
            <button 
              onClick={() => handleScroll('projects')}
              className="block px-4 py-2 no-underline outline-none hover:no-underline cursor-pointer bg-transparent border-0">
              <div className={`font-bold text-base md:text-sm transition-colors duration-300 ${activeSection === 'projects' ? 'text-pink-600' : 'text-white hover:text-pink-600'}`}>PROJECTS</div>
            </button>
          </li>
          <li>
            <button 
              onClick={() => handleScroll('education')}
              className="block px-4 py-2 no-underline outline-none hover:no-underline cursor-pointer bg-transparent border-0">
              <div className={`font-bold text-base md:text-sm transition-colors duration-300 ${activeSection === 'education' ? 'text-pink-600' : 'text-white hover:text-pink-600'}`}>EDUCATION</div>
            </button>
          </li>
          <li>
            <button 
              onClick={() => handleScroll('contact')}
              className="block px-4 py-2 no-underline outline-none hover:no-underline cursor-pointer bg-transparent border-0">
              <div className={`font-bold text-base md:text-sm transition-colors duration-300 ${activeSection === 'contact' ? 'text-pink-600' : 'text-white hover:text-pink-600'}`}>CONTACT TO HIRE</div>
            </button>
          </li>
          {/* <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/blog">
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">BLOGS</div>
            </Link>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;