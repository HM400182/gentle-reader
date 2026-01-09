import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png"; // ✅ Correct import path

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [programsDropdown, setProgramsDropdown] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const navLinks = {
    about: [
      { to: "/about/history", label: "History/Vision/Mission" },
      { to: "/about/team", label: "Team" },
      { to: "/about/sponsors", label: "Sponsors" },
    ],
    programs: [
      { to: "/programs/mathare-resilience", label: "Mathare Resilience" },
      { to: "/programs/digital-associates", label: "Digital Associates" },
      { to: "/programs/community-projects", label: "Community Projects" },
      { to: "/programs/research", label: "Our Research (CLRA)" },
      { to: "/programs/youth-leadership", label: "Youth Leadership" },
      { to: "/programs/civic-education", label: "Civic Education" },
      { to: "/programs/ghetto-stories", label: "Ghetto Stories" },
    ],
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* ✅ Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src={logo}
              alt="Ghetto Foundation Logo"
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`nav-link ${isActive("/") ? "nav-link-active" : ""}`}
            >
              Home
            </Link>

            {/* About Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setAboutDropdown(true)}
              onMouseLeave={() => setAboutDropdown(false)}
            >
              <button className="nav-link flex items-center space-x-1">
                <span>About Us</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {aboutDropdown && (
                <div className="absolute top-full left-0 mt-0 w-56 bg-white rounded-lg shadow-lg border z-50">
                  {navLinks.about.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className={`block px-4 py-3 nav-link hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg ${
                        isActive(link.to) ? "nav-link-active bg-gray-50" : ""
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Programs Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setProgramsDropdown(true)}
              onMouseLeave={() => setProgramsDropdown(false)}
            >
              <button className="nav-link flex items-center space-x-1">
                <span>Programs</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {programsDropdown && (
                <div className="absolute top-full left-0 mt-0 w-64 bg-white rounded-lg shadow-lg border z-50">
                  {navLinks.programs.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className={`block px-4 py-3 nav-link hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg ${
                        isActive(link.to) ? "nav-link-active bg-gray-50" : ""
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/donate"
              className={`nav-link ${isActive("/donate") ? "nav-link-active" : ""}`}
            >
              Donate
            </Link>

            <Link
              to="/gallery"
              className={`nav-link ${isActive("/gallery") ? "nav-link-active" : ""}`}
            >
              Gallery
            </Link>

            <Link
              to="/news"
              className={`nav-link ${isActive("/news") ? "nav-link-active" : ""}`}
            >
              News
            </Link>

            <Link
              to="/contact"
              className={`nav-link ${isActive("/contact") ? "nav-link-active" : ""}`}
            >
              Contact
            </Link>

            <Link to="/donate">
              <Button className="btn-hero">Support Us</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-community-warm"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="space-y-2">
              <Link
                to="/"
                className={`block py-2 nav-link ${
                  isActive("/") ? "nav-link-active" : ""
                }`}
              >
                Home
              </Link>

              <div className="py-2">
                <div className="font-medium text-gray-900 mb-2">About Us</div>
                <div className="pl-4 space-y-2">
                  {navLinks.about.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className={`block py-1 nav-link ${
                        isActive(link.to) ? "nav-link-active" : ""
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="py-2">
                <div className="font-medium text-gray-900 mb-2">Programs</div>
                <div className="pl-4 space-y-2">
                  {navLinks.programs.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className={`block py-1 nav-link ${
                        isActive(link.to) ? "nav-link-active" : ""
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                to="/donate"
                className={`block py-2 nav-link ${
                  isActive("/donate") ? "nav-link-active" : ""
                }`}
              >
                Donate
              </Link>

              <Link
                to="/gallery"
                className={`block py-2 nav-link ${
                  isActive("/gallery") ? "nav-link-active" : ""
                }`}
              >
                Gallery
              </Link>

              <Link
                to="/news"
                className={`block py-2 nav-link ${
                  isActive("/news") ? "nav-link-active" : ""
                }`}
              >
                News
              </Link>

              <Link
                to="/contact"
                className={`block py-2 nav-link ${
                  isActive("/contact") ? "nav-link-active" : ""
                }`}
              >
                Contact
              </Link>

              <Link to="/donate">
                <Button className="btn-hero w-full mt-4">Support Us</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
