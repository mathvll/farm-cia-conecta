import { Button } from "./ui/button";
import { Check, Shield, MessageCircle } from "lucide-react";

const Hero = () => {
  const whatsappLink = "https://wa.me/5511999999999";

  const highlights = [
    "Descontos exclusivos",
    "Atendimento 24h"
  ];

  return (
    <section className="relative min-h-screen pt-16 pb-24 flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/65 via-primary/30 to-background" />
      
      {/* Decorative circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="space-y-8 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Shield className="w-4 h-4" />
              Saúde na sua porta, todo mês
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-foreground">
              Seus medicamentos{" "}
              <span className="text-gradient">entregues em casa</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg mx-auto">
              Receba seus remédios em casa com desconto, sem filas e sem preocupação. 
              Cuide da sua saúde com praticidade e economia.
            </p>

            <div className="flex justify-center gap-4">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="lg" className="group gap-2 w-full sm:w-auto">
                  <MessageCircle className="w-5 h-5 transition-transform group-hover:scale-110" />
                  Fale com a farmácia
                </Button>
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-8 pt-4">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-2 text-foreground">
                  <div className="w-6 h-6 rounded-full bg-white shadow-sm flex items-center justify-center">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;