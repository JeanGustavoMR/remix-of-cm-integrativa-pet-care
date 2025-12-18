
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5541996416800?text=Olá! Gostaria de agendar uma consulta para meu pet.", "_blank");
  };

  const handleCallClick = () => {
    window.open("tel:+554136667080", "_self");
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Telefones",
      info: ["(41) 3666-7080", "(41) 99641-6800"],
      action: handleCallClick
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "WhatsApp",
      info: ["(41) 99641-6800"],
      action: handleWhatsAppClick
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Funcionamento",
      info: ["Seg-Sex: 8h às 18h", "Sáb: 8h às 12h", "Emergências: 24h"],
      action: null
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#001f3f] to-[#003366] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Entre em <span className="text-[#e63946]">Contato</span>
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Estamos prontos para cuidar do seu pet. Entre em contato conosco 
            e agende uma consulta.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="grid gap-6">
              {contactInfo.map((contact, index) => (
                <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-[#e63946] rounded-lg">
                        {contact.icon}
                      </div>
                      <div className="space-y-2 flex-1">
                        <h3 className="text-xl font-semibold">{contact.title}</h3>
                        {contact.info.map((info, idx) => (
                          <p key={idx} className="text-gray-200">{info}</p>
                        ))}
                        {contact.action && (
                          <Button 
                            onClick={contact.action}
                            variant="outline"
                            className="mt-3 border-white text-white hover:bg-white hover:text-[#001f3f]"
                          >
                            Entrar em contato
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-[#e63946] rounded-lg">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Localização</h3>
                  <p className="text-gray-200 leading-relaxed">
                    Estamos localizados em uma região de fácil acesso, 
                    com estacionamento próprio para maior comodidade.
                  </p>
                  <Button 
                    variant="outline"
                    className="mt-3 border-white text-white hover:bg-white hover:text-[#001f3f]"
                    onClick={() => window.open("https://maps.google.com", "_blank")}
                  >
                    Ver no mapa
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <h3 className="text-2xl font-bold mb-6 text-center">
                Agende sua consulta agora!
              </h3>
              
              <div className="space-y-6">
                <div className="text-center space-y-4">
                  <p className="text-gray-200">
                    Clique no botão abaixo e inicie uma conversa conosco pelo WhatsApp. 
                    É rápido, fácil e você pode tirar todas as suas dúvidas.
                  </p>
                  
                  <Button 
                    onClick={handleWhatsAppClick}
                    size="lg"
                    className="w-full bg-[#e63946] hover:bg-[#d62639] text-white text-lg py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <MessageCircle className="mr-3 h-6 w-6" />
                    Conversar no WhatsApp
                  </Button>
                </div>

                <div className="text-center">
                  <p className="text-sm text-gray-300 mb-4">Ou ligue diretamente:</p>
                  <Button 
                    onClick={handleCallClick}
                    variant="outline"
                    size="lg"
                    className="border-2 border-white text-white hover:bg-white hover:text-[#001f3f] px-8 py-3 rounded-full"
                  >
                    <Phone className="mr-3 h-5 w-5" />
                    (41) 3666-7080
                  </Button>
                </div>
              </div>
            </div>

            <div className="bg-[#e63946] p-6 rounded-xl">
              <h4 className="text-xl font-semibold mb-3">Emergências 24h</h4>
              <p className="text-white/90 mb-4">
                Para emergências fora do horário comercial, 
                entre em contato pelo WhatsApp ou telefone.
              </p>
              <div className="text-lg font-semibold">
                📞 (41) 99641-6800
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
