
const Infrastructure = () => {
  const features = [
    {
      title: "Centro Cirúrgico Moderno",
      description: "Equipamentos de última geração para cirurgias seguras",
      image: "🏥"
    },
    {
      title: "UTI Veterinária",
      description: "Cuidados intensivos 24h para casos críticos",
      image: "❤️"
    },
    {
      title: "Laboratório Próprio",
      description: "Exames rápidos e precisos para diagnósticos eficazes",
      image: "🔬"
    },
    {
      title: "Internação Confortável",
      description: "Ambientes climatizados e monitoramento constante",
      image: "🛏️"
    },
    {
      title: "Sala de Estética",
      description: "Espaço dedicado para banho, tosa e cuidados estéticos",
      image: "✨"
    },
    {
      title: "Farmácia Completa",
      description: "Medicamentos tradicionais e produtos naturais",
      image: "💊"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#001f3f]">
            Nossa <span className="text-[#e63946]">Estrutura</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Contamos com uma infraestrutura completa e moderna para oferecer 
            os melhores cuidados veterinários em um ambiente acolhedor.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-4xl mb-4 text-center">{feature.image}</div>
              <h3 className="text-xl font-semibold text-[#001f3f] mb-3 text-center">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-[#001f3f]">
                Ambiente Pensado para o Bem-Estar
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Nossa clínica foi projetada para reduzir o estresse dos animais, 
                com ambientes calmos, iluminação adequada e áreas separadas para 
                diferentes tipos de atendimento.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#e63946] rounded-full mr-3"></span>
                  Salas de consulta climatizadas
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#e63946] rounded-full mr-3"></span>
                  Área de recreação para pets
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#e63946] rounded-full mr-3"></span>
                  Estacionamento exclusivo
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#e63946] rounded-full mr-3"></span>
                  Recepção acolhedora
                </li>
              </ul>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?w=500&h=400&fit=crop" 
                alt="Ambiente da clínica veterinária"
                className="rounded-xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Infrastructure;
