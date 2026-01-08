import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-ghetto-charcoal text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & About */}
          <div className="space-y-4 animate-fade-in">
            <img src={logo} alt="Ghetto Foundation" className="h-16 w-auto" />
            <p className="text-gray-300 text-sm leading-relaxed">
              Empowering communities in Mathare through education, research, and sustainable development initiatives.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in" style={{ animationDelay: '100ms' }}>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-primary hover:translate-x-1 inline-block transition-all duration-300">About Us</Link></li>
              <li><Link to="/programs" className="text-gray-300 hover:text-primary hover:translate-x-1 inline-block transition-all duration-300">Our Programs</Link></li>
              <li><Link to="/gallery" className="text-gray-300 hover:text-primary hover:translate-x-1 inline-block transition-all duration-300">Gallery</Link></li>
              <li><Link to="/donate" className="text-gray-300 hover:text-primary hover:translate-x-1 inline-block transition-all duration-300">Donate</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-primary hover:translate-x-1 inline-block transition-all duration-300">Contact</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
            <h4 className="font-semibold text-lg mb-4">Our Programs</h4>
            <ul className="space-y-2">
              <li><Link to="/programs/education" className="text-gray-300 hover:text-primary hover:translate-x-1 inline-block transition-all duration-300">Digital Associates</Link></li>
              <li><Link to="/programs/youth" className="text-gray-300 hover:text-primary hover:translate-x-1 inline-block transition-all duration-300">Youth Leadership</Link></li>
              <li><Link to="/programs/health" className="text-gray-300 hover:text-primary hover:translate-x-1 inline-block transition-all duration-300">Civic Education</Link></li>
              <li><Link to="/programs/economic" className="text-gray-300 hover:text-primary hover:translate-x-1 inline-block transition-all duration-300">Ghetto Stories</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in" style={{ animationDelay: '300ms' }}>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">Mathare, Nairobi, Kenya</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-gray-300 text-sm">+254 XXX XXX XXX</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-gray-300 text-sm">info@ghettofoundation.org</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Ghetto Foundation. All rights reserved. Built with ❤️ for the community.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
