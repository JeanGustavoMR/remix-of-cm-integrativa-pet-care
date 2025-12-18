
import { Card, CardContent } from "@/components/ui/card";

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
    return "⭐".repeat(rating);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#001f3f]">
            O que nossos <span className="text-[#e63946]">Clientes</span> dizem
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A satisfação dos nossos pacientes e seus tutores é nossa maior recompensa.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 border-2 hover:border-[#e63946]">
              <CardContent className="p-6 space-y-4">
                <div className="text-2xl">{renderStars(testimonial.rating)}</div>
                <p className="text-gray-600 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="border-t pt-4">
                  <div className="font-semibold text-[#001f3f]">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">Tutor(a) de {testimonial.pet}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center space-y-6 bg-gray-50 p-8 rounded-xl">
          <h3 className="text-2xl font-bold text-[#001f3f]">
            Quer que seu pet também receba esse cuidado especial?
          </h3>
          <p className="text-gray-600">
            Junte-se a centenas de famílias que confiam na CM Integrativa
          </p>
          <button 
            onClick={() => window.open("https://wa.me/5541996416800?text=Gostaria de agendar uma consulta para meu pet.", "_blank")}
            className="bg-[#e63946] hover:bg-[#d62639] text-white text-lg px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Quero agendar agora
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
