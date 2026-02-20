import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-image.png";
import "../App.css"

const Hero = () => {
  const handleGetStarted = () => {
    const contactElement = document.getElementById("contact");
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleExploreServices = () => {
    const servicesElement = document.getElementById("services");
    if (servicesElement) {
      servicesElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen bg-hero-gradient pt-24 overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex items-center justify-center min-h-[70vh]">
          {/* Text Content */}
          <div className="text-center lg:text-center animate-fade-in mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-8xl font-bold text-foreground leading-tight mb-6">
              YOUR SUCCESS IS <span className="text-primary">OUR MISSION</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto" id="home-intro">At VENRASUN, every solution we craft begins and ends with you. We don't just build technology we build lasting partnerships that drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-center">
              <Button size="lg" className="text-base px-8 py-6 cursor-pointer" onClick={handleGetStarted}>
                Explore
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-base px-8 py-6 cursor-pointer" onClick={handleExploreServices}>
                Contact Us
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          {/* <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <img
              src={heroImage}
              alt="IT Solutions"
              className="w-full h-auto rounded-2xl animate-float"
            />
          </div> */}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
