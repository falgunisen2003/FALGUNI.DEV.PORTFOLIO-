import { FormEvent, useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });

      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="relative bg-secondary/30 px-4 py-24">
      <div className="container mx-auto max-w-5xl">
        <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="mb-6 text-2xl font-semibold">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <Mail className="h-6 w-6 text-primary" />
                </div>

                <div>
                  <h4 className="font-medium">Email</h4>

                  <a
                    href="mailto:falgunisen0@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors break-all text-center"
                  >
                    falgunisen0@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <Phone className="h-6 w-6 text-primary" />
                </div>

                <div>
                  <h4 className="font-medium">Phone</h4>

                  <a
                    href="tel: +91 9907274665"
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    9907274665
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>

                <div>
                  <h4 className="font-medium">Location</h4>

                  <span className="text-muted-foreground">
                    kolkata,west bengal
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="mb-4 font-medium">Connect With Me</h4>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href="https://www.linkedin.com/in/falguni-sen-558118277?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border p-3 transition-all duration-300 hover:scale-110 hover:border-primary hover:text-primary"
                >
                  <FaLinkedin size={22} />
                </a>

                <a
                  href="https://github.com/falgunisen2003"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border p-3 transition-all duration-300 hover:scale-110 hover:border-primary hover:text-primary"
                >
                  <FaGithub size={22} />
                </a>

                <a
                  href="https://www.instagram.com/urrr__sunflower__?igsh=MXU1ZzR4ZTh6bGhidA=="
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border p-3 transition-all duration-300 hover:scale-110 hover:border-primary hover:text-primary"
                >
                  <FaInstagram size={22} />
                </a>

                <a
                  href="https://www.facebook.com/share/1J4ZbHAmC3/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border p-3 transition-all duration-300 hover:scale-110 hover:border-primary hover:text-primary"
                >
                  <FaFacebook size={22} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-lg bg-card p-8 shadow-xs">
            <h3 className="mb-6 text-2xl font-semibold">Send a Message</h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium"
                >
                  Your Name
                </label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Falguni Sen..."
                  className="w-full rounded-md border border-input bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium"
                >
                  Your Email
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="falgunisen0@gmail.com"
                  className="w-full rounded-md border border-input bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium"
                >
                  Your Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Hello, I'd like to talk about..."
                  className="w-full resize-none rounded-md border border-input bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button flex w-full items-center justify-center gap-2",
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}

                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
