import { motion } from "framer-motion";
import { Target, Zap, DollarSign, Headphones } from "lucide-react";

const reasons = [
  {
    icon: Target,
    title: "Conversion-Focused Design",
    description: "Every element designed to turn visitors into customers.",
  },
  {
    icon: Zap,
    title: "Fast & Scalable Development",
    description: "Quick turnaround with future-proof technology.",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description: "No hidden costs. Clear quotes upfront.",
  },
  {
    icon: Headphones,
    title: "Support After Delivery",
    description: "Ongoing assistance to keep you running smoothly.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-4 block">
            Why Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Why Choose We Making
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start gap-4"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <reason.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-foreground mb-1">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
