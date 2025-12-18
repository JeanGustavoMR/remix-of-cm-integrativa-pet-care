
import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5541996416800?text=Olá! Gostaria de agendar uma consulta para meu pet.", "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button 
        onClick={handleWhatsAppClick}
        className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 animate-pulse"
        aria-label="Conversar no WhatsApp"
      >
        <MessageCircle className="h-8 w-8" />
      </button>
    </div>
  );
};

export default WhatsAppFloat;
