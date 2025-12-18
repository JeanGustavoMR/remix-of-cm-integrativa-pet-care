import { Target, Sparkles, Home, Stethoscope, Users, CheckCircle } from "lucide-react";

const About = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-12 sm:mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-cm-blue/10 rounded-full text-cm-blue text-sm font-medium">
              <Sparkles className="h-4 w-4" />
              Quem Somos
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
              Sobre a <span className="text-cm-red">CM Integrativa</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Somos uma clínica veterinária especializada em medicina tradicional e integrativa, 
              oferecendo cuidados completos com uma abordagem holística para a saúde do seu pet.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cm-blue/10 rounded-xl">
                    <Target className="h-6 w-6 text-cm-blue" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Nossa Missão
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Proporcionar o melhor cuidado veterinário através da combinação entre 
                      medicina tradicional e terapias integrativas, sempre com foco no bem-estar 
                      animal e atendimento humanizado.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cm-red/10 rounded-xl">
                    <Sparkles className="h-6 w-6 text-cm-red" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Nossos Diferenciais
                    </h3>
                    <ul className="space-y-3">
                      {[
                        { icon: Home, text: "Atendimento domiciliar com busca e entrega" },
                        { icon: Stethoscope, text: "Medicina integrativa e tratamentos alternativos" },
                        { icon: Users, text: "Equipe especializada e experiente" }
                      ].map((item, index) => (
                        <li key={index} className="flex items-center gap-3 text-gray-600">
                          <div className="p-1.5 bg-cm-red/10 rounded-lg">
                            <item.icon className="h-4 w-4 text-cm-red" />
                          </div>
                          {item.text}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=500&h=400&fit=crop" 
                alt="Gatinho sendo cuidado"
                className="rounded-2xl shadow-xl w-full object-cover"
              />
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-cm-red to-cm-red-light text-white p-5 rounded-2xl shadow-xl">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-8 w-8" />
                  <div>
                    <div className="text-2xl font-bold">15+ Anos</div>
                    <div className="text-sm text-white/90">de Experiência</div>
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

export default About;