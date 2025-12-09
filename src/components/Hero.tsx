import { Button } from "./ui/button";
import { Check, Truck, Shield } from "lucide-react";
import heroImage from "@/assets/hero-pharmacy.jpg";

const Hero = () => {
  const highlights = [
    "Entrega mensal garantida",
    "Descontos exclusivos",
    "Atendimento 24h"
  ];

  return (
    <section className="relative min-h-screen pt-16 flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-background" />
      
      {/* Decorative circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Shield className="w-4 h-4" />
              Saúde na sua porta, todo mês
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-foreground">
              Seus medicamentos{" "}
              <span className="text-gradient">por assinatura</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg">
              Receba seus remédios em casa com desconto, sem filas e sem preocupação. 
              Cuide da sua saúde com praticidade e economia.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group">
                <Truck className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
                Começar Agora
              </Button>
              <Button variant="outline" size="lg">
                Ver Planos
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 pt-4">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-2 text-muted-foreground">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative lg:pl-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-hero rounded-3xl blur-2xl opacity-20 transform rotate-3" />
              <img
                src={heroImage}
                alt="Medicamentos organizados - Farmácia por Assinatura"
                className="relative rounded-3xl shadow-card object-cover w-full aspect-[4/3]"
              />
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-2xl shadow-card border border-border animate-float">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-hero flex items-center justify-center">
                  <Truck className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Entrega Grátis</p>
                  <p className="text-xs text-muted-foreground">Em todo o Brasil</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
