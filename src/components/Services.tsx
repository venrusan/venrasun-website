import { Code, Cloud, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Code,
    title: "Software Development",
    description: "Custom applications and web solutions",
  },
  {
    icon: Cloud,
    title: "Cloud & IoT Solutions",
    description: "Cloud platforms & IoT integration",
  },
  {
    icon: Shield,
    title: "Cybersecurity & Consulting",
    description: "Protecting your business data",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <div className="flex items-center justify-center gap-4 text-muted-foreground">
            <span className="h-px w-12 bg-primary/50" />
            <span>What We Offer</span>
            <span className="h-px w-12 bg-primary/50" />
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-service-bg rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 animate-fade-in border border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-xl bg-primary/10 mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-10 h-10 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6">
                {service.description}
              </p>

              {/* Button */}
              <Button variant="default" size="sm" className="group/btn">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
