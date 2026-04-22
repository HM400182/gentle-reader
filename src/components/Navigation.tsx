import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [programsDropdown, setProgramsDropdown] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileProgramsOpen, setMobileProgramsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const closeMobileMenu = () => {
    setIsOpen(false);
    setMobileAboutOpen(false);
    setMobileProgramsOpen(false);
  };

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
      { to: "/programs/ghetto-youths", label: "Ghetto Youths" },
      { to: "/programs/uji-sato", label: "Uji Sato" },
    ],
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 flex-shrink-0" onClick={closeMobileMenu}>
            <img
              src={logo}
              alt="Ghetto Foundation Logo"
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8 ml-8 lg:ml-16">
            <Link to="/" className={`nav-link ${isActive("/") ? "nav-link-active" : ""}`}>
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
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${aboutDropdown ? "rotate-180" : ""}`} />
              </button>
              {aboutDropdown && (
                <div className="absolute top-full left-0 mt-0 w-56 bg-white rounded-lg shadow-lg border z-50 animate-in fade-in slide-in-from-top-2 duration-150">
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
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${programsDropdown ? "rotate-180" : ""}`} />
              </button>
              {programsDropdown && (
                <div className="absolute top-full left-0 mt-0 w-64 bg-white rounded-lg shadow-lg border z-50 animate-in fade-in slide-in-from-top-2 duration-150">
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

            <Link to="/gallery" className={`nav-link ${isActive("/gallery") ? "nav-link-active" : ""}`}>Gallery</Link>
            <Link to="/news" className={`nav-link ${isActive("/news") ? "nav-link-active" : ""}`}>News</Link>
            <Link to="/volunteer" className={`nav-link ${isActive("/volunteer") ? "nav-link-active" : ""}`}>Volunteer</Link>
            <Link to="/events" className={`nav-link ${isActive("/events") ? "nav-link-active" : ""}`}>Events</Link>
            <Link to="/contact" className={`nav-link ${isActive("/contact") ? "nav-link-active" : ""}`}>Contact</Link>

            <Link to="/donate">
              <Button className="btn-hero">Support Us</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-community-warm transition-colors duration-200"
            aria-label="Toggle menu"
          >
            <div className="transition-all duration-300">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 border-t space-y-1">
            <Link
              to="/"
              onClick={closeMobileMenu}
              className={`block px-3 py-2.5 nav-link ${
                isActive("/") ? "nav-link-active" : ""
              }`}
            >
              Home
            </Link>

            {/* Mobile About Dropdown */}
            <div>
              <button
                onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg nav-link hover:bg-gray-50 transition-colors duration-150"
              >
                <span className="font-medium">About Us</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${mobileAboutOpen ? "rotate-180" : ""}`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  mobileAboutOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="pl-4 py-1 space-y-1">
                  {navLinks.about.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      onClick={closeMobileMenu}
                      className={`block px-3 py-2 rounded-lg nav-link text-sm transition-colors duration-150 ${
                        isActive(link.to) ? "nav-link-active bg-gray-50" : "hover:bg-gray-50"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Programs Dropdown */}
            <div>
              <button
                onClick={() => setMobileProgramsOpen(!mobileProgramsOpen)}
                className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg nav-link hover:bg-gray-50 transition-colors duration-150"
              >
                <span className="font-medium">Programs</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${mobileProgramsOpen ? "rotate-180" : ""}`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  mobileProgramsOpen ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="pl-4 py-1 space-y-1">
                  {navLinks.programs.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      onClick={closeMobileMenu}
                      className={`block px-3 py-2 rounded-lg nav-link text-sm transition-colors duration-150 ${
                        isActive(link.to) ? "nav-link-active bg-gray-50" : "hover:bg-gray-50"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {[
              { to: "/gallery", label: "Gallery" },
              { to: "/news", label: "News" },
              { to: "/volunteer", label: "Volunteer" },
              { to: "/events", label: "Events" },
              { to: "/contact", label: "Contact" },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={closeMobileMenu}
                className={`block px-3 py-2.5 rounded-lg nav-link transition-colors duration-150 ${
                  isActive(link.to) ? "nav-link-active bg-gray-50" : "hover:bg-gray-50"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-2 pb-1">
              <Link to="/donate" onClick={closeMobileMenu}>
                <Button className="btn-hero w-full">Support Us</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
