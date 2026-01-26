import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import aboutImage from "@/assets/about-team.png";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().min(1, "Email is required").email("Invalid email address").max(255, "Email must be less than 255 characters"),
  message: z.string().trim().min(1, "Message is required").max(1000, "Message must be less than 1000 characters"),
});

type FormData = z.infer<typeof contactSchema>;

const About = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const result = contactSchema.safeParse(formData);
    
    if (!result.success) {
      const fieldErrors: Partial<FormData> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as keyof FormData] = err.message;
        }
      });
      setErrors(fieldErrors);
      setIsSubmitting(false);
      return;
    }

    // TODO: Integrate EmailJS here
    toast({
      title: "Message Sent!",
      description: "We'll get back to you soon.",
    });
    
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

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
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name *"
                  className={`w-full px-4 py-3 rounded-lg bg-card text-foreground placeholder:text-muted-foreground border-2 ${errors.name ? 'border-destructive' : 'border-transparent'} focus:ring-2 focus:ring-primary/50 outline-none`}
                />
                {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email *"
                  className={`w-full px-4 py-3 rounded-lg bg-card text-foreground placeholder:text-muted-foreground border-2 ${errors.email ? 'border-destructive' : 'border-transparent'} focus:ring-2 focus:ring-primary/50 outline-none`}
                />
                {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message *"
                  rows={4}
                  className={`w-full px-4 py-3 rounded-lg bg-card text-foreground placeholder:text-muted-foreground border-2 ${errors.message ? 'border-destructive' : 'border-transparent'} focus:ring-2 focus:ring-primary/50 outline-none resize-none`}
                />
                {errors.message && <p className="text-destructive text-sm mt-1">{errors.message}</p>}
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-card text-primary hover:bg-card/90"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
