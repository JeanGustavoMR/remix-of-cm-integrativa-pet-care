
import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";

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
    <footer className="bg-gradient-to-br from-cm-blue to-cm-blue-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-cm-red">
              CM Integrativa
            </h3>
            <p className="text-blue-100 leading-relaxed">
              Medicina veterinária tradicional e integrativa com atendimento 
              humanizado para o bem-estar total do seu pet.
            </p>
            <div className="flex space-x-4">
              <button 
                onClick={handleWhatsAppClick}
                className="p-2 bg-gradient-to-r from-cm-red to-cm-red-light rounded-lg hover:from-cm-red-dark hover:to-cm-red transition-all duration-300 transform hover:scale-105"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </button>
              <button 
                onClick={handleCallClick}
                className="p-2 bg-gradient-to-r from-cm-red to-cm-red-light rounded-lg hover:from-cm-red-dark hover:to-cm-red transition-all duration-300 transform hover:scale-105"
                aria-label="Telefone"
              >
                <Phone className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Serviços</h4>
            <ul className="space-y-2 text-blue-100">
              <li>Consultas e Exames</li>
              <li>Cirurgias Ortopédicas</li>
              <li>Medicina Integrativa</li>
              <li>Atendimento Domiciliar</li>
              <li>Hospital 24h</li>
              <li>Estética Animal</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              Horário de Funcionamento
            </h4>
            <div className="space-y-1 text-blue-100 text-sm">
              <div>Segunda-feira: 08:30–17:30</div>
              <div>Terça-feira: 08:30–17:30</div>
              <div>Quarta-feira: 08:30–17:30</div>
              <div>Quinta-feira: 08:30–17:30</div>
              <div>Sexta-feira: 08:30–17:30</div>
              <div>Sábado: 08:30–10:30</div>
              <div>Domingo: Fechado</div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contato</h4>
            <div className="space-y-3 text-blue-100">
              <button 
                onClick={handleCallClick}
                className="flex items-center space-x-2 hover:text-cm-red transition-colors duration-300 w-full text-left"
              >
                <Phone className="h-4 w-4" />
                <span>(41) 3666-7080</span>
              </button>
              <button 
                onClick={handleWhatsAppClick}
                className="flex items-center space-x-2 hover:text-cm-red transition-colors duration-300 w-full text-left"
              >
                <MessageCircle className="h-4 w-4" />
                <span>(41) 99641-6800</span>
              </button>
              <button 
                onClick={handleMapClick}
                className="flex items-start space-x-2 hover:text-cm-red transition-colors duration-300 w-full text-left"
              >
                <MapPin className="h-4 w-4 mt-1" />
                <span>R. Maiorca, 85 - Parque Res. Santa Terezinha<br />Colombo - PR, 83408-600</span>
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-400/30 mt-8 pt-8 text-center">
          <p className="text-blue-200">
            © {currentYear} CM Integrativa - Clínica Veterinária. 
            Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
