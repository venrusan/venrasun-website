import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/venrasun-logo.jpeg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const hash = location.hash.slice(1) || "";
    setActiveSection(hash);
  }, [location.hash]);

  const handleNavClick = (href: string) => {
    if (isHomePage) {
      window.location.hash = href.slice(1);
    } else {
      navigate("/" + href);
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">

          {/* LOGO + BRAND + SLOGAN */}
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-4 text-left group"
          >
            <img
              src={logo}
              alt="VenRaSun"
              className="h-16 w-auto scale-110 transition-transform duration-500 group-hover:scale-125"
            />

            <div className="hidden sm:block">
<div className="text-2xl font-extrabold tracking-wide text-primary">
                VenRaSun
              </div>

              <p className="text-base font-bold tracking-wide animate-fade-in-up delay-150">
                <span className="text-foreground">From Idea to </span>
                <span className="text-primary">Impact</span>
              </p>
            </div>
          </button>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className={`relative font-medium transition-all duration-300 ${
                  activeSection === link.href.slice(1)
                    ? "text-primary"
                    : "text-foreground/80 hover:text-primary"
                }`}
              >
                {link.name}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-primary transition-all duration-300 ${
                    activeSection === link.href.slice(1) ? "w-full" : "w-0"
                  }`}
                />
              </button>
            ))}
          </nav>

          {/* CTA */}
          <Button
            className="hidden md:flex bg-primary text-white font-semibold shadow-lg transition-transform duration-300 hover:scale-105"
            onClick={() => handleNavClick("#contact")}
          >
            Get Started
          </Button>

          {/* MOBILE MENU ICON */}
          <button
            className="md:hidden p-2 transition-transform duration-300 hover:scale-110"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="pt-6">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left font-medium py-2 text-foreground/80 hover:text-primary transition-all"
                >
                  {link.name}
                </button>
              ))}
              <Button
                className="mt-4 w-full bg-primary shadow-lg"
                onClick={() => handleNavClick("#contact")}
              >
                Get Started
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
