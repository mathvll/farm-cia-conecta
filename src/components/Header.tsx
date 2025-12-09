import { Pill, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  const whatsappLink = "https://wa.me/5511999999999";

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-hero flex items-center justify-center shadow-soft group-hover:shadow-glow transition-shadow duration-300">
            <Pill className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-lg font-bold text-foreground">
            Farmácia <span className="text-gradient">Por Assinatura</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#beneficios" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
            Benefícios
          </a>
          <a href="#como-funciona" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
            Como Funciona
          </a>
        </nav>

        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
          <Button variant="hero" size="sm" className="gap-2">
            <MessageCircle className="w-4 h-4" />
            Fale Conosco
          </Button>
        </a>
      </div>
    </header>
  );
};

export default Header;