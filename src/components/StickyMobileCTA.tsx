import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const StickyMobileCTA = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/918306590731?text=Hi! I'm interested in your services.", "_blank");
  };

  const handleCall = () => {
    window.location.href = "tel:+918306590731";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.4 }}
      className="fixed bottom-0 left-0 right-0 z-40 p-4 bg-background/95 backdrop-blur-md border-t border-border sm:hidden"
    >
      <div className="flex gap-3">
        <Button
          onClick={handleCall}
          variant="outline"
          className="flex-1 py-5 border-2 border-foreground/20 hover:border-primary hover:text-primary font-semibold transition-all duration-300 active:scale-[0.98]"
        >
          <Phone className="w-4 h-4 mr-2" />
          Call
        </Button>
        <Button
          onClick={handleWhatsApp}
          className="flex-1 py-5 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-button transition-all duration-300 active:scale-[0.98]"
        >
          <MessageCircle className="w-4 h-4 mr-2" />
          WhatsApp
        </Button>
      </div>
    </motion.div>
  );
};

export default StickyMobileCTA;
