
const About = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-[#001f3f]">
              Sobre a <span className="text-[#e63946]">CM Integrativa</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Somos uma clínica veterinária especializada em medicina tradicional e integrativa, 
              oferecendo cuidados completos com uma abordagem holística para a saúde do seu pet.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-left">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-[#001f3f]">
                  Nossa Missão
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Proporcionar o melhor cuidado veterinário através da combinação entre 
                  medicina tradicional e terapias integrativas, sempre com foco no bem-estar 
                  animal e atendimento humanizado.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-[#001f3f]">
                  Diferenciais
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#e63946] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Atendimento domiciliar com busca e entrega
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#e63946] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Medicina integrativa e tratamentos alternativos
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#e63946] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Hospital 24h para emergências
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#e63946] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Equipe especializada e experiente
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=500&h=400&fit=crop" 
                alt="Gatinho sendo cuidado"
                className="rounded-xl shadow-lg w-full"
              />
              <div className="absolute -bottom-4 -right-4 bg-[#e63946] text-white p-4 rounded-lg shadow-lg">
                <div className="text-lg font-semibold">15+ Anos</div>
                <div className="text-sm">de Experiência</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
