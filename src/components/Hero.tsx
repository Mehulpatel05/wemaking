import { motion } from "framer-motion";
import { MessageCircle, Phone, Laptop, Smartphone, Code2, Palette, Settings, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/918306590731?text=Hi! I'm interested in your services.", "_blank");
  };

  const handleCall = () => {
    window.location.href = "tel:+918306590731";
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  const AnimatedWord = ({ word, delay, isHighlight = false }: { word: string; delay: number; isHighlight?: boolean }) => (
    <motion.span
      initial={{ opacity: 0, y: 60, rotateX: -90 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{
        duration: 0.8,
        delay,
        ease: "easeOut",
      }}
      className={`inline-block ${isHighlight ? "text-primary" : ""}`}
    >
      {word}
    </motion.span>
  );

  const headlineWords = ["WE", "BUILD"];
  const secondLine = ["WEBSITES"];
  const thirdLine = ["&", "APPLICATIONS"];

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-background">
      {/* Animated background gradient */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 2 }}
        className="absolute inset-0"
      >
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/3 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
      </motion.div>

      {/* Subtle background pattern */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.02 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </motion.div>

      {/* Red accent line with slide animation */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute top-0 left-0 w-full h-1 bg-gradient-hero origin-left"
      />

      <div className="container relative z-10 px-6 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-3xl mx-auto"
        >
          {/* Brand with scale animation */}
          <motion.div
            variants={itemVariants}
            className="mb-8 overflow-hidden"
          >
            <motion.span 
              initial={{ opacity: 0, letterSpacing: "0.5em" }}
              animate={{ opacity: 1, letterSpacing: "0.3em" }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-sm font-semibold tracking-[0.3em] uppercase text-primary inline-block"
            >
              we making
            </motion.span>
          </motion.div>

          {/* Animated Headline */}
          <div className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.1] mb-6 overflow-hidden">
            {/* First line: WE BUILD */}
            <motion.div className="flex justify-center gap-3 mb-2">
              {headlineWords.map((word, wordIndex) => (
                <motion.span
                  key={word}
                  initial={{ opacity: 0, y: 60, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.4 + wordIndex * 0.15,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="inline-block"
                >
                  {word}
                </motion.span>
              ))}
            </motion.div>

            {/* Second line: WEBSITES */}
            <motion.div className="flex justify-center mb-2">
              {secondLine.map((word, wordIndex) => (
                <motion.span
                  key={word}
                  initial={{ opacity: 0, y: 60, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.7 + wordIndex * 0.15,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="inline-block text-primary"
                >
                  {word}
                </motion.span>
              ))}
            </motion.div>

            {/* Third line: & APPLICATIONS */}
            <motion.div className="flex justify-center gap-3">
              {thirdLine.map((word, wordIndex) => (
                <motion.span
                  key={word}
                  initial={{ opacity: 0, y: 60, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.85 + wordIndex * 0.15,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className={`inline-block ${wordIndex === 1 ? "text-primary" : ""}`}
                >
                  {word}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Subheadline with typewriter-like reveal */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
            className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto mb-10"
          >
            <motion.span
              initial={{ backgroundSize: "0% 2px" }}
              animate={{ backgroundSize: "100% 2px" }}
              transition={{ duration: 1, delay: 1.8 }}
              className="bg-gradient-to-r from-primary/30 to-transparent bg-no-repeat bg-left-bottom"
            >
              Professional digital solutions to grow your business online.
            </motion.span>
          </motion.p>

          {/* CTAs with staggered entrance */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button
                onClick={handleWhatsApp}
                size="lg"
                className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground shadow-button transition-all duration-300 px-8 py-6 text-base font-semibold relative overflow-hidden group"
              >
                <motion.span
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: "-100%", skewX: "-15deg" }}
                  whileHover={{ x: "200%" }}
                  transition={{ duration: 0.6 }}
                />
                <MessageCircle className="w-5 h-5 mr-2 relative z-10" />
                <span className="relative z-10">WhatsApp Us</span>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button
                onClick={handleCall}
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-2 border-foreground/20 hover:border-primary hover:text-primary transition-all duration-300 px-8 py-6 text-base font-semibold"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating tech icons */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute top-[15%] left-[8%] hidden md:block"
      >
        <motion.div
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="p-4 rounded-2xl bg-card shadow-card border border-border/50"
        >
          <Laptop className="w-8 h-8 text-primary" />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.7, duration: 0.5 }}
        className="absolute top-[20%] right-[10%] hidden md:block"
      >
        <motion.div
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -8, 0]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
          className="p-3 rounded-xl bg-card shadow-card border border-border/50"
        >
          <Smartphone className="w-6 h-6 text-primary" />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.9, duration: 0.5 }}
        className="absolute top-[45%] left-[5%] hidden lg:block"
      >
        <motion.div
          animate={{ 
            y: [0, -12, 0],
            x: [0, 8, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="p-3 rounded-xl bg-primary/10 border border-primary/20"
        >
          <Code2 className="w-6 h-6 text-primary" />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2.1, duration: 0.5 }}
        className="absolute top-[50%] right-[6%] hidden lg:block"
      >
        <motion.div
          animate={{ 
            y: [0, 15, 0],
            rotate: [0, 10, 0]
          }}
          transition={{ 
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.8
          }}
          className="p-3 rounded-xl bg-card shadow-card border border-border/50"
        >
          <Palette className="w-6 h-6 text-primary" />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2.3, duration: 0.5 }}
        className="absolute bottom-[25%] left-[12%] hidden md:block"
      >
        <motion.div
          animate={{ 
            y: [0, -18, 0],
            rotate: [0, -6, 0]
          }}
          transition={{ 
            duration: 5.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
          className="p-3 rounded-xl bg-primary/10 border border-primary/20"
        >
          <Settings className="w-5 h-5 text-primary" />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2.5, duration: 0.5 }}
        className="absolute bottom-[30%] right-[12%] hidden md:block"
      >
        <motion.div
          animate={{ 
            y: [0, 12, 0],
            x: [0, -5, 0]
          }}
          transition={{ 
            duration: 4.8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="p-3 rounded-xl bg-card shadow-card border border-border/50"
        >
          <Layers className="w-5 h-5 text-primary" />
        </motion.div>
      </motion.div>

      {/* Scroll indicator with bounce */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
        >
          <motion.div 
            animate={{ 
              y: [0, 12, 0],
              opacity: [1, 0.3, 1]
            }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 rounded-full bg-primary" 
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
