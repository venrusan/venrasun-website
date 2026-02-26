"use client";

import { useRef, useEffect, useState } from "react";
import { Code, Smartphone, BarChart3, Brain, Cloud, Shield, ArrowRight, ChevronRight } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web Application",
    description: "React, Next.js & Spring Boot solutions for scalable, high-performance web experiences.",
    category: "Development",
  },
  {
    icon: Smartphone,
    title: "Mobile Application",
    description: "React Native cross-platform apps that feel native on iOS and Android.",
    category: "Development",
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description: "Transform raw data into actionable insights with powerful dashboards.",
    category: "Intelligence",
  },
  {
    icon: Brain,
    title: "Machine Learning",
    description: "AI-powered intelligent solutions that learn and adapt to your business.",
    category: "Intelligence",
  },
  {
    icon: Cloud,
    title: "Cloud & IoT",
    description: "Cloud platforms & IoT integration for a connected, scalable infrastructure.",
    category: "Infrastructure",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Protecting your business data with enterprise-grade security solutions.",
    category: "Infrastructure",
  },
];

const categories = ["All", "Development", "Intelligence", "Infrastructure"];

const serviceRoutes: Record<string, string> = {
  "Web Application": "web-application",
  "Mobile Application": "mobile-application",
  "Data Analytics": "data-analytics",
  "Machine Learning": "machine-learning",
  "Cloud & IoT": "cloud-iot",
  "Cybersecurity": "cybersecurity",
};

const stats = [
  // { value: 6, suffix: "+", label: "Services" },
  { value: 5, suffix: "+", label: "Clients" },
  { value: 98, suffix: "%", label: "Satisfaction" },
  { value: 2, suffix: "yrs", label: "Experience" },
];

function useCountUp(target: number, triggered: boolean, duration = 1500) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!triggered) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [triggered, target, duration]);
  return count;
}

