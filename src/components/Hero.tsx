import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
<<<<<<< Updated upstream
import heroImage from "@/assets/hero-image.png";
import "../App.css"
=======
import "../App.css";
>>>>>>> Stashed changes

const Hero = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
<<<<<<< Updated upstream
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
=======
    <section className="relative min-h-screen flex items-center justify-center bg-hero-gradient overflow-hidden">

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">

          {/* 2D Animated Text */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">

            <div className="relative inline-block">
              <span className="animated-2d-text-1">
                Your Success
              </span>
>>>>>>> Stashed changes
            </div>

            <div className="relative inline-block mt-4">
              <span className="animated-2d-text-2">
                Our Vision
              </span>
            </div>

          </h1>

          {/* Description */}
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            At <span className="font-semibold text-foreground">VENRASUN</span>,
            we craft intelligent digital solutions that empower innovation and long-term growth.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button
              size="lg"
              onClick={() => scrollTo("contact")}
              className="group px-8 py-6 rounded-full text-lg shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300"
            >
              Get Started
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollTo("services")}
              className="px-8 py-6 rounded-full text-lg border-2 hover:bg-primary/5 transition-all duration-300"
            >
              Explore Services
            </Button>
          </div>

<<<<<<< Updated upstream
          {/* Hero Image */}
          {/* <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <img
              src={heroImage}
              alt="IT Solutions"
              className="w-full h-auto rounded-2xl animate-float"
            />
          </div> */}
=======
>>>>>>> Stashed changes
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;