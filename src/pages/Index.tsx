
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Benefits from "@/components/sections/Benefits";
import Infrastructure from "@/components/sections/Infrastructure";
import Testimonials from "@/components/sections/Testimonials";
import Footer from "@/components/sections/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <Benefits />
      <Infrastructure />
      <Testimonials />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
