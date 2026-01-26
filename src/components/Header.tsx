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
    // Detect active section based on current hash
    const hash = location.hash.slice(1) || "";
    setActiveSection(hash);
  }, [location.hash]);

  const handleNavClick = (href: string) => {
    if (isHomePage) {
      // If already on home page, just use the hash
      window.location.hash = href.slice(1);
    } else {
      // If on another page, navigate to home with hash
      navigate("/" + href);
    }
    setIsMenuOpen(false);
  };

  const handleLogoClick = () => {
    if (isHomePage) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  const isLinkActive = (href: string) => {
    const section = href.slice(1);
    return activeSection === section;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={handleLogoClick}
            className="flex items-center gap-2 bg-none border-none cursor-pointer p-0 hover:opacity-80 transition-opacity"
          >
            <img src={logo} alt="VenRaSun" className="h-14 w-auto font-bold" />
            <span className="hidden sm:inline font-bold text-xl text-primary">VenRaSun</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className={`font-medium bg-none border-none cursor-pointer p-0 transition-all ${
                  isLinkActive(link.href)
                    ? "text-primary border-b-2 border-primary pb-1"
                    : "text-foreground/80 hover:text-primary"
                }`}
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <Button className="hidden md:flex" onClick={() => handleNavClick("#contact")}>
            Get Started
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pt-4 pb-2 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className={`font-medium py-2 bg-none border-none cursor-pointer text-left p-0 transition-all ${
                    isLinkActive(link.href)
                      ? "text-primary border-l-4 border-primary pl-2"
                      : "text-foreground/80 hover:text-primary"
                  }`}
                >
                  {link.name}
                </button>
              ))}
              <Button className="w-full mt-2" onClick={() => handleNavClick("#contact")}>
                Get Started
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
