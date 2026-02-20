import { useLocation, useNavigate } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Youtube, Mail } from "lucide-react";
import logo from "@/assets/venrasun-logo.jpeg";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  const footerLinks = {
    aboutUs: [
      { name: "Home", href: "#" },
      { name: "About", href: "#about" },
      { name: "Services", href: "#services" },
      { name: "Contact", href: "#contact" },
    ],

    services: [
      { name: "Web Applications", href: "web-application" },
      { name: "Mobile Applications", href: "mobile-application" },
      { name: "Data Analytics", href: "data-analytics" },
      { name: "Machine Learning", href: "machine-learning" },
      { name: "Cloud & IoT", href: "cloud-iot" },
      { name: "Cybersecurity", href: "cybersecurity" },
    ],
  };

  const socialLinks = [
    { icon: Mail, href: "mailto:contact@venrasun.com", label: "Email" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/educonnecthub/?viewAsMember=true", label: "LinkedIn", target: "_blank" },
    { icon: Instagram, href: "https://www.instagram.com/venrasun_/", label: "Instagram", target: "_blank" },
  ];

  const handleNavClick = (href: string) => {
    if (isHomePage) {
      window.location.hash = href.slice(1);
    } else {
      navigate("/" + href);
    }
  };

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Tagline */}
          <div className="md:col-span-1">
            <img src={logo} alt="VenRaSun" className="w-24 h-24  mb-4" />
            <p className="text-sm text-primary font-medium">
              FROM IDEA TO IMPACT
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              © 2026 VenRaSun. All rights reserved.
            </p>
          </div>

          {/* About Us Links */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Quick Link</h4>
            <ul className="space-y-2">
              {footerLinks.aboutUs.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors bg-none border-none cursor-pointer p-0"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (

<li key={link.name}>
                <a href={`/services/${link.href}`}>
                <button className="text-muted-foreground hover:text-primary transition-colors bg-none border-none cursor-pointer p-0">
                  {link.name}
                  </button>
              </a>
              </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Contact</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.target}
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
