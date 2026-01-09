
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Mission */}
          <div className="space-y-4">
            <img 
              src="/lovable-uploads/1604577f-833a-4c8c-88fd-03385f133d3f.png" 
              alt="Ghetto Foundation Logo" 
              className="h-12 w-auto"
            />
            <p className="text-gray-300 text-sm">
              Empowering communities in Mathare through education, research, and sustainable development initiatives.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-community-warm cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-community-warm cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-community-warm cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/about/history" className="block text-gray-300 hover:text-community-warm transition-colors">
                About Us
              </Link>
              <Link to="/programs/mathare-resilience" className="block text-gray-300 hover:text-community-warm transition-colors">
                Programs
              </Link>
              <Link to="/donate" className="block text-gray-300 hover:text-community-warm transition-colors">
                Donate
              </Link>
              <Link to="/gallery" className="block text-gray-300 hover:text-community-warm transition-colors">
                Gallery
              </Link>
            </div>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Programs</h3>
            <div className="space-y-2">
              <Link to="/programs/digital-associates" className="block text-gray-300 hover:text-community-warm transition-colors">
                Digital Associates
              </Link>
              <Link to="/programs/youth-leadership" className="block text-gray-300 hover:text-community-warm transition-colors">
                Youth Leadership
              </Link>
              <Link to="/programs/civic-education" className="block text-gray-300 hover:text-community-warm transition-colors">
                Civic Education
              </Link>
              <Link to="/programs/ghetto-stories" className="block text-gray-300 hover:text-community-warm transition-colors">
                Ghetto Stories
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-community-warm" />
                <span className="text-gray-300 text-sm">Mathare, Nairobi, Kenya</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-community-warm" />
                <span className="text-gray-300 text-sm">+254 XXX XXX XXX</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-community-warm" />
                <span className="text-gray-300 text-sm">info@ghettofoundation.org</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Ghetto Foundation. All rights reserved. Built with ❤️ for the community.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
