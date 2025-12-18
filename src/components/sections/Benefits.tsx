import { Sparkles, Leaf, Zap, Shield, MessageCircle, Heart } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      title: "Tratamento Holístico",
      description: "Cuidamos do pet como um todo, não apenas dos sintomas",
      icon: Sparkles
    },
    {
      title: "Menos Efeitos Colaterais",
      description: "Terapias naturais com menor impacto no organismo",
      icon: Leaf
    },
    {
      title: "Recuperação Mais Rápida",
      description: "Combinação de técnicas acelera o processo de cura",
      icon: Zap
    },
    {
      title: "Prevenção Eficaz",
      description: "Fortalecimento natural do sistema imunológico",
      icon: Shield
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-cm-blue via-cm-blue-light to-cm-blue-dark text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-white/5 rounded-full blur-2xl animate-parallax" />
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-cm-red/10 rounded-full blur-2xl animate-parallax" style={{ animationDelay: '3s' }} />
      <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-white/10 rounded-full blur-xl animate-parallax" style={{ animationDelay: '1.5s' }} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-4 mb-12 sm:mb-16 animate-fade-in">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
            <Heart className="h-4 w-4 text-cm-red" />
            Por que escolher
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Benefícios da <span className="text-cm-red">Medicina Integrativa</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto">
            A medicina integrativa une o melhor da medicina tradicional com terapias 
            complementares, proporcionando cuidados mais completos e eficazes.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div 
                key={index} 
                className="text-center space-y-4 p-6 rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 animate-fade-in border border-white/10" 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-4 bg-white/20 rounded-2xl w-fit mx-auto">
                  <IconComponent className="h-8 w-8 text-cm-red" />
                </div>
                <h3 className="text-xl font-semibold">
                  {benefit.title}
                </h3>
                <p className="text-white/80 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12 sm:mt-16 space-y-6 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <h3 className="text-xl sm:text-2xl font-semibold">
            Pronto para conhecer os benefícios da medicina integrativa?
          </h3>
          <button 
            onClick={() => window.open("https://wa.me/5541996416800?text=Quero saber mais sobre medicina integrativa veterinária.", "_blank")}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-cm-red to-cm-red-light hover:from-cm-red-dark hover:to-cm-red text-white text-base sm:text-lg px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <MessageCircle className="h-5 w-5" />
            Quero agendar uma consulta
          </button>
        </div>
      </div>
    </section>
  );
};

export default Benefits;