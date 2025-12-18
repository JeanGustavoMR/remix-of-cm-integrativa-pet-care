import { Building2, Heart, FlaskConical, Bed, Sparkles, Pill, Thermometer, PawPrint, Car, Coffee, CheckCircle } from "lucide-react";

const Infrastructure = () => {
  const features = [
    {
      title: "Centro Cirúrgico Moderno",
      description: "Equipamentos de última geração para cirurgias seguras",
      icon: Building2
    },
    {
      title: "UTI Veterinária",
      description: "Cuidados intensivos para casos críticos",
      icon: Heart
    },
    {
      title: "Laboratório Próprio",
      description: "Exames rápidos e precisos para diagnósticos eficazes",
      icon: FlaskConical
    },
    {
      title: "Internação Confortável",
      description: "Ambientes climatizados e monitoramento constante",
      icon: Bed
    },
    {
      title: "Sala de Estética",
      description: "Espaço dedicado para banho, tosa e cuidados estéticos",
      icon: Sparkles
    },
    {
      title: "Farmácia Completa",
      description: "Medicamentos tradicionais e produtos naturais",
      icon: Pill
    }
  ];

  const amenities = [
    { icon: Thermometer, text: "Salas de consulta climatizadas" },
    { icon: PawPrint, text: "Área de recreação para pets" },
    { icon: Car, text: "Estacionamento exclusivo" },
    { icon: Coffee, text: "Recepção acolhedora" }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-cm-blue/10 rounded-full text-cm-blue text-sm font-medium">
            <Building2 className="h-4 w-4" />
            Infraestrutura
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Nossa <span className="text-cm-red">Estrutura</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Contamos com uma infraestrutura completa e moderna para oferecer 
            os melhores cuidados veterinários em um ambiente acolhedor.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index} 
                className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
              >
                <div className="p-3 bg-gradient-to-br from-cm-blue/10 to-cm-red/10 rounded-xl w-fit mb-4">
                  <IconComponent className="h-7 w-7 text-cm-blue" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-2xl shadow-xl border border-gray-100">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  Ambiente Pensado para o Bem-Estar
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Nossa clínica foi projetada para reduzir o estresse dos animais, 
                  com ambientes calmos, iluminação adequada e áreas separadas para 
                  diferentes tipos de atendimento.
                </p>
              </div>
              <ul className="space-y-3">
                {amenities.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <li key={index} className="flex items-center gap-3 text-gray-600">
                      <div className="p-2 bg-cm-red/10 rounded-lg">
                        <IconComponent className="h-4 w-4 text-cm-red" />
                      </div>
                      {item.text}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?w=500&h=400&fit=crop" 
                alt="Ambiente da clínica veterinária"
                className="rounded-2xl shadow-lg w-full object-cover"
              />
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-cm-blue to-cm-blue-light text-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-6 w-6" />
                  <span className="font-semibold">Ambiente Certificado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Infrastructure;