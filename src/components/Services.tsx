import { motion } from "framer-motion";
import { Monitor, Smartphone, Palette, ShoppingCart } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Website Design & Development",
    description: "Custom websites that convert visitors into customers.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native Android & iOS apps for your business.",
  },
  {
    icon: Palette,
    title: "UI/UX & Branding",
    description: "Beautiful interfaces and memorable brand identities.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    description: "Online stores that drive sales and growth.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-secondary/50">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-4 block">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Our Services
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="group relative bg-card rounded-lg p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 h-full border border-border/50">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                    <service.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
