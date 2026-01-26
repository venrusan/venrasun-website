import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import logo from "@/assets/venrasun-logo.jpeg";

const Footer = () => {
  const footerLinks = {
    aboutUs: [
      { name: "About Us", href: "#about" },
      { name: "Services", href: "#services" },
      { name: "Projects", href: "#projects" },
    ],
    services: [
      { name: "Projects", href: "#projects" },
      { name: "Contact", href: "#contact" },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Tagline */}
          <div className="md:col-span-1">
            <img src={logo} alt="VenRaSun" className="h-12 w-auto mb-4" />
            <p className="text-sm text-primary font-medium">
              FROM IDEA TO IMPACT
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              © 2024 VenRaSun. All rights reserved.
            </p>
          </div>

          {/* About Us Links */}
          <div>
            <h4 className="font-bold text-foreground mb-4">About Us</h4>
            <ul className="space-y-2">
              {footerLinks.aboutUs.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
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
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
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
