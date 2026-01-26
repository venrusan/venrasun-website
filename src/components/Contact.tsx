import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

// Initialize EmailJS (make sure to set up your EmailJS account and add your service ID)
// You can initialize with: emailjs.init("YOUR_PUBLIC_KEY");

const Contact = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      // Check if EmailJS is initialized
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

      if (!publicKey || !serviceId || !templateId) {
        throw new Error("EmailJS configuration is missing");
      }

      emailjs.init(publicKey);

      const result = await emailjs.send(serviceId, templateId, {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: "contact@venrasun.com",
      });

      if (result.status === 200) {
        toast({
          title: "Success",
          description: "Your message has been sent successfully. We'll get back to you soon!",
        });

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      }
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can help you achieve
            your business goals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Contact Info Cards */}
          <div className="bg-card rounded-lg border border-border p-6 text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Mail className="w-6 h-6 text-primary" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Email</h3>
            <a
              href="mailto:contact@venrasun.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              contact@venrasun.com
            </a>
          </div>

          <div className="bg-card rounded-lg border border-border p-6 text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Phone className="w-6 h-6 text-primary" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Phone</h3>
            <a
              href="tel:+1234567890"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              +1 (234) 567-890
            </a>
          </div>

          <div className="bg-card rounded-lg border border-border p-6 text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Location
            </h3>
            <p className="text-muted-foreground">
              123 Business Street, City, Country
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto bg-card rounded-lg border border-border p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                Subject
              </label>
              <Input
                id="subject"
                name="subject"
                type="text"
                placeholder="Project inquiry"
                value={formData.subject}
                onChange={handleChange}
                className="w-full"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell us about your project..."
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full resize-none"
              />
            </div>

            <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg p-4 flex gap-3">
              <AlertCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-blue-700 dark:text-blue-300">
                To enable email notifications, configure your EmailJS credentials in the environment variables.
              </p>
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full"
              size="lg"
            >
              {isLoading ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
