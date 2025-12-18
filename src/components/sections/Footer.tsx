import { Phone, MessageCircle, MapPin, Clock, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5541996416800", "_blank");
  };

  const handleCallClick = () => {
    window.open("tel:+554136667080", "_self");
  };

  const handleMapClick = () => {
    window.open("https://maps.google.com/?q=R. Maiorca, 85 - Parque Res. Santa Terezinha, Colombo - PR, 83408-600", "_blank");
  };

  return (
    <footer className="bg-gradient-to-br from-cm-blue to-cm-blue-dark text-white py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2">
              <Heart className="h-6 w-6 text-cm-red" />
              <h3 className="text-2xl font-bold">CM Integrativa</h3>
            </div>
            <p className="text-white/80 leading-relaxed">
              Medicina veterinária tradicional e integrativa com atendimento 
              humanizado para o bem-estar total do seu pet.
            </p>
            <div className="flex gap-3">
              <button 
                onClick={handleWhatsAppClick}
                className="p-3 bg-gradient-to-r from-cm-red to-cm-red-light rounded-xl hover:from-cm-red-dark hover:to-cm-red transition-all duration-300 transform hover:scale-105 shadow-lg"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </button>
              <button 
                onClick={handleCallClick}
                className="p-3 bg-white/20 backdrop-blur-sm rounded-xl hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
                aria-label="Telefone"
              >
                <Phone className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Serviços</h4>
            <ul className="space-y-2 text-white/80">
              <li className="hover:text-white transition-colors cursor-pointer">Consultas e Exames</li>
              <li className="hover:text-white transition-colors cursor-pointer">Cirurgias Ortopédicas</li>
              <li className="hover:text-white transition-colors cursor-pointer">Medicina Integrativa</li>
              <li className="hover:text-white transition-colors cursor-pointer">Atendimento Domiciliar</li>
              <li className="hover:text-white transition-colors cursor-pointer">Hospital Veterinário</li>
              <li className="hover:text-white transition-colors cursor-pointer">Estética Animal</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold flex items-center gap-2">
              <Clock className="h-4 w-4" />
              Horário de Funcionamento
            </h4>
            <div className="space-y-1 text-white/80 text-sm">
              <div className="flex justify-between">
                <span>Seg - Sex</span>
                <span>08:30 - 17:30</span>
              </div>
              <div className="flex justify-between">
                <span>Sábado</span>
                <span>08:30 - 10:30</span>
              </div>
              <div className="flex justify-between">
                <span>Domingo</span>
                <span>Fechado</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contato</h4>
            <div className="space-y-3 text-white/80">
              <button 
                onClick={handleCallClick}
                className="flex items-center gap-3 hover:text-cm-red transition-colors duration-300 w-full text-left group"
              >
                <div className="p-2 bg-white/10 rounded-lg group-hover:bg-cm-red/20 transition-colors">
                  <Phone className="h-4 w-4" />
                </div>
                <span>(41) 3666-7080</span>
              </button>
              <button 
                onClick={handleWhatsAppClick}
                className="flex items-center gap-3 hover:text-cm-red transition-colors duration-300 w-full text-left group"
              >
                <div className="p-2 bg-white/10 rounded-lg group-hover:bg-cm-red/20 transition-colors">
                  <MessageCircle className="h-4 w-4" />
                </div>
                <span>(41) 99641-6800</span>
              </button>
              <button 
                onClick={handleMapClick}
                className="flex items-start gap-3 hover:text-cm-red transition-colors duration-300 w-full text-left group"
              >
                <div className="p-2 bg-white/10 rounded-lg group-hover:bg-cm-red/20 transition-colors mt-0.5">
                  <MapPin className="h-4 w-4" />
                </div>
                <span className="text-sm leading-relaxed">R. Maiorca, 85 - Parque Res. Santa Terezinha, Colombo - PR</span>
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-10 pt-8 text-center">
          <p className="text-white/70">
            © {currentYear} CM Integrativa - Clínica Veterinária. 
            Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;