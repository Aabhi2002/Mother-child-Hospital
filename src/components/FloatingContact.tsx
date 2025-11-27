import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingContact = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <Button
        variant="coral"
        size="icon"
        className="h-14 w-14 rounded-full shadow-medium hover:scale-110 transition-smooth"
        asChild
      >
        <a href="tel:+1234567890" aria-label="Call us">
          <Phone className="h-6 w-6" />
        </a>
      </Button>
      
      <Button
        variant="accent"
        size="icon"
        className="h-14 w-14 rounded-full shadow-medium hover:scale-110 transition-smooth"
        asChild
      >
        <a 
          href="https://wa.me/1234567890" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="WhatsApp us"
        >
          <MessageCircle className="h-6 w-6" />
        </a>
      </Button>
    </div>
  );
};

export default FloatingContact;
