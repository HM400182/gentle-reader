import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import logo from '@/assets/logo.png';

const Footer = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [isMapVisible, setIsMapVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsMapVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (mapRef.current) {
      observer.observe(mapRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleGetDirections = () => {
    window.open(
      'https://www.google.com/maps/dir/?api=1&destination=-1.2589,36.8557&destination_place_id=Ghetto+Foundation+Mathare+Nairobi+Kenya',
      '_blank'
    );
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Mission */}
          <div className="space-y-4">
            <img 
              src={logo} 
              alt="Ghetto Foundation Logo" 
              className="h-12 w-auto brightness-0 invert"
            />
            <p className="text-gray-300 text-sm">
              Empowering communities in Mathare through education, research, and sustainable development initiatives.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Facebook className="w-5 h-5 text-gray-400 hover:text-community-warm cursor-pointer transition-colors" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Twitter className="w-5 h-5 text-gray-400 hover:text-community-warm cursor-pointer transition-colors" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-5 h-5 text-gray-400 hover:text-community-warm cursor-pointer transition-colors" />
              </a>
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
                <MapPin className="w-5 h-5 text-community-warm flex-shrink-0" />
                <span className="text-gray-300 text-sm">Mathare, Nairobi, Kenya</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-community-warm flex-shrink-0" />
                <span className="text-gray-300 text-sm">+254 XXX XXX XXX</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-community-warm flex-shrink-0" />
                <span className="text-gray-300 text-sm">info@ghettofoundation.org</span>
              </div>
            </div>
          </div>
        </div>

        {/* Google Map Section */}
        <div 
          ref={mapRef}
          className={`mt-12 transition-all duration-700 ease-out ${
            isMapVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-4">
            <h3 className="text-lg font-semibold">Find Us</h3>
            <button
              onClick={handleGetDirections}
              className="inline-flex items-center gap-2 bg-community-warm hover:bg-community-warm/90 text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium"
            >
              <ExternalLink className="w-4 h-4" />
              Get Directions
            </button>
          </div>
          <div className="relative w-full overflow-hidden rounded-xl border border-gray-700">
            <div className="aspect-video sm:aspect-[21/9]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8089!2d36.8557!3d-1.2589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f17b78e4d5c7b%3A0x4b5c5e6d7f8a9b0c!2sMathare%2C%20Nairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ghetto Foundation Location - Mathare, Nairobi, Kenya"
                className="absolute inset-0"
              />
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