function StatItem({ value, suffix, label, triggered }: { value: number; suffix: string; label: string; triggered: boolean }) {
  const count = useCountUp(value, triggered);
  return (
    <div className="stat-item">
      <span className="stat-number">{count}<span className="stat-suffix">{suffix}</span></span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

const Services = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeIndex, setActiveIndex] = useState(0);
  const [visible, setVisible] = useState<boolean[]>(new Array(services.length).fill(false));
  const [statsTriggered, setStatsTriggered] = useState(false);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const statsRef = useRef<HTMLDivElement | null>(null);

  const filtered = services.filter(s => activeFilter === "All" || s.category === activeFilter);

  useEffect(() => {
    // Reset visibility when filter changes
    setVisible(new Array(services.length).fill(false));
    setTimeout(() => {
      cardRefs.current.forEach((el, i) => {
        if (!el) return;
        setTimeout(() => {
          setVisible(prev => { const n = [...prev]; n[i] = true; return n; });
        }, i * 80);
      });
    }, 50);
  }, [activeFilter]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    cardRefs.current.forEach((el, i) => {
      if (!el) return;
      const obs = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setVisible(prev => { const n = [...prev]; n[i] = true; return n; });
          }, i * 90);
          obs.disconnect();
        }
      }, { threshold: 0.1 });
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach(o => o.disconnect());
  }, []);

  useEffect(() => {
    if (!statsRef.current) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setStatsTriggered(true); obs.disconnect(); }
    }, { threshold: 0.4 });
    obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        /* ── Background dot grid ── */
        .svc-section {
          position: relative;
          overflow: hidden;
          background-color: hsl(var(--background));
          background-image: radial-gradient(
            circle,
            hsl(var(--border) / 0.55) 1px,
            transparent 1px
          );
          background-size: 28px 28px;
        }

        /* Fade edges of the dot grid */
        .svc-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 80% 40% at 50% 0%, hsl(var(--background)) 0%, transparent 100%),
            radial-gradient(ellipse 80% 40% at 50% 100%, hsl(var(--background)) 0%, transparent 100%),
            radial-gradient(ellipse 30% 100% at 0% 50%, hsl(var(--background)) 0%, transparent 100%),
            radial-gradient(ellipse 30% 100% at 100% 50%, hsl(var(--background)) 0%, transparent 100%);
          pointer-events: none;
          z-index: 0;
        }

        /* Glow blob */
        .svc-section::after {
          content: '';
          position: absolute;
          top: 20%;
          left: 50%;
          transform: translateX(-50%);
          width: 600px;
          height: 300px;
          background: radial-gradient(ellipse, hsl(var(--primary) / 0.07) 0%, transparent 70%);
          pointer-events: none;
          z-index: 0;
        }

        .svc-inner { position: relative; z-index: 1; }

        /* ── Header ── */
        @keyframes svcUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .svc-header { animation: svcUp 0.55s ease both; }

        .svc-title-mark {
          position: relative;
          display: inline-block;
          color: hsl(var(--primary));
        }
        .svc-title-mark::after {
          content: '';
          position: absolute;
          bottom: 1px;
          left: 0;
          width: 100%;
          height: 3px;
          border-radius: 2px;
          background: hsl(var(--primary) / 0.5);
        }

        /* ── Stat bar ── */
        .svc-stats {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0;
          border: 1px solid hsl(var(--border) / 0.6);
          border-radius: 14px;
          overflow: hidden;
          background: hsl(var(--card, var(--background)) / 0.6);
          backdrop-filter: blur(8px);
        }
        .stat-item {
          flex: 1;
          min-width: 100px;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 1rem 1.25rem;
          position: relative;
          transition: background 0.2s ease;
        }
        .stat-item:not(:last-child)::after {
          content: '';
          position: absolute;
          right: 0;
          top: 20%;
          height: 60%;
          width: 1px;
          background: hsl(var(--border) / 0.6);
        }
        .stat-item:hover { background: hsl(var(--primary) / 0.04); }
        .stat-number {
          font-size: 1.6rem;
          font-weight: 700;
          color: hsl(var(--foreground));
          line-height: 1.1;
        }
        .stat-suffix {
          font-size: 1rem;
          color: hsl(var(--primary));
          font-weight: 600;
        }
        .stat-label {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: hsl(var(--muted-foreground));
          margin-top: 2px;
        }

        /* ── Filter tabs ── */
        .svc-filters {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 8px;
          animation: svcUp 0.55s 0.15s ease both;
        }
        .svc-filter-btn {
          padding: 0.4rem 1.1rem;
          border-radius: 99px;
          font-size: 0.82rem;
          font-weight: 500;
          border: 1px solid hsl(var(--border) / 0.7);
          background: transparent;
          color: hsl(var(--muted-foreground));
          cursor: pointer;
          transition: all 0.22s ease;
        }
        .svc-filter-btn:hover {
          border-color: hsl(var(--primary) / 0.5);
          color: hsl(var(--foreground));
          background: hsl(var(--primary) / 0.05);
        }
        .svc-filter-btn.active {
          background: hsl(var(--primary));
          border-color: hsl(var(--primary));
          color: hsl(var(--primary-foreground, #fff));
          box-shadow: 0 4px 14px hsl(var(--primary) / 0.3);
        }

        /* ── Cards ── */
        .svc-card-wrap {
          opacity: 0;
          transform: translateX(-65px) rotate(-1.5deg) scale(0.96);
          transition: opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1),
                      transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
          will-change: transform, opacity;
        }
        .svc-card-wrap.from-right {
          transform: translateX(65px) rotate(1.5deg) scale(0.96);
        }
        .svc-card-wrap.visible {
          opacity: 1;
          transform: translateX(0) rotate(0deg) scale(1);
        }

        .svc-card {
          position: relative;
<<<<<<< Updated upstream
          border-radius: 16px;
          border: 1px solid hsl(var(--border) / 0.6);
          background: hsl(var(--card, var(--background)));
          padding: 1.75rem;
=======
          border-radius: 24px;
          border: 1px solid hsl(var(--border) / 0.5);
          background: hsl(var(--card, var(--background)) / 0.75);
          backdrop-filter: blur(8px);
          padding: 2rem 1.5rem;
>>>>>>> Stashed changes
          height: 100%;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1),
                      box-shadow 0.3s ease,
                      border-color 0.3s ease;
<<<<<<< Updated upstream
=======
          box-shadow: 0 10px 30px -10px hsl(var(--primary) / 0.05);
>>>>>>> Stashed changes
        }

        /* Shimmer sweep */
        .svc-card::before {
          content: '';
          position: absolute;
          top: -60%; left: -80%;
          width: 50%; height: 220%;
<<<<<<< Updated upstream
          background: linear-gradient(120deg, transparent, hsl(var(--primary) / 0.07) 50%, transparent);
=======
          background: linear-gradient(120deg, transparent, hsl(var(--primary) / 0.06) 50%, transparent);
>>>>>>> Stashed changes
          transform: skewX(-15deg);
          transition: left 0.55s ease;
          pointer-events: none;
          z-index: 1;
        }
        .svc-card:hover::before { left: 130%; }

        .svc-card:hover {
          transform: translateY(-6px) scale(1.015);
<<<<<<< Updated upstream
          border-color: hsl(var(--primary) / 0.45);
          box-shadow: 0 18px 40px hsl(var(--primary) / 0.1), 0 4px 10px rgba(0,0,0,0.08);
        }

        .svc-icon-box {
          width: 52px; height: 52px;
          border-radius: 13px;
          background: hsl(var(--primary) / 0.1);
=======
          border-color: hsl(var(--primary) / 0.35);
          box-shadow: 0 25px 40px -12px hsl(var(--primary) / 0.18);
        }

        /* icon + category + title on the same row */
        .svc-card-header {
          display: flex;
          align-items: center;
          gap: 0.9rem;
          margin-bottom: 1rem;
        }

        .svc-icon-box {
          width: 44px; height: 44px;
          border-radius: 12px;
          background: hsl(var(--primary) / 0.12);
>>>>>>> Stashed changes
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          transition: background 0.3s ease, transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .svc-card:hover .svc-icon-box {
          background: hsl(var(--primary) / 0.2);
<<<<<<< Updated upstream
          transform: rotate(-6deg) scale(1.1);
=======
          transform: rotate(-4deg) scale(1.05);
>>>>>>> Stashed changes
        }

        .svc-category-tag {
          display: inline-block;
<<<<<<< Updated upstream
          font-size: 0.68rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 2px 8px;
          border-radius: 99px;
          background: hsl(var(--primary) / 0.1);
          color: hsl(var(--primary));
          margin-bottom: 0.5rem;
        }

        .svc-arrow {
          opacity: 0.35;
=======
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          padding: 0.25rem 0.9rem;
          border-radius: 99px;
          background: hsl(var(--primary) / 0.1);
          color: hsl(var(--primary));
          white-space: nowrap;
        }

        .svc-card-title {
          font-size: 1.2rem;
          font-weight: 600;
          color: hsl(var(--foreground));
          margin-bottom: 0.65rem;
          line-height: 1.3;
        }

        .svc-card-description {
          color: hsl(var(--muted-foreground));
          font-size: 0.9rem;
          line-height: 1.5;
          margin-bottom: 1.5rem;
          flex: 1;
        }

        .svc-arrow {
          opacity: 0.4;
>>>>>>> Stashed changes
          color: hsl(var(--muted-foreground));
          transition: transform 0.3s ease, opacity 0.3s ease, color 0.3s ease;
        }
        .svc-card:hover .svc-arrow { transform: translateX(5px); opacity: 1; color: hsl(var(--primary)); }

        .svc-link-text {
          font-size: 0.8rem;
<<<<<<< Updated upstream
=======
          font-weight: 500;
>>>>>>> Stashed changes
          color: hsl(var(--muted-foreground));
          transition: color 0.3s ease;
        }
        .svc-card:hover .svc-link-text { color: hsl(var(--primary)); }

<<<<<<< Updated upstream
=======
        /* card footer */
        .svc-card-footer {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-top: auto;
          border-top: 1px solid hsl(var(--border) / 0.3);
          padding-top: 1rem;
        }

>>>>>>> Stashed changes
        /* ── Dot indicators ── */
        .svc-dots { display: flex; gap: 6px; justify-content: center; }
        .svc-dot {
          height: 6px; width: 6px;
          border-radius: 3px;
          background: hsl(var(--border));
          transition: width 0.3s ease, background 0.3s ease;
        }
        .svc-dot.active { width: 22px; background: hsl(var(--primary)); }

        /* ── CTA Button ── */
        .svc-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 0.7rem 1.75rem;
          border-radius: 99px;
          background: hsl(var(--primary));
          color: hsl(var(--primary-foreground, #fff));
          font-size: 0.9rem;
          font-weight: 600;
          border: none;
          cursor: pointer;
          text-decoration: none;
          transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1),
                      box-shadow 0.25s ease,
                      opacity 0.2s ease;
          box-shadow: 0 4px 20px hsl(var(--primary) / 0.3);
        }
        .svc-cta-btn:hover {
          transform: translateY(-2px) scale(1.03);
          box-shadow: 0 8px 28px hsl(var(--primary) / 0.4);
        }
        .svc-cta-btn:active { transform: scale(0.98); }
        .svc-cta-icon {
          transition: transform 0.3s ease;
        }
        .svc-cta-btn:hover .svc-cta-icon { transform: translateX(4px); }

        /* Outline ghost variant */
        .svc-cta-ghost {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 0.7rem 1.75rem;
          border-radius: 99px;
          background: transparent;
          color: hsl(var(--foreground));
          font-size: 0.9rem;
          font-weight: 500;
          border: 1px solid hsl(var(--border));
          cursor: pointer;
          text-decoration: none;
          transition: border-color 0.2s ease, color 0.2s ease, transform 0.25s ease;
        }
        .svc-cta-ghost:hover {
          border-color: hsl(var(--primary) / 0.6);
          color: hsl(var(--primary));
          transform: translateY(-2px);
        }
      `}</style>

<<<<<<< Updated upstream
      <section className="svc-section py-20 md:py-28">
        <div className="svc-inner container mx-auto px-4 md:px-6">

          {/* ── Header ── */}
          <div className="text-center mb-10 svc-header">
=======
      <section className="svc-section py-16 md:py-28">
        <div className="svc-inner container mx-auto px-4 md:px-6">

          {/* ── Header ── */}
          <div className="text-center mb-12 svc-header">
>>>>>>> Stashed changes
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-primary mb-3">
              What We Offer
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-foreground leading-tight mb-4">
              Our <span className="svc-title-mark">Services</span>
            </h2>
            <p className="text-muted-foreground text-sm md:text-base max-w-sm mx-auto">
              End-to-end digital solutions designed to grow with your business.
            </p>
          </div>

<<<<<<< Updated upstream
          {/* ── Stat Bar ── */}
          {/* <div className="max-w-xl mx-auto mb-10" ref={statsRef}>
            <div className="svc-stats">
              {stats.map(s => (
                <StatItem key={s.label} {...s} triggered={statsTriggered} />
              ))}
            </div>
          </div> */}

          {/* ── Filter Tabs ── */}
          <div className="svc-filters mb-10">
=======
          {/* ── Stat Bar (optional, keep commented) ── */}

          {/* ── Filter Tabs ── */}
          <div className="svc-filters mb-12">
>>>>>>> Stashed changes
            {categories.map(cat => (
              <button
                key={cat}
                className={`svc-filter-btn ${activeFilter === cat ? "active" : ""}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* ── Cards Grid ── */}
