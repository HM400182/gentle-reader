import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
  HeartHandshake,
  ExternalLink,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import logo from "@/assets/logo.png";

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

    if (mapRef.current) observer.observe(mapRef.current);

    return () => observer.disconnect();
  }, []);

  const handleGetDirections = () => {
    window.open(
      "https://www.google.com/maps/dir/?api=1&destination=-1.2589,36.8557&destination_place_id=Ghetto+Foundation+Mathare+Nairobi+Kenya",
      "_blank"
    );
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Logo & Mission */}
          <div className="space-y-4">
            <img
              src={logo}
              alt="Ghetto Foundation Logo"
              className="h-12 w-auto brightness-0 invert"
            />
            <p className="text-sm leading-relaxed text-gray-300">
              Empowering communities in Mathare through education, research,
              and sustainable development initiatives.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 pt-2">
              {[{ icon: Facebook, link: "https://facebook.com" },
                { icon: Twitter, link: "https://twitter.com" },
                { icon: Instagram, link: "https://instagram.com" },
                { icon: Youtube, link: "https://youtube.com" }].map(({ icon: Icon, link }, i) => (
                <a
                  key={i}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Icon className="h-5 w-5 text-gray-400 transition-all duration-300 group-hover:scale-125 group-hover:text-community-warm" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
              {[
                { label: "About Us", to: "/about/history" },
                { label: "Programs", to: "/programs/mathare-resilience" },
                { label: "Gallery", to: "/gallery" },
              ].map((item, i) => (
                <Link
                  key={i}
                  to={item.to}
                  className="block text-sm text-gray-300 transition-all hover:translate-x-1 hover:text-community-warm"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Programs */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Our Programs</h3>
            <div className="space-y-2">
              {[
                { label: "Digital Associates", to: "/programs/digital-associates" },
                { label: "Youth Leadership", to: "/programs/youth-leadership" },
                { label: "Civic Education", to: "/programs/civic-education" },
              ].map((item, i) => (
                <Link
                  key={i}
                  to={item.to}
                  className="block text-sm text-gray-300 transition-all hover:translate-x-1 hover:text-community-warm"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact + Donation */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>

            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-community-warm" />
                <span className="text-gray-300">Mathare, Nairobi, Kenya</span>
              </div>

              <a
                href="tel:+254XXXXXXXXX"
                className="flex items-center gap-3 text-gray-300 transition hover:text-community-warm"
              >
                <Phone className="h-5 w-5 text-community-warm" />
                +254 XXX XXX XXX
              </a>

              <a
                href="mailto:info@ghettofoundation.org"
                className="flex items-center gap-3 text-gray-300 transition hover:text-community-warm"
              >
                <Mail className="h-5 w-5 text-community-warm" />
                info@ghettofoundation.org
              </a>
            </div>

            {/* Donation CTA */}
            <Link
              to="/donate"
              className="inline-flex items-center gap-2 rounded-md bg-community-warm px-4 py-2 text-sm font-medium text-white transition-all hover:scale-105 hover:bg-community-warm/90"
            >
              <HeartHandshake className="h-4 w-4" />
              Support Our Work
            </Link>
          </div>
        </div>

        {/* Google Map Section */}
        <div
          ref={mapRef}
          className={`mt-12 transition-all duration-700 ease-out ${
            isMapVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
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

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Ghetto Foundation. All rights reserved. Built with ❤️ for the
            community.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
