
import { MessageSquare } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/+2120676101074"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-luxury-maroon shadow-lg transition-all hover:scale-110 hover:shadow-xl"
      aria-label="Contact us on WhatsApp"
    >
      <MessageSquare size={24} className="text-white" />
    </a>
  );
};

export default WhatsAppButton;
