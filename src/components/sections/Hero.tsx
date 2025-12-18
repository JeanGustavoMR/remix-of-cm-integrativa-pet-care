
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";

const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5541996416800?text=Olá! Gostaria de agendar uma consulta para meu pet.", "_blank");
  };

  const handleCallClick = () => {
    window.open("tel:+554136667080", "_self");
  };

  return (
    <section className="relative bg-gradient-to-br from-cm-blue via-cm-blue-light to-white text-white min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-cm-blue/20 to-transparent"></div>
      
      {/* Parallax background elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-cm-red/10 rounded-full animate-parallax"></div>
      <div className="absolute bottom-32 right-20 w-24 h-24 bg-cm-blue-light/20 rounded-full animate-parallax" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Cuidado <span className="text-cm-red">Integral</span> 
                <br />para seu Pet
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
                Medicina veterinária tradicional e integrativa com atendimento humanizado 
                e tratamentos inovadores para o bem-estar total do seu companheiro.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={handleWhatsAppClick}
                size="lg"
                className="bg-gradient-to-r from-cm-red to-cm-red-light hover:from-cm-red-dark hover:to-cm-red text-white text-lg px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <MessageCircle className="mr-3 h-6 w-6" />
                Fale com um veterinário agora
              </Button>
              
              <Button 
                onClick={handleCallClick}
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-cm-blue text-lg px-8 py-6 rounded-full transition-all duration-300"
              >
                <Phone className="mr-3 h-6 w-6" />
                (41) 3666-7080
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-cm-red">15+</div>
                <div className="text-sm text-blue-100">Anos de experiência</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cm-red">5000+</div>
                <div className="text-sm text-blue-100">Pets atendidos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cm-red">24h</div>
                <div className="text-sm text-blue-100">Emergências</div>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <img 
              src="https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=600&h=600&fit=crop" 
              alt="Gatinho sendo examinado por veterinário"
              className="rounded-2xl shadow-2xl w-full max-w-lg mx-auto"
            />
            <div className="absolute -bottom-6 -left-6 bg-white text-cm-blue p-6 rounded-xl shadow-lg">
              <div className="text-2xl font-bold">Atendimento Humanizado</div>
              <div className="text-sm">Cuidado e carinho em primeiro lugar</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
