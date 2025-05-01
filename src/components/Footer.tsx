
import { Facebook, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">

          <Link to="/" className="flex items-center space-x-2">
            <img
              src="https://github.com/shayed21/inflame2025/blob/main/public/Inflame%20logo.png?raw=tru"
              alt="Inflame Tech Logo"
              className="h-10 w-auto"
              style={{ maxWidth: 160 }}
            />
          </Link>

            <p className="text-muted-foreground">
              Innovating Tomorrow with Smart Software Solutions
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="nav-link">Home</Link></li>
              <li><Link to="/about" className="nav-link">About</Link></li>
              <li><Link to="/services" className="nav-link">Services</Link></li>
              <li><Link to="/contact" className="nav-link">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/services" className="nav-link">Software Development</Link></li>
              <li><Link to="/services" className="nav-link">Mobile Apps</Link></li>
              <li><Link to="/services" className="nav-link">SEO</Link></li>
              <li><Link to="/services" className="nav-link">Web Development</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <address className="not-italic text-muted-foreground">
              <p>Dhaka, Bangladesh</p>
              <p>Email: contact@inflame-tech.com </p>
              <p>Phone: +880-1755883771 </p>
            </address>
            <div className="flex space-x-4 mt-4">
              <a href="https://www.facebook.com/inflametechltd"
               className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/inflametechltd/"
               className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://www.linkedin.com/company/89516499/admin/dashboard/" 
              className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Inflame Tech Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
