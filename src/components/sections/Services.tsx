
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      title: "Consultas e Exames",
      description: "Avaliação completa da saúde do seu pet com equipamentos modernos",
      icon: "🩺"
    },
    {
      title: "Cirurgias Ortopédicas",
      description: "Procedimentos especializados para problemas ósseos e articulares",
      icon: "🦴"
    },
    {
      title: "Vacinação",
      description: "Protocolo completo de imunização para todas as idades",
      icon: "💉"
    },
    {
      title: "Hospital 24h",
      description: "Internamento e cuidados intensivos quando necessário",
      icon: "🏥"
    },
    {
      title: "Estética Animal",
      description: "Banho, tosa e cuidados estéticos profissionais",
      icon: "✂️"
    },
    {
      title: "Atendimento Domiciliar",
      description: "Consultas no conforto da sua casa com busca e entrega",
      icon: "🏠"
    },
    {
      title: "Ozonioterapia",
      description: "Tratamento com ozônio para diversas condições",
      icon: "🫧"
    },
    {
      title: "Fitoterapia",
      description: "Medicina natural com plantas medicinais",
      icon: "🌿"
    },
    {
      title: "Banho Eufuro",
      description: "Banho terapêutico com produtos especializados",
      icon: "🛁"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#001f3f]">
            Nossos <span className="text-[#e63946]">Serviços</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Oferecemos uma gama completa de serviços veterinários, desde cuidados básicos 
            até tratamentos especializados em medicina integrativa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-[#e63946]">
              <CardContent className="p-6 text-center space-y-4">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-[#001f3f] group-hover:text-[#e63946] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={() => window.open("https://wa.me/5541996416800?text=Gostaria de saber mais sobre os serviços da clínica.", "_blank")}
            className="bg-[#e63946] hover:bg-[#d62639] text-white text-lg px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Saiba mais sobre nossos serviços
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