<<<<<<< Updated upstream
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
=======
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
>>>>>>> Stashed changes
            {filtered.map((service, index) => (
              <div
                key={service.title}
                ref={(el) => { cardRefs.current[index] = el; }}
                className={`svc-card-wrap ${index % 2 !== 0 ? "from-right" : ""} ${visible[index] ? "visible" : ""}`}
              >
                <a
                  href={`/services/${serviceRoutes[service.title]}`}
                  className="block h-full no-underline"
                  onMouseEnter={() => setActiveIndex(index)}
                >
                  <div className="svc-card">
<<<<<<< Updated upstream
                    <div className="svc-icon-box mb-4">
                      <service.icon className="w-[22px] h-[22px] text-primary" />
                    </div>
                    <span className="svc-category-tag">{service.category}</span>
                    <div className="flex-1">
                      <h3 className="text-base font-semibold text-foreground mb-2">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 mt-5 pt-4 border-t border-border/40">
=======
                    {/* Icon + Category + Title in one row */}
                    <div className="svc-card-header">
                      <div className="svc-icon-box">
                        <service.icon className="w-[20px] h-[20px] text-primary" />
                      </div>
                      <span className="svc-category-tag">{service.category}</span>
                    </div>
                    <h3 className="svc-card-title">{service.title}</h3>
                    <p className="svc-card-description">{service.description}</p>
                    <div className="svc-card-footer">
>>>>>>> Stashed changes
                      <span className="svc-link-text">Learn more</span>
                      <ArrowRight className="svc-arrow w-[15px] h-[15px]" />
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>

          {/* ── Dot Indicators ── */}
<<<<<<< Updated upstream
          <div className="svc-dots mb-10">
=======
          <div className="svc-dots mb-12">
>>>>>>> Stashed changes
            {filtered.map((_, i) => (
              <div key={i} className={`svc-dot ${activeIndex === i ? "active" : ""}`} />
            ))}
          </div>

<<<<<<< Updated upstream
          {/* ── CTA Row ── */}
          {/* <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="/services" className="svc-cta-btn">
              View All Services
              <ChevronRight className="svc-cta-icon w-4 h-4" />
            </a>
            <a href="/contact" className="svc-cta-ghost">
              Talk to us
            </a>
          </div> */}
=======
          {/* ── CTA Row (optional) ── */}
>>>>>>> Stashed changes

        </div>
      </section>
    </>
  );
};

export default Services;