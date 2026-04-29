import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
  HeartHandshake,
} from "lucide-react";

// X (formerly Twitter) logo
const XIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className={className}
    fill="currentColor"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644Z" />
  </svg>
);
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
                  { icon: Facebook, link: "https://www.facebook.com/ghettofoundationKenya/" },
                  { icon: XIcon, link: "https://x.com/FoundationGf" },
                  { icon: Instagram, link: "https://www.instagram.com/ghettofoundation/" },
                  { icon: Youtube, link: "https://www.youtube.com/@GhettoFoundation" },
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
