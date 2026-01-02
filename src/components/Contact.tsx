import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/918306590731?text=Hi! I'm interested in your services.", "_blank");
  };

  const handleCall = () => {
    window.location.href = "tel:+918306590731";
  };

  const handleEmail = () => {
    window.location.href = "mailto:swatmehul@gmail.com";
  };

  return (
    <section id="contact" className="py-20 bg-secondary/50">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-4 block">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Let's Start Your Project
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Ready to transform your business? Reach out to us today.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-md mx-auto space-y-4"
        >
          {/* Phone */}
          <button
            onClick={handleCall}
            className="w-full flex items-center gap-4 p-4 bg-card rounded-lg border border-border/50 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300 group"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
              <Phone className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
            </div>
            <div className="text-left">
              <p className="text-sm text-muted-foreground">Phone</p>
              <p className="font-semibold text-foreground">+91-8306590731</p>
            </div>
          </button>

          {/* Email */}
          <button
            onClick={handleEmail}
            className="w-full flex items-center gap-4 p-4 bg-card rounded-lg border border-border/50 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300 group"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
              <Mail className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
            </div>
            <div className="text-left">
              <p className="text-sm text-muted-foreground">Email</p>
              <p className="font-semibold text-foreground">swatmehul@gmail.com</p>
            </div>
          </button>

          {/* WhatsApp CTA */}
          <Button
            onClick={handleWhatsApp}
            size="lg"
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-button transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] py-6 text-base font-semibold mt-6"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Message on WhatsApp
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
