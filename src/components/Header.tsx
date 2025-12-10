import { MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import logo from "@/assets/logo.jpg";

const Header = () => {
  const whatsappLink = "https://wa.me/5541984848680";

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 group">
          <div className="h-12 overflow-hidden rounded group-hover:scale-105 transition-transform duration-300">
            <img 
              src={logo} 
              alt="Farmácia Por Assinatura" 
              className="h-14 -my-1 object-cover"
            />
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-4">
          <a href="#beneficios" className="px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium shadow-sm transition-all duration-300 hover:bg-background hover:text-foreground">
            Benefícios
          </a>
          <a href="#como-funciona" className="px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium shadow-sm transition-all duration-300 hover:bg-background hover:text-foreground">
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