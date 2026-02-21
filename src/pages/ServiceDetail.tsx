import { useParams, Link } from "react-router-dom";
import { Code, Smartphone, BarChart3, Brain, Cloud, Shield, ArrowLeft, ArrowRight, CheckCircle2, Layers, Cpu, Globe, Lock, DatabaseZap, Zap } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const servicesData = {
  "web-application": {
    icon: Code,
    title: "Web Application Development",
    subtitle: "React, Next.js & Spring Boot Solutions",
    description: `We build modern, scalable web applications using cutting-edge technologies. Our team specializes in creating responsive, performant, and user-friendly web solutions that drive business growth.

Whether you need a single-page application, an enterprise-grade platform, or a complex e-commerce system, we design solutions tailored to your specific business needs — covering UX/UI design, frontend and backend development, API integration, and cloud deployment.`,
    technologies: ["React.js", "Next.js", "Spring Boot", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    features: [
      { icon: Globe, title: "Custom Web Application Development", desc: "Fully tailored solutions built from scratch to match your exact business requirements and workflows." },
      { icon: Zap, title: "Progressive Web Apps (PWA)", desc: "Offline-capable, installable web apps that deliver a native-like experience across all devices." },
      { icon: DatabaseZap, title: "E-commerce Solutions", desc: "Scalable storefronts with payment gateways, inventory management, and seamless checkout flows." },
      { icon: Layers, title: "Content Management Systems", desc: "Flexible CMS integrations that let your team manage content independently without developer help." },
      { icon: Cpu, title: "API Development & Integration", desc: "RESTful and GraphQL APIs that connect your systems, third-party services, and data sources reliably." },
      { icon: Lock, title: "Performance Optimization", desc: "Lighthouse audits, code splitting, caching strategies, and CDN setup for blazing-fast load times." },
    ],
    seo: {
      title: "Web Application Development | VenRaSun",
      description: "Scalable web apps built with React, Next.js & Spring Boot. Fast, secure, and user-friendly solutions for your business growth.",
      canonical: "https://www.venrasun.com/services/web-application",
    },
  },
  "mobile-application": {
    icon: Smartphone,
    title: "Mobile Application Development",
    subtitle: "React Native Cross-Platform Apps",
    description: `Create powerful mobile applications that work seamlessly on both iOS and Android. We leverage React Native to deliver native-like experiences with reduced development time and cost.

Our process begins with understanding your business goals and target audience — and ends with a polished, app-store-ready product that users love to engage with.`,
    technologies: ["React Native", "Expo", "TypeScript", "Redux", "Firebase", "REST APIs"],
    features: [
      { icon: Globe, title: "Cross-Platform Development", desc: "One codebase, two platforms. Build for iOS and Android simultaneously without compromising quality." },
      { icon: Zap, title: "Native App Performance", desc: "Optimized rendering, smooth animations, and 60fps interactions that feel truly native." },
      { icon: Cpu, title: "Push Notifications", desc: "Targeted, real-time push notifications that drive engagement and keep users coming back." },
      { icon: Layers, title: "Offline Functionality", desc: "Apps that work without internet access, syncing data seamlessly when connectivity is restored." },
      { icon: DatabaseZap, title: "App Store Deployment", desc: "End-to-end submission to Google Play and Apple App Store, including review guidance and compliance." },
      { icon: Lock, title: "Maintenance & Support", desc: "Ongoing updates, OS compatibility patches, and feature additions to keep your app relevant." },
    ],
    seo: {
      title: "Mobile App Development | VenRaSun",
      description: "High-quality mobile apps with React Native for iOS & Android. Native-like performance, push notifications & offline support.",
      canonical: "https://www.venrasun.com/services/mobile-application",
    },
  },
  "data-analytics": {
    icon: BarChart3,
    title: "Data Analytics",
    subtitle: "Transform Data Into Actionable Insights",
    description: `Unlock the power of your data with advanced analytics solutions. We help businesses make smarter, data-driven decisions through custom dashboards, reporting pipelines, and real-time analytics.

Our team translates raw data into clear visual insights that your stakeholders can act on — covering the full analytics lifecycle from ingestion to visualization.`,
    technologies: ["Python", "Power BI", "Apache Spark", "SQL", "Tableau", "Pandas"],
    features: [
      { icon: Globe, title: "Custom Dashboard Development", desc: "Interactive dashboards tailored to your KPIs, giving decision-makers clarity at a glance." },
      { icon: Layers, title: "Data Pipeline Engineering", desc: "Reliable ETL pipelines that clean, transform, and load data from any source into your warehouse." },
      { icon: Cpu, title: "Business Intelligence Reports", desc: "Scheduled and on-demand BI reports that surface trends, anomalies, and growth opportunities." },
      { icon: Zap, title: "Real-time Analytics", desc: "Stream processing and live dashboards that reflect your data as it happens, not hours later." },
      { icon: DatabaseZap, title: "Data Visualization", desc: "Beautiful, intuitive charts and graphs that make complex data immediately understandable." },
      { icon: Lock, title: "KPI Monitoring", desc: "Automated alerts and threshold tracking so you never miss a critical business metric." },
    ],
    seo: {
      title: "Data Analytics Services | VenRaSun",
      description: "Transform raw data into actionable business insights with custom dashboards, BI reports, and real-time analytics.",
      canonical: "https://www.venrasun.com/services/data-analytics",
    },
  },
  "machine-learning": {
    icon: Brain,
    title: "Machine Learning",
    subtitle: "AI-Powered Intelligent Solutions",
    description: `We develop intelligent ML systems that automate decisions, detect patterns, and deliver predictive insights. Our AI solutions are practical, explainable, and built for real business impact.

From recommendation engines to NLP models and computer vision systems, we design and deploy ML pipelines that scale with your business.`,
    technologies: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "OpenAI API", "MLflow"],
    features: [
      { icon: Cpu, title: "Predictive Modeling", desc: "Regression, classification, and forecasting models that anticipate outcomes before they happen." },
      { icon: Globe, title: "Natural Language Processing", desc: "Sentiment analysis, entity extraction, chatbots, and document understanding at scale." },
      { icon: Zap, title: "Computer Vision", desc: "Image classification, object detection, and OCR systems for automating visual inspection tasks." },
      { icon: DatabaseZap, title: "Recommendation Engines", desc: "Personalisation algorithms that surface the right content, products, or actions for each user." },
      { icon: Layers, title: "Model Deployment & Monitoring", desc: "Production-ready model serving with drift detection, retraining triggers, and performance tracking." },
      { icon: Lock, title: "AI Strategy Consulting", desc: "Roadmap planning and use-case prioritisation to ensure your AI investments deliver ROI." },
    ],
    seo: {
      title: "Machine Learning Solutions | VenRaSun",
      description: "AI-powered machine learning solutions including NLP, computer vision, and predictive analytics tailored to your business.",
      canonical: "https://www.venrasun.com/services/machine-learning",
    },
  },
  "cloud-iot": {
    icon: Cloud,
    title: "Cloud & IoT",
    subtitle: "Cloud Platforms & IoT Integration",
    description: `We architect and manage cloud infrastructure that scales on demand, reduces costs, and improves reliability. From migration to DevOps automation, we handle every layer of your cloud journey.

On the IoT side, we design end-to-end solutions connecting devices, sensors, and platforms — enabling smarter operations and real-time data collection across industries.`,
    technologies: ["AWS", "Azure", "Google Cloud", "Kubernetes", "Docker", "MQTT"],
    features: [
      { icon: Globe, title: "Cloud Architecture & Migration", desc: "Secure, cost-optimised cloud architectures with seamless migration from on-premise or legacy systems." },
      { icon: Zap, title: "DevOps & CI/CD Pipelines", desc: "Automated build, test, and deployment pipelines that ship faster with fewer errors." },
      { icon: Cpu, title: "IoT Device Integration", desc: "End-to-end IoT solutions connecting sensors, edge devices, and cloud platforms in real time." },
      { icon: Layers, title: "Real-time Monitoring", desc: "Observability stacks with alerting, dashboards, and anomaly detection across your infrastructure." },
      { icon: DatabaseZap, title: "Serverless Solutions", desc: "Event-driven, auto-scaling serverless functions that reduce operational overhead and cost." },
      { icon: Lock, title: "Infrastructure as Code", desc: "Terraform and Ansible-based IaC for reproducible, version-controlled infrastructure management." },
    ],
    seo: {
      title: "Cloud & IoT Services | VenRaSun",
      description: "Scalable cloud infrastructure and IoT solutions with AWS, Azure, and GCP. DevOps, real-time monitoring, and smart device integration.",
      canonical: "https://www.venrasun.com/services/cloud-iot",
    },
  },
  "cybersecurity": {
    icon: Shield,
    title: "Cybersecurity",
    subtitle: "Protecting Your Business Data",
    description: `In an increasingly connected world, security is non-negotiable. We provide comprehensive cybersecurity services to protect your applications, infrastructure, and sensitive business data from evolving threats.

Our team performs vulnerability assessments, penetration testing, security audits, and implements robust identity & access management strategies.`,
    technologies: ["OWASP", "Burp Suite", "SIEM", "Zero Trust", "OAuth 2.0", "ISO 27001"],
    features: [
      { icon: Lock, title: "Penetration Testing", desc: "Simulated attacks that expose vulnerabilities before real adversaries can exploit them." },
      { icon: Zap, title: "Vulnerability Assessments", desc: "Comprehensive scanning and manual analysis to identify and rank security weaknesses across your stack." },
      { icon: Globe, title: "Security Audits & Compliance", desc: "ISO 27001, GDPR, and SOC 2 audit preparation with gap analysis and remediation planning." },
      { icon: Cpu, title: "Identity & Access Management", desc: "Zero-trust IAM architecture with MFA, SSO, and least-privilege access controls." },
      { icon: Layers, title: "Incident Response Planning", desc: "Playbooks, tabletop exercises, and runbooks so your team responds decisively when breaches occur." },
      { icon: DatabaseZap, title: "Security Awareness Training", desc: "Phishing simulations and employee training programmes that turn your team into a human firewall." },
    ],
    seo: {
      title: "Cybersecurity Services | VenRaSun",
      description: "Enterprise-grade cybersecurity with penetration testing, compliance audits, and identity management to protect your business.",
      canonical: "https://www.venrasun.com/services/cybersecurity",
    },
  },
};

