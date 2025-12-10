import { ClipboardList, Package, Truck, Smile } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: ClipboardList,
      step: "01",
      title: "Entre em Contato",
      description: "Fale conosco pelo WhatsApp e informe o que você precisa."
    },
    {
      icon: Package,
      step: "02",
      title: "Envie sua Receita",
      description: "Envie a foto da sua receita médica de forma simples e rápida."
    },
    {
      icon: Truck,
      step: "03",
      title: "Receba em Casa",
      description: "Entregamos seus remédios no conforto do seu lar."
    },
    {
      icon: Smile,
      step: "04",
      title: "Cuide da sua Saúde",
      description: "Aproveite os melhores preços e praticidade."
    }
  ];

  return (
    <section id="como-funciona" className="py-32 bg-gradient-to-b from-background to-secondary/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium mb-4 shadow-sm transition-all duration-300 hover:bg-background hover:text-foreground cursor-default">
            Como Funciona
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Simples como deve ser
          </h2>
          <p className="text-muted-foreground text-lg">
            Em apenas 4 passos você começa a receber seus medicamentos em casa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.step} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent" />
              )}

              <div className="relative text-center group">
                <div className="relative inline-block mb-6">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-secondary to-background border-2 border-border flex items-center justify-center group-hover:border-primary transition-colors duration-300 shadow-soft">
                    <step.icon className="w-12 h-12 text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-gradient-accent flex items-center justify-center text-accent-foreground font-bold text-sm shadow-accent">
                    {step.step}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
