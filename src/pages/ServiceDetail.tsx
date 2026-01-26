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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-hero-gradient-start via-hero-gradient-mid to-hero-gradient-end">
        <div className="container mx-auto px-4">
          <Link to="/#services" className="inline-flex items-center text-primary-foreground/80 hover:text-primary-foreground mb-6 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Services
          </Link>
          <div className="flex items-center gap-6 mb-6">
            <div className="p-4 bg-white/20 rounded-xl">
              <IconComponent className="w-12 h-12 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground">{service.title}</h1>
              <p className="text-xl text-primary-foreground/80 mt-2">{service.subtitle}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Description */}
            <div className="animate-fade-in">
              <h2 className="text-2xl font-bold text-foreground mb-4">Overview</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                {service.description}
              </p>
              
              <h3 className="text-xl font-bold text-foreground mb-4">Technologies We Use</h3>
              <div className="flex flex-wrap gap-3">
                {service.technologies.map((tech) => (
                  <span 
                    key={tech}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <h2 className="text-2xl font-bold text-foreground mb-6">What We Offer</h2>
              <ul className="space-y-4">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8">
                <Link to="/#contact">
                  <Button size="lg" className="w-full md:w-auto">
                    Get Started
                    <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
                  </Button>
                </Link>
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
