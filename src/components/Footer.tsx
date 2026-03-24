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
} from "lucide-react";
import VisitUs from "./VisitUs";

const Footer = () => {
  return (
    <>
      <VisitUs />
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
            {/* Mission & Social */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Ghetto Foundation</h3>
              <p className="text-sm leading-relaxed text-gray-300">
                Empowering communities in Mathare through education, research,
                and sustainable development initiatives.
              </p>

              {/* Social Icons */}
              <div className="flex gap-4 pt-2">
                {[
                  { icon: Facebook, link: "https://facebook.com" },
                  { icon: Twitter, link: "https://twitter.com" },
                  { icon: Instagram, link: "https://instagram.com" },
                  { icon: Youtube, link: "https://youtube.com" },
                ].map(({ icon: Icon, link }, i) => (
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
                  +254 720 847 102
                </a>

                <a
                  href="mailto:info@ghettofoundation.org"
                  className="flex items-center gap-3 text-gray-300 transition hover:text-community-warm"
                >
                  <Mail className="h-5 w-5 text-community-warm" />
                  management@ghettofoundationkenya.org
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

          {/* Bottom */}
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2026 Ghetto Foundation. All rights reserved. Built with ❤️ for the
              community.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
