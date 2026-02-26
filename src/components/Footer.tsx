import { Link } from "react-router-dom";
import { Mail, Linkedin, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
<<<<<<< Updated upstream
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

=======
>>>>>>> Stashed changes
  return (
    <footer className="bg-foreground text-background/80 pt-16 pb-8">
      <div className="container-narrow px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="font-display font-bold text-xl text-background mb-4 block">
              VENRA<span className="text-primary">SUN</span>
            </Link>
            <p className="text-sm text-background/60 mb-6 leading-relaxed">
              Connect with us and discover how technology can transform your business.
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: Twitter, label: "Twitter", href: "#" },
                { icon: Instagram, label: "Instagram", href: "#" },
                { icon: Mail, label: "Email", href: "mailto:contact@venrasun.com" },
                { icon: Linkedin, label: "LinkedIn", href: "#" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold text-background text-sm uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2.5">
              {["About Us", "Our Team", "Blog"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-background/60 hover:text-primary transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-background text-sm uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-2.5">
              {["Web Development", "Mobile Apps", "Data Analytics", "Machine Learning", "Cloud & IoT"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-background/60 hover:text-primary transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h4 className="font-display font-semibold text-background text-sm uppercase tracking-wider mb-4">Legal</h4>
            <ul className="space-y-2.5">
              {["Privacy Policy", "Terms of Conditions"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-background/60 hover:text-primary transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 text-center">
          <p className="text-sm text-background/40">
            © {new Date().getFullYear()} VENRASUN. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
