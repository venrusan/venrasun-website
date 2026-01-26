import { Button } from "@/components/ui/button";
import { ArrowLeft, Users, Target, Lightbulb, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";
import aboutImage from "@/assets/about-team.png";

const AboutDetail = () => {
  const navigate = useNavigate();

  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "We are committed to delivering solutions that drive real business impact and transformation.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Constantly exploring new technologies and methodologies to stay ahead of the curve.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working closely with clients to understand their needs and deliver tailored solutions.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Maintaining the highest standards in quality, reliability, and customer service.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-card/95 backdrop-blur-sm border-b border-border py-4">
        <div className="container mx-auto px-4 flex items-center gap-4">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back</span>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 to-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              About VenRaSun
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transforming ideas into impactful technology solutions that drive business growth and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Text */}
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Who We Are
              </h2>
              <p className="text-muted-foreground mb-4 text-lg">
                VenRaSun is a leading technology solutions provider dedicated to delivering innovative and reliable services that help businesses achieve their digital transformation goals.
              </p>
              <p className="text-muted-foreground mb-4 text-lg">
                With a team of experienced professionals, we specialize in custom software development, data analytics, cloud solutions, and cybersecurity services. Our commitment to excellence and customer satisfaction sets us apart in the industry.
              </p>
              <p className="text-muted-foreground text-lg">
                We believe in the power of technology to transform businesses and create lasting value for our clients. Every project is an opportunity to demonstrate our expertise and dedication to success.
              </p>
            </div>

            {/* Image */}
            <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <img
                src={aboutImage}
                alt="Our Team"
                className="w-full h-full object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Core Values
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                These principles guide everything we do and shape our company culture.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div
                    key={value.title}
                    className="bg-card rounded-2xl border border-border p-8 hover:shadow-lg transition-all animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="mb-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
                        <Icon size={24} className="text-primary" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-primary/10 rounded-2xl p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto">
              Get in touch with our team and let's discuss how we can help you achieve your business goals.
            </p>
            <Button
              size="lg"
              onClick={() => {
                navigate("/#contact");
                window.location.hash = "contact";
              }}
            >
              Contact Us Today
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutDetail;
