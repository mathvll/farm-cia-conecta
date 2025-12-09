import { ClipboardList, Package, Truck, Smile } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: ClipboardList,
      step: "01",
      title: "Escolha seu Plano",
      description: "Selecione o plano que melhor atende às suas necessidades."
    },
    {
      icon: Package,
      step: "02",
      title: "Cadastre seus Medicamentos",
      description: "Informe quais medicamentos você usa regularmente."
    },
    {
      icon: Truck,
      step: "03",
      title: "Receba em Casa",
      description: "Entregamos seus remédios todo mês, na data que você escolher."
    },
    {
      icon: Smile,
      step: "04",
      title: "Cuide da sua Saúde",
      description: "Nunca mais se preocupe em esquecer seus medicamentos."
    }
  ];

  return (
    <section id="como-funciona" className="py-24 bg-gradient-to-b from-background to-secondary/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
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
