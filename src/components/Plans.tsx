import { Check, Star } from "lucide-react";
import { Button } from "./ui/button";

const Plans = () => {
  const plans = [
    {
      name: "Básico",
      price: "29",
      description: "Para quem usa poucos medicamentos",
      features: [
        "Até 3 medicamentos por mês",
        "Entrega mensal",
        "10% de desconto",
        "Suporte por email"
      ],
      popular: false
    },
    {
      name: "Premium",
      price: "79",
      description: "O mais escolhido pelos nossos clientes",
      features: [
        "Até 10 medicamentos por mês",
        "Entrega mensal ou quinzenal",
        "25% de desconto",
        "Suporte 24h",
        "Acompanhamento farmacêutico",
        "Lembretes personalizados"
      ],
      popular: true
    },
    {
      name: "Família",
      price: "149",
      description: "Cuide de toda a família",
      features: [
        "Medicamentos ilimitados",
        "Até 5 membros da família",
        "40% de desconto",
        "Suporte 24h prioritário",
        "Acompanhamento farmacêutico",
        "Entrega expressa grátis"
      ],
      popular: false
    }
  ];

  return (
    <section id="planos" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Planos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Escolha o plano ideal para você
          </h2>
          <p className="text-muted-foreground text-lg">
            Planos flexíveis que se adaptam às suas necessidades de saúde.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-card rounded-3xl border transition-all duration-300 hover:-translate-y-2 ${
                plan.popular
                  ? "border-primary shadow-glow scale-105"
                  : "border-border shadow-card hover:border-primary/50"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1 px-4 py-1.5 rounded-full bg-gradient-hero text-primary-foreground text-sm font-medium shadow-soft">
                    <Star className="w-4 h-4 fill-current" />
                    Mais Popular
                  </div>
                </div>
              )}

              <div className="p-8">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-6">
                  {plan.description}
                </p>

                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-sm text-muted-foreground">R$</span>
                  <span className="text-5xl font-extrabold text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground">/mês</span>
                </div>

                <Button
                  variant={plan.popular ? "hero" : "outline"}
                  className="w-full mb-8"
                  size="lg"
                >
                  Assinar Agora
                </Button>

                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-muted-foreground text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;
