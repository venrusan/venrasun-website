import { useParams, Link } from "react-router-dom";
import { Code, Smartphone, BarChart3, Brain, Cloud, Shield, ArrowLeft, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const servicesData = {
  "web-application": {
    icon: Code,
    title: "Web Application Development",
    subtitle: "React, Next.js & Spring Boot Solutions",
    description: "We build modern, scalable web applications using cutting-edge technologies. Our team specializes in creating responsive, performant, and user-friendly web solutions that drive business growth.",
    technologies: ["React.js", "Next.js", "Spring Boot", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    features: [
      "Custom Web Application Development",
      "Progressive Web Apps (PWA)",
      "E-commerce Solutions",
      "Content Management Systems",
      "API Development & Integration",
      "Performance Optimization"
    ],
    bannerGradient: "from-blue-600 via-blue-500 to-blue-400"
  },
  "mobile-application": {
    icon: Smartphone,
    title: "Mobile Application Development",
    subtitle: "React Native Cross-Platform Apps",
    description: "Create powerful mobile applications that work seamlessly on both iOS and Android platforms. We leverage React Native to deliver native-like experiences with reduced development time and cost.",
    technologies: ["React Native", "Expo", "TypeScript", "Redux", "Firebase", "REST APIs"],
    features: [
      "Cross-Platform Development",
      "Native App Performance",
      "Push Notifications",
      "Offline Functionality",
      "App Store Deployment",
      "Maintenance & Support"
    ],
    bannerGradient: "from-purple-600 via-purple-500 to-purple-400"
  },
  "data-analytics": {
    icon: BarChart3,
    title: "Data Analytics",
    subtitle: "Transform Data Into Insights",
    description: "Unlock the power of your data with our comprehensive analytics solutions. We help businesses make data-driven decisions through advanced analytics, visualization, and reporting.",
    technologies: ["Python", "Tableau", "Power BI", "SQL", "Apache Spark", "Pandas"],
    features: [
      "Business Intelligence Dashboards",
      "Predictive Analytics",
      "Data Visualization",
      "Custom Reporting Solutions",
      "Data Warehouse Design",
      "Real-time Analytics"
    ],
    bannerGradient: "from-green-600 via-green-500 to-green-400"
  },
  "machine-learning": {
    icon: Brain,
    title: "Machine Learning",
    subtitle: "AI-Powered Intelligent Solutions",
    description: "Harness the power of artificial intelligence to automate processes, predict outcomes, and gain competitive advantages. Our ML solutions are tailored to your specific business needs.",
    technologies: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenAI", "Python", "Jupyter"],
    features: [
      "Custom ML Model Development",
      "Natural Language Processing",
      "Computer Vision Solutions",
      "Recommendation Systems",
      "Predictive Modeling",
      "AI Integration Services"
    ],
    bannerGradient: "from-yellow-600 via-yellow-500 to-yellow-400"
  },
  "cloud-iot": {
    icon: Cloud,
    title: "Cloud & IoT Solutions",
    subtitle: "Cloud Platforms & IoT Integration",
    description: "Modernize your infrastructure with cloud solutions and connect your devices with IoT. We provide end-to-end cloud migration, management, and IoT implementation services.",
    technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "MQTT"],
    features: [
      "Cloud Migration Services",
      "Infrastructure as Code",
      "IoT Device Integration",
      "Serverless Architecture",
      "Microservices Design",
      "DevOps Implementation"
    ],
    bannerGradient: "from-cyan-600 via-cyan-500 to-cyan-400"
  },
  "cybersecurity": {
    icon: Shield,
    title: "Cybersecurity",
    subtitle: "Protecting Your Business Data",
    description: "Safeguard your digital assets with our comprehensive cybersecurity services. We identify vulnerabilities, implement robust security measures, and ensure compliance with industry standards.",
    technologies: ["SIEM", "Firewall", "Encryption", "Penetration Testing", "ISO 27001", "GDPR"],
    features: [
      "Security Audits & Assessments",
      "Vulnerability Testing",
      "Security Architecture Design",
      "Compliance Consulting",
      "Incident Response Planning",
      "Security Training & Awareness"
    ],
    bannerGradient: "from-red-600 via-red-500 to-red-400"
  }
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
      <Header />
      
      {/* Banner Section with Dynamic Gradient */}
      <section className={`bg-gradient-to-br ${service.bannerGradient} pt-32 pb-16 relative overflow-hidden`}>
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20 -mr-48 -mt-48" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-20 -ml-48 -mb-48" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}></div>
        
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
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-3">{service.title}</h1>
              <p className="text-xl text-white/90">{service.subtitle}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Description */}
            <div className="animate-fade-in">
              <div className="mb-8 pb-8 border-b-2 border-primary/20">
                <h2 className="text-3xl font-bold text-foreground mb-4">Overview</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
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
                  <li key={feature} className="flex items-start gap-4 group" style={{ animationDelay: `${0.2 + index * 0.05}s` }}>
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
