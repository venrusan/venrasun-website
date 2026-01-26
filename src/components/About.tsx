import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import aboutImage from "@/assets/about-team.png";

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {/* About Text */}
          <div className="flex flex-col justify-center animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              About Us
            </h2>
            <p className="text-muted-foreground mb-4">
              <span className="font-semibold text-foreground">VenRaSun</span> delivers reliable and innovative
              technology solutions that drive digital transformation.
            </p>
            <p className="text-muted-foreground mb-6">
              Learn more about our mission.
            </p>
            <Button variant="default" className="w-fit">
              Read More
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Image */}
          <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <img
              src={aboutImage}
              alt="Our Team"
              className="w-full h-full object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* Contact Form */}
          <div
            id="contact"
            className="bg-contact-bg rounded-2xl p-8 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <h3 className="text-2xl font-bold text-primary-foreground mb-6">
              Contact Us
            </h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg bg-card text-foreground placeholder:text-muted-foreground border-0 focus:ring-2 focus:ring-primary/50 outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg bg-card text-foreground placeholder:text-muted-foreground border-0 focus:ring-2 focus:ring-primary/50 outline-none"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-card text-foreground placeholder:text-muted-foreground border-0 focus:ring-2 focus:ring-primary/50 outline-none resize-none"
              />
              <Button
                type="submit"
                className="w-full bg-card text-primary hover:bg-card/90"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
