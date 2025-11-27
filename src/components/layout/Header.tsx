import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  // Check if we're on the home page
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    // Set initial state
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Our Services", path: "/services" },
    { name: "Our Specialists", path: "/specialists" },
    { name: "Blogs", path: "/blogs" },
    { name: "Location", path: "/location" },
    { name: "Contact Us", path: "/contact" },
  ];

  // Determine if navbar should be solid (not transparent)
  const isSolid = !isHomePage || isScrolled;

  return (
    <header 
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isSolid 
          ? 'bg-white shadow-md border-b' 
          : 'bg-transparent border-b border-transparent'
      }`}
      style={{
        boxShadow: isSolid ? '0 2px 10px rgba(0,0,0,0.08)' : 'none'
      }}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link to="/" className="flex items-center space-x-2">
          <div className="flex flex-col">
            <span className={`text-2xl font-bold font-heading transition-colors duration-300 ${
              isSolid ? 'text-primary' : 'text-white'
            }`}>Mother & Child</span>
            <span className={`text-sm transition-colors duration-300 ${
              isSolid ? 'text-muted-foreground' : 'text-white/80'
            }`}>Hospital</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-all duration-300 ${
                isSolid 
                  ? 'text-foreground/80 hover:text-primary' 
                  : 'text-white/90 hover:text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Button variant="coral" size="default" asChild>
            <Link to="/contact">Book Appointment</Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <Button variant="coral" size="sm" asChild>
            <a href="tel:+1234567890">
              <Phone className="h-4 w-4" />
            </a>
          </Button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`transition-colors duration-300 ${
              isSolid ? 'text-foreground' : 'text-white'
            }`}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden border-t bg-white">
          <nav className="container mx-auto flex flex-col space-y-4 px-4 py-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className="text-base font-medium text-foreground/80 hover:text-primary transition-smooth"
              >
                {link.name}
              </Link>
            ))}
            <Button variant="coral" className="w-full" asChild>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                Book Appointment
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
