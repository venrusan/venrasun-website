import { useParams, Link } from "react-router-dom";
import { Code, Smartphone, BarChart3, Brain, Cloud, Shield, ArrowLeft, CheckCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const servicesData = {
  "web-application": {
    icon: Code,
    title: "Web Application Development",
    subtitle: "React, Next.js & Spring Boot Solutions",
    description: `
      We build modern, scalable web applications using cutting-edge technologies. Our team specializes in creating responsive, performant, and user-friendly web solutions that drive business growth.
      Whether you need a single-page application, an enterprise-grade platform, or a complex e-commerce system, we design solutions tailored to your specific business needs. Our process includes UX/UI design, frontend and backend development, API integration, cloud deployment, and continuous optimization.
      Partnering with VenRaSun means ensuring your web applications are secure, fast, and maintainable. Our developers follow best practices in coding standards, testing, and project management. With expertise in React.js, Next.js, and Spring Boot, we create scalable applications that adapt as your business grows.
      From startups to established enterprises, we help organizations transform ideas into impactful digital experiences. We also provide post-launch support, ensuring your applications remain up-to-date and secure, allowing you to focus on your core business operations.
    `,
    technologies: ["React.js", "Next.js", "Spring Boot", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    features: [
      "Custom Web Application Development",
      "Progressive Web Apps (PWA)",
      "E-commerce Solutions",
      "Content Management Systems",
      "API Development & Integration",
      "Performance Optimization"
    ],
    bannerGradient: "from-blue-600 via-blue-500 to-blue-400",
    seo: {
      title: "Web Application Development | VenRaSun",
      description: "Scalable web apps built with React, Next.js & Spring Boot. Fast, secure, and user-friendly solutions for your business growth.",
      canonical: "https://www.venrasun.com/services/web-application",
    }
  },
  "mobile-application": {
    icon: Smartphone,
    title: "Mobile Application Development",
    subtitle: "React Native Cross-Platform Apps",
    description: `
      Create powerful mobile applications that work seamlessly on both iOS and Android platforms. We leverage React Native to deliver native-like experiences with reduced development time and cost.
      Our mobile app development process starts with understanding your business goals, target audience, and desired features. We focus on creating intuitive interfaces, smooth navigation, and robust performance.
      We handle everything from app design, development, testing, deployment to app store submission, ensuring your app meets high-quality standards. With push notifications, offline capabilities, and integration with existing services, our apps enhance user engagement and satisfaction.
      We also provide ongoing support and maintenance, making sure your app stays current with OS updates and evolving user expectations. VenRaSun empowers businesses to transform ideas into impactful mobile experiences.
    `,
    technologies: ["React Native", "Expo", "TypeScript", "Redux", "Firebase", "REST APIs"],
    features: [
      "Cross-Platform Development",
      "Native App Performance",
      "Push Notifications",
      "Offline Functionality",
      "App Store Deployment",
      "Maintenance & Support"
    ],
    bannerGradient: "from-purple-600 via-purple-500 to-purple-400",
    seo: {
      title: "Mobile App Development | VenRaSun",
      description: "High-quality mobile apps with React Native for iOS & Android. Native-like performance, push notifications & offline support.",
      canonical: "https://www.venrasun.com/services/mobile-application",
    }
  }
  // Add other services similarly...
};

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const service = servicesData[serviceId as keyof typeof servicesData];

  if (!service) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Service Not Found</h1>
          <Link to="/">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const IconComponent = service.icon;

  return (
    <div className="min-h-screen bg-background">
      {/* 🔥 SEO TAGS */}
      <Helmet>
        <title>{service.seo.title}</title>
        <meta name="description" content={service.seo.description} />
        <link rel="canonical" href={service.seo.canonical} />

        {/* OpenGraph */}
        <meta property="og:title" content={service.seo.title} />
        <meta property="og:description" content={service.seo.description} />
        <meta property="og:image" content="https://www.venrasun.com/og-services.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={service.seo.title} />
        <meta name="twitter:description" content={service.seo.description} />
        <meta name="twitter:image" content="https://www.venrasun.com/og-services.png" />
      </Helmet>

      <Header />

      {/* Banner */}
      <section className={`bg-gradient-to-br ${service.bannerGradient} pt-32 pb-16 relative overflow-hidden`}>
        <div className="container mx-auto px-4 relative z-10">
          <button 
            onClick={() => window.history.back()}
            className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors cursor-pointer bg-none border-none font-medium"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </button>
          <div className="flex items-center gap-6 mb-6 animate-fade-in">
            <div className="p-6 bg-white/20 backdrop-blur-sm rounded-2xl border border-white/30">
              <IconComponent className="w-16 h-16 text-white" />
            </div>
            <div>
              {/* ✅ SINGLE H1 */}
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-3">{service.title}</h1>
              <p className="text-xl text-white/90">{service.subtitle}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Description */}
            <div className="animate-fade-in">
              <div className="mb-8 pb-8 border-b-2 border-primary/20">
                <h2 className="text-3xl font-bold text-foreground mb-4">Overview</h2>
                <p className="text-muted-foreground text-lg leading-relaxed whitespace-pre-line">
                  {service.description}
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">Technologies We Use</h3>
                <div className="flex flex-wrap gap-3">
                  {service.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium hover:bg-primary/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <h2 className="text-3xl font-bold text-foreground mb-8">What We Offer</h2>
              <ul className="space-y-4">
                {service.features.map((feature, index) => (
                  <li key={feature} className="flex items-start gap-4 group">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                    </div>
                    <span className="text-muted-foreground text-lg leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-12">
                <a href="/#contact">
                  <Button size="lg" className="w-full md:w-auto text-base px-8 py-6 hover:shadow-lg transition-shadow">
                    Get Started
                    <ArrowLeft className="ml-2 h-5 w-5 rotate-180" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
