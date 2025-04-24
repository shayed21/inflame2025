import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/public/Inflame logo.png"
              alt="Inflame Tech Logo"
              className="h-10 w-auto"
              style={{ maxWidth: 160 }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/services" className="nav-link">Services</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
            <Link to="/blog" className="nav-link">Blog</Link>
            <Link to="/careers" className="nav-link">Career</Link>
            <Button asChild className="bg-primary hover:bg-primary/90">
              <a href="https://calendly.com/shayedashraf/get-start-with-inflame" target="_blank" rel="noopener noreferrer">
                Get Started
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pt-4 pb-6 space-y-4">
            <Link to="/" className="block nav-link py-2">Home</Link>
            <Link to="/about" className="block nav-link py-2">About</Link>
            <Link to="/services" className="block nav-link py-2">Services</Link>
            <Link to="/contact" className="block nav-link py-2">Contact</Link>
            <Link to="/blog" className="block nav-link py-2">Blog</Link>
            <Link to="/careers" className="block nav-link py-2">Career</Link>
            <Button asChild className="w-full bg-primary hover:bg-primary/90">
              <a href="https://calendly.com/shayedashraf/get-start-with-inflame" target="_blank" rel="noopener noreferrer">
                Get Started
              </a>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
