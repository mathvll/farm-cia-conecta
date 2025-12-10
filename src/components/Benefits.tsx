import { Truck, Percent, Clock, Shield, Heart, RefreshCw } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Truck,
      title: "Entrega em Casa",
      description: "Receba seus medicamentos no conforto do seu lar, sem sair de casa."
    },
    {
      icon: Percent,
      title: "Descontos Exclusivos",
      description: "Economize até 40% em comparação com farmácias convencionais."
    },
    {
      icon: Clock,
      title: "Sem Filas",
      description: "Chega de esperar em filas. Seus remédios chegam no horário certo."
    },
    {
      icon: Shield,
      title: "Segurança Garantida",
      description: "Medicamentos originais e armazenados corretamente."
    },
    {
      icon: Heart,
      title: "Acompanhamento",
      description: "Equipe de farmacêuticos disponível para tirar suas dúvidas."
    },
    {
      icon: RefreshCw,
      title: "Pedido Recorrente",
      description: "Facilidade para repetir seus pedidos quando precisar."
    }
  ];

  return (
    <section id="beneficios" className="py-32 bg-secondary/50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Vantagens
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Por que escolher a <span className="text-gradient">Farmácia Por Assinatura</span>?
          </h2>
          <p className="text-muted-foreground text-lg">
            Mais do que uma farmácia, somos seu parceiro de saúde.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group bg-card p-6 rounded-2xl border border-border shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-hero flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
