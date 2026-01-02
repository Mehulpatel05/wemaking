import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Requirement Discussion",
    description: "We understand your vision and goals.",
  },
  {
    number: "02",
    title: "Design & Approval",
    description: "Beautiful mockups for your review.",
  },
  {
    number: "03",
    title: "Development",
    description: "Bringing designs to life with clean code.",
  },
  {
    number: "04",
    title: "Delivery & Support",
    description: "Launch and ongoing assistance.",
  },
];

const Process = () => {
  return (
    <section className="py-20 bg-secondary/50">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-4 block">
            How We Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Our Process
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden sm:block" />

            <div className="space-y-8">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative flex items-start gap-6"
                >
                  {/* Number circle */}
                  <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                    {step.number}
                  </div>

                  {/* Content */}
                  <div className="pt-2">
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
