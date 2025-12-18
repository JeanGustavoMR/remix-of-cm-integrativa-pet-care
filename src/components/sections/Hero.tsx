import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Award, Users, Heart } from "lucide-react";

const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5541996416800?text=Olá! Gostaria de agendar uma consulta para meu pet.", "_blank");
  };

  const handleCallClick = () => {
    window.open("tel:+554136667080", "_self");
  };

  return (
    <section className="relative bg-gradient-to-br from-cm-blue via-cm-blue-light to-sky-200 min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-cm-blue/30 to-transparent" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-parallax" />
      <div className="absolute bottom-32 right-20 w-24 h-24 bg-cm-red/20 rounded-full blur-xl animate-parallax" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-white/15 rounded-full blur-lg animate-parallax" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 lg:space-y-8 animate-fade-in text-white">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                <Heart className="h-4 w-4 text-cm-red" />
                Medicina Integrativa Veterinária
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Cuidado <span className="text-cm-red">Integral</span> 
                <br />para seu Pet
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed max-w-xl">
                Medicina veterinária tradicional e integrativa com atendimento humanizado 
                e tratamentos inovadores para o bem-estar total do seu companheiro.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button 
                onClick={handleWhatsAppClick}
                size="lg"
                className="bg-gradient-to-r from-cm-red to-cm-red-light hover:from-cm-red-dark hover:to-cm-red text-white text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <MessageCircle className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6" />
                Agendar Consulta
              </Button>
              
              <Button 
                onClick={handleCallClick}
                size="lg"
                className="bg-white/20 backdrop-blur-sm border-2 border-white/40 text-white hover:bg-white hover:text-cm-blue text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Phone className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6" />
                (41) 3666-7080
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-6 sm:pt-8">
              <div className="text-center p-3 sm:p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                <Award className="h-6 w-6 sm:h-8 sm:w-8 text-cm-red mx-auto mb-2" />
                <div className="text-2xl sm:text-3xl font-bold">15+</div>
                <div className="text-xs sm:text-sm text-white/80">Anos de experiência</div>
              </div>
              <div className="text-center p-3 sm:p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                <Users className="h-6 w-6 sm:h-8 sm:w-8 text-cm-red mx-auto mb-2" />
                <div className="text-2xl sm:text-3xl font-bold">5000+</div>
                <div className="text-xs sm:text-sm text-white/80">Pets atendidos</div>
              </div>
              <div className="text-center p-3 sm:p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                <Heart className="h-6 w-6 sm:h-8 sm:w-8 text-cm-red mx-auto mb-2" />
                <div className="text-2xl sm:text-3xl font-bold">100%</div>
                <div className="text-xs sm:text-sm text-white/80">Dedicação</div>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in hidden lg:block" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=600&h=600&fit=crop" 
                alt="Gatinho sendo examinado por veterinário"
                className="rounded-3xl shadow-2xl w-full max-w-lg mx-auto object-cover"
              />
              <div className="absolute -bottom-4 -left-4 bg-white text-cm-blue p-4 sm:p-5 rounded-2xl shadow-xl">
                <div className="flex items-center gap-3">
                  <Heart className="h-8 w-8 text-cm-red" />
                  <div>
                    <div className="text-lg sm:text-xl font-bold">Atendimento Humanizado</div>
                    <div className="text-sm text-gray-600">Cuidado e carinho em primeiro lugar</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;