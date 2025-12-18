import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, MessageCircle, Users } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      pet: "Luna (Golden Retriever)",
      text: "A CM Integrativa salvou minha Luna! O tratamento integrativo fez toda a diferença na recuperação dela. Equipe maravilhosa e muito carinhosa.",
      rating: 5
    },
    {
      name: "João Santos",
      pet: "Mimi (Gata Persa)",
      text: "Atendimento excepcional! A Mimi sempre fica muito calma na clínica. O atendimento domiciliar é uma comodidade incrível para nós.",
      rating: 5
    },
    {
      name: "Ana Costa",
      pet: "Thor (Pastor Alemão)",
      text: "Depois da cirurgia do Thor, os cuidados pós-operatórios foram impecáveis. A medicina integrativa acelerou muito a recuperação.",
      rating: 5
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: rating }, (_, i) => (
      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
    ));
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-cm-red/10 rounded-full text-cm-red text-sm font-medium">
            <Users className="h-4 w-4" />
            Depoimentos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            O que nossos <span className="text-cm-red">Clientes</span> dizem
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            A satisfação dos nossos pacientes e seus tutores é nossa maior recompensa.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-cm-red/30 rounded-2xl overflow-hidden"
            >
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex gap-1">{renderStars(testimonial.rating)}</div>
                  <Quote className="h-8 w-8 text-cm-red/20" />
                </div>
                <p className="text-gray-600 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-gray-100 pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">Tutor(a) de {testimonial.pet}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center space-y-6 bg-gradient-to-br from-gray-50 to-gray-100 p-8 sm:p-10 rounded-2xl">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
            Quer que seu pet também receba esse cuidado especial?
          </h3>
          <p className="text-gray-600">
            Junte-se a centenas de famílias que confiam na CM Integrativa
          </p>
          <button 
            onClick={() => window.open("https://wa.me/5541996416800?text=Gostaria de agendar uma consulta para meu pet.", "_blank")}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-cm-red to-cm-red-light hover:from-cm-red-dark hover:to-cm-red text-white text-base sm:text-lg px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <MessageCircle className="h-5 w-5" />
            Quero agendar agora
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;