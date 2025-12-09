import { MapPin, Phone, MessageCircle, Instagram, Facebook } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <a href="/" className="flex items-center gap-2">
              <div className="h-12 overflow-hidden rounded">
                <img 
                  src={logo} 
                  alt="Farmácia Por Assinatura" 
                  className="h-14 -my-1 object-cover"
                />
              </div>
            </a>
            <p className="text-background/70 text-sm">
              Sua farmácia delivery. Medicamentos na sua porta, com desconto e praticidade.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Links Úteis</h4>
            <ul className="space-y-3">
              <li>
                <a href="#beneficios" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Benefícios
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Como Funciona
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Política de Privacidade
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-background/70 text-sm">
                <MapPin className="w-4 h-4 text-primary" />
                Rua Teodoro Augustyn, 368 - Campo Largo
              </li>
              <li className="flex items-center gap-2 text-background/70 text-sm">
                <Phone className="w-4 h-4 text-primary" />
                (41) 98484-8680
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Redes Sociais</h4>
            <div className="flex gap-3">
              <a
                href="https://wa.me/5541984848680"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-[#25D366] transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-[#E4405F] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-[#1877F2] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 text-center">
          <p className="text-background/50 text-sm">
            © {currentYear} Farmácia Por Assinatura. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
