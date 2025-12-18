
const Benefits = () => {
  const benefits = [
    {
      title: "Tratamento Holístico",
      description: "Cuidamos do pet como um todo, não apenas dos sintomas",
      image: "🌟"
    },
    {
      title: "Menos Efeitos Colaterais",
      description: "Terapias naturais com menor impacto no organismo",
      image: "🍃"
    },
    {
      title: "Recuperação Mais Rápida",
      description: "Combinação de técnicas acelera o processo de cura",
      image: "⚡"
    },
    {
      title: "Prevenção Eficaz",
      description: "Fortalecimento natural do sistema imunológico",
      image: "🛡️"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-cm-blue via-cm-blue-light to-cm-blue-dark text-white relative overflow-hidden">
      {/* Parallax background elements */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-cm-red/10 rounded-full animate-parallax"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-full animate-parallax" style={{ animationDelay: '3s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            Benefícios da <span className="text-cm-red">Medicina Integrativa</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            A medicina integrativa une o melhor da medicina tradicional com terapias 
            complementares, proporcionando cuidados mais completos e eficazes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center space-y-4 p-6 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="text-5xl mb-4">{benefit.image}</div>
              <h3 className="text-xl font-semibold text-white">
                {benefit.title}
              </h3>
              <p className="text-blue-100 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 space-y-6 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <h3 className="text-2xl font-semibold">
            Pronto para conhecer os benefícios da medicina integrativa?
          </h3>
          <button 
            onClick={() => window.open("https://wa.me/5541996416800?text=Quero saber mais sobre medicina integrativa veterinária.", "_blank")}
            className="bg-gradient-to-r from-cm-red to-cm-red-light hover:from-cm-red-dark hover:to-cm-red text-white text-lg px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Quero agendar uma consulta
          </button>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
