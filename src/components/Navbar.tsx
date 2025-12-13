import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Disable body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'nav-blur py-3' : 'py-4 md:py-5 bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
          <a
            href="#"
            className="text-lg sm:text-xl font-bold gradient-text z-[60]"
          >
            Sumit.
          </a>

          {/* Hamburger Menu Button - visible on all screens */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative z-[60] p-3 -mr-3 text-foreground hover:text-primary transition-colors duration-300 touch-manipulation"
            aria-label="Toggle menu"
            type="button"
          >
            <div className="relative w-6 h-5 flex flex-col justify-between">
              <span 
                className={`block h-0.5 w-full bg-current transition-all duration-300 origin-center ${
                  isMenuOpen ? 'rotate-45 translate-y-[9px]' : ''
                }`}
              />
              <span 
                className={`block h-0.5 w-full bg-current transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0 scale-0' : ''
                }`}
              />
              <span 
                className={`block h-0.5 w-full bg-current transition-all duration-300 origin-center ${
                  isMenuOpen ? '-rotate-45 -translate-y-[9px]' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Fullscreen Navigation Overlay */}
      <div
        className={`fixed inset-0 z-[55] transition-all duration-500 ${
          isMenuOpen 
            ? 'opacity-100 visible' 
            : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        {/* Glassmorphism background */}
        <div className="absolute inset-0 bg-background/80 backdrop-blur-xl" />
        
        {/* Navigation content */}
        <div className={`relative h-full flex flex-col items-center justify-center transition-all duration-500 ${
          isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'
        }`}>
          <ul className="flex flex-col items-center gap-6 sm:gap-8">
            {navLinks.map((link, index) => (
              <li 
                key={link.name}
                className="overflow-hidden"
                style={{ 
                  transitionDelay: isMenuOpen ? `${index * 75}ms` : '0ms'
                }}
              >
                <a
                  href={link.href}
                  onClick={handleLinkClick}
                  className={`block text-2xl sm:text-3xl md:text-5xl font-bold text-foreground hover:text-primary transition-all duration-300 hover:tracking-wider ${
                    isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                  }`}
                  style={{ 
                    transitionDelay: isMenuOpen ? `${index * 75 + 100}ms` : '0ms'
                  }}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          
          {/* Decorative elements */}
          <div className="absolute bottom-12 text-muted-foreground text-sm">
            Frontend Developer • Web Enthusiast
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