function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setInView(true); obs.disconnect(); }
    }, { threshold });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const service = servicesData[serviceId as keyof typeof servicesData];

  const heroAnim  = useInView(0.1);
  const leftAnim  = useInView(0.1);
  const featAnim  = useInView(0.08);
  const ctaAnim   = useInView(0.1);

  // Stagger feature cards
  const [featVisible, setFeatVisible] = useState<boolean[]>([]);
  useEffect(() => {
    if (!featAnim.inView || !service) return;
    service.features.forEach((_, i) => {
      setTimeout(() => setFeatVisible(prev => { const n = [...prev]; n[i] = true; return n; }), i * 80);
    });
  }, [featAnim.inView, service]);

  if (!service) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-6">Service Not Found</h1>
          <Link to="/" className="sd-cta-primary">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const IconComponent = service.icon;

  return (
    <div className="min-h-screen bg-background">
      <style>{`
        /* ── Dot grid (matches Services section) ── */
        .sd-dot-bg {
          position: relative;
          overflow: hidden;
          background-color: hsl(var(--background));
          background-image: radial-gradient(circle, hsl(var(--border) / 0.55) 1px, transparent 1px);
          background-size: 28px 28px;
        }
        .sd-dot-bg::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 80% 50% at 50% 0%,   hsl(var(--background)) 0%, transparent 100%),
            radial-gradient(ellipse 80% 50% at 50% 100%, hsl(var(--background)) 0%, transparent 100%),
            radial-gradient(ellipse 30% 100% at 0%   50%, hsl(var(--background)) 0%, transparent 100%),
            radial-gradient(ellipse 30% 100% at 100% 50%, hsl(var(--background)) 0%, transparent 100%);
          pointer-events: none;
          z-index: 0;
        }
        .sd-dot-bg::after {
          content: '';
          position: absolute;
          top: 10%; left: 50%;
          transform: translateX(-50%);
          width: 700px; height: 350px;
          background: radial-gradient(ellipse, hsl(var(--primary) / 0.08) 0%, transparent 70%);
          pointer-events: none;
          z-index: 0;
        }
        .sd-rel { position: relative; z-index: 1; }

        /* ── Animations ── */
        .sd-up   { opacity: 0; transform: translateY(28px); transition: opacity .55s cubic-bezier(.22,1,.36,1), transform .55s cubic-bezier(.22,1,.36,1); }
        .sd-left { opacity: 0; transform: translateX(-55px) scale(.97); transition: opacity .55s cubic-bezier(.22,1,.36,1), transform .55s cubic-bezier(.22,1,.36,1); }
        .sd-in   { opacity: 1 !important; transform: none !important; }

        /* Feature card swipe */
        .sd-feat-card {
          opacity: 0;
          transform: translateX(-50px) scale(.97);
          transition: opacity .45s cubic-bezier(.22,1,.36,1), transform .45s cubic-bezier(.22,1,.36,1),
                      border-color .25s ease, box-shadow .25s ease;
        }
        .sd-feat-card.from-right { transform: translateX(50px) scale(.97); }
        .sd-feat-card.visible    { opacity: 1; transform: none; }

        /* Feature card hover */
        .sd-feat-card-inner {
          position: relative;
          display: flex;
          gap: 1rem;
          align-items: flex-start;
          padding: 1.25rem 1.25rem 1.25rem 1rem;
          border-radius: 14px;
          border: 1px solid hsl(var(--border) / 0.5);
          background: hsl(var(--card, var(--background)));
          overflow: hidden;
          height: 100%;
          transition: border-color .25s ease, transform .3s cubic-bezier(.34,1.56,.64,1), box-shadow .25s ease;
        }
        /* Shimmer on hover */
        .sd-feat-card-inner::before {
          content: '';
          position: absolute;
          top: -60%; left: -80%;
          width: 50%; height: 220%;
          background: linear-gradient(120deg, transparent, hsl(var(--primary) / 0.07) 50%, transparent);
          transform: skewX(-15deg);
          transition: left .5s ease;
          pointer-events: none;
        }
        .sd-feat-card-inner:hover::before { left: 130%; }
        .sd-feat-card-inner:hover {
          border-color: hsl(var(--primary) / 0.4);
          transform: translateY(-4px);
          box-shadow: 0 12px 30px hsl(var(--primary) / 0.09);
        }
        .sd-feat-card-inner:hover .sd-feat-icon-box {
          background: hsl(var(--primary) / 0.2);
          transform: rotate(-6deg) scale(1.1);
        }

        /* Feature icon */
        .sd-feat-icon-box {
          width: 40px; height: 40px;
          border-radius: 10px;
          background: hsl(var(--primary) / 0.1);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          transition: background .3s ease, transform .35s cubic-bezier(.34,1.56,.64,1);
        }

        /* Back pill */
        .sd-back {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: .82rem; font-weight: 500;
          color: hsl(var(--muted-foreground));
          border: 1px solid hsl(var(--border) / 0.6);
          padding: .38rem 1rem;
          border-radius: 99px;
          background: hsl(var(--card, var(--background)));
          cursor: pointer;
          transition: border-color .2s, color .2s, transform .2s;
        }
        .sd-back:hover { border-color: hsl(var(--primary)/.5); color: hsl(var(--primary)); transform: translateX(-3px); }

        /* Hero icon */
        .sd-icon-ring {
          width: 76px; height: 76px;
          border-radius: 18px;
          background: hsl(var(--primary) / 0.1);
          border: 1px solid hsl(var(--primary) / 0.25);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          transition: transform .4s cubic-bezier(.34,1.56,.64,1), background .3s;
        }
        .sd-icon-ring:hover { transform: rotate(-8deg) scale(1.08); background: hsl(var(--primary)/.2); }

        /* Tech tag */
        .sd-tech-tag {
          display: inline-flex; align-items: center;
          padding: .32rem .85rem;
          border-radius: 99px;
          font-size: .78rem; font-weight: 500;
          border: 1px solid hsl(var(--primary)/.25);
          background: hsl(var(--primary)/.07);
          color: hsl(var(--primary));
          transition: background .2s, border-color .2s, transform .2s;
          cursor: default;
        }
        .sd-tech-tag:hover { background: hsl(var(--primary)/.15); border-color: hsl(var(--primary)/.5); transform: translateY(-2px); }

        /* Divider */
        .sd-divider { height: 1px; background: linear-gradient(90deg, transparent, hsl(var(--border)), transparent); }

        /* Label */
        .sd-label { font-size: .68rem; font-weight: 700; letter-spacing: .25em; text-transform: uppercase; color: hsl(var(--primary)); }

        /* Title underline */
        .sd-title-mark { position: relative; display: inline-block; }
        .sd-title-mark::after {
          content: ''; position: absolute;
          bottom: 2px; left: 0;
          width: 100%; height: 3px;
          border-radius: 2px;
          background: hsl(var(--primary)/.45);
        }

        /* CTA buttons */
        .sd-cta-primary {
          display: inline-flex; align-items: center; gap: 8px;
          padding: .72rem 1.75rem; border-radius: 99px;
          background: hsl(var(--primary));
          color: hsl(var(--primary-foreground, #fff));
          font-size: .9rem; font-weight: 600; text-decoration: none;
          transition: transform .25s cubic-bezier(.34,1.56,.64,1), box-shadow .25s;
          box-shadow: 0 4px 20px hsl(var(--primary)/.3);
        }
        .sd-cta-primary:hover { transform: translateY(-3px) scale(1.03); box-shadow: 0 8px 28px hsl(var(--primary)/.4); }
        .sd-cta-primary:hover .sd-arrow { transform: translateX(4px); }
        .sd-arrow { transition: transform .3s ease; }

        .sd-cta-ghost {
          display: inline-flex; align-items: center; gap: 6px;
          padding: .72rem 1.75rem; border-radius: 99px;
          background: transparent;
          color: hsl(var(--foreground));
          font-size: .9rem; font-weight: 500; text-decoration: none;
          border: 1px solid hsl(var(--border));
          transition: border-color .2s, color .2s, transform .25s;
        }
        .sd-cta-ghost:hover { border-color: hsl(var(--primary)/.5); color: hsl(var(--primary)); transform: translateY(-2px); }
      `}</style>

      <Helmet>
        <title>{service.seo.title}</title>
        <meta name="description" content={service.seo.description} />
        <link rel="canonical" href={service.seo.canonical} />
        <meta property="og:title" content={service.seo.title} />
        <meta property="og:description" content={service.seo.description} />
        <meta property="og:image" content="https://www.venrasun.com/og-services.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={service.seo.title} />
        <meta name="twitter:description" content={service.seo.description} />
        <meta name="twitter:image" content="https://www.venrasun.com/og-services.png" />
      </Helmet>

      <Header />

      {/* ── Hero ── */}
      <section className="sd-dot-bg pt-28 pb-20">
        <div ref={heroAnim.ref} className={`sd-rel container mx-auto px-4 md:px-6 sd-up ${heroAnim.inView ? "sd-in" : ""}`}>
          <div className="mb-8">
            <button onClick={() => window.history.back()} className="sd-back">
              <ArrowLeft className="w-4 h-4" /> Back
            </button>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <div className="sd-icon-ring">
              <IconComponent className="w-9 h-9 text-primary" />
            </div>
            <div>
              <p className="sd-label mb-2">Service</p>
              <h1 className="text-3xl md:text-4xl lg:text-[2.6rem] font-bold text-foreground leading-tight mb-2">
                <span className="sd-title-mark">{service.title}</span>
              </h1>
              <p className="text-muted-foreground text-base md:text-lg">{service.subtitle}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Overview + Tech ── */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div
            ref={leftAnim.ref}
            className={`sd-left max-w-3xl ${leftAnim.inView ? "sd-in" : ""}`}
          >
            <p className="sd-label mb-2">Overview</p>
            <h2 className="text-2xl font-bold text-foreground mb-4">About This Service</h2>
            <div className="sd-divider mb-5" />
            <p className="text-muted-foreground leading-relaxed whitespace-pre-line mb-8 text-[0.95rem]">
              {service.description}
            </p>
            <p className="sd-label mb-3">Stack</p>
            <div className="flex flex-wrap gap-2">
              {service.technologies.map(tech => (
                <span key={tech} className="sd-tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Features Grid ── */}
      <section className="sd-dot-bg py-16 md:py-20">
        <div className="sd-rel container mx-auto px-4 md:px-6">
          <div ref={featAnim.ref} className={`sd-up mb-10 ${featAnim.inView ? "sd-in" : ""}`}>
            <p className="sd-label mb-2">Capabilities</p>
            <h2 className="text-2xl font-bold text-foreground">What We Offer</h2>
            <div className="sd-divider mt-4 max-w-xs" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {service.features.map((feat, i) => {
              const FeatIcon = feat.icon;
              return (
                <div
                  key={feat.title}
                  className={`sd-feat-card ${i % 2 !== 0 ? "from-right" : ""} ${featVisible[i] ? "visible" : ""}`}
                >
                  <div className="sd-feat-card-inner">
                    <div className="sd-feat-icon-box">
                      <FeatIcon className="w-4 h-4 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-semibold text-foreground mb-1 leading-snug">
                        {feat.title}
                      </h3>
                      <p className="text-muted-foreground text-xs leading-relaxed">
                        {feat.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 md:py-20 bg-background">
        <div
          ref={ctaAnim.ref}
          className={`container mx-auto px-4 md:px-6 text-center sd-up ${ctaAnim.inView ? "sd-in" : ""}`}
        >
          <div className="max-w-lg mx-auto">
            <p className="sd-label mb-3">Ready to Start?</p>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Let's Build Something Great
            </h2>
            <p className="text-muted-foreground text-sm mb-8">
              Tell us about your project and we'll get back to you within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href="/#contact" className="sd-cta-primary">
                Get Started
                <ArrowRight className="sd-arrow w-4 h-4" />
              </a>
              {/* <Link to="/services" className="sd-cta-ghost">
                View All Services
              </Link> */}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetail;