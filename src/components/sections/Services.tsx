import { Card, CardContent } from "@/components/ui/card";
import { 
  Stethoscope, 
  Bone, 
  Syringe, 
  Building2, 
  Scissors, 
  Home,
  Droplets,
  Leaf,
  Bath,
  MessageCircle
} from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Consultas e Exames",
      description: "Avaliação completa da saúde do seu pet com equipamentos modernos",
      icon: Stethoscope
    },
    {
      title: "Cirurgias Ortopédicas",
      description: "Procedimentos especializados para problemas ósseos e articulares",
      icon: Bone
    },
    {
      title: "Vacinação",
      description: "Protocolo completo de imunização para todas as idades",
      icon: Syringe
    },
    {
      title: "Hospital Veterinário",
      description: "Internamento e cuidados intensivos quando necessário",
      icon: Building2
    },
    {
      title: "Estética Animal",
      description: "Banho, tosa e cuidados estéticos profissionais",
      icon: Scissors
    },
    {
      title: "Atendimento Domiciliar",
      description: "Consultas no conforto da sua casa com busca e entrega",
      icon: Home
    },
    {
      title: "Ozonioterapia",
      description: "Tratamento com ozônio para diversas condições",
      icon: Droplets
    },
    {
      title: "Fitoterapia",
      description: "Medicina natural com plantas medicinais",
      icon: Leaf
    },
    {
      title: "Banho Eufuro",
      description: "Banho terapêutico com produtos especializados",
      icon: Bath
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-cm-red/10 rounded-full text-cm-red text-sm font-medium">
            <Stethoscope className="h-4 w-4" />
            Serviços Completos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Nossos <span className="text-cm-red">Serviços</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Oferecemos uma gama completa de serviços veterinários, desde cuidados básicos 
            até tratamentos especializados em medicina integrativa.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-cm-red/30 rounded-2xl overflow-hidden"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="p-3 bg-gradient-to-br from-cm-blue/10 to-cm-red/10 rounded-xl w-fit group-hover:from-cm-red/20 group-hover:to-cm-red-light/20 transition-all duration-300">
                    <IconComponent className="h-7 w-7 text-cm-blue group-hover:text-cm-red transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-cm-red transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12 sm:mt-16">
          <button 
            onClick={() => window.open("https://wa.me/5541996416800?text=Gostaria de saber mais sobre os serviços da clínica.", "_blank")}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-cm-red to-cm-red-light hover:from-cm-red-dark hover:to-cm-red text-white text-base sm:text-lg px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <MessageCircle className="h-5 w-5" />
            Saiba mais sobre nossos serviços
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;