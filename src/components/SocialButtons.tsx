import { MessageCircle, Instagram, Facebook } from "lucide-react";

const SocialButtons = () => {
  const socials = [
    {
      name: "WhatsApp",
      icon: MessageCircle,
      href: "https://wa.me/5511999999999",
      color: "hover:bg-[#25D366] hover:text-white",
      label: "Fale conosco no WhatsApp"
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://instagram.com",
      color: "hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#F77737] hover:text-white",
      label: "Siga-nos no Instagram"
    },
    {
      name: "Facebook",
      icon: Facebook,
      href: "https://facebook.com",
      color: "hover:bg-[#1877F2] hover:text-white",
      label: "Curta nossa página"
    }
  ];

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          className={`
            group flex items-center justify-center w-12 h-12 rounded-full 
            bg-card border border-border shadow-card
            transition-all duration-300 ease-out
            hover:scale-110 hover:shadow-glow
            ${social.color}
          `}
        >
          <social.icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
        </a>
      ))}
    </div>
  );
};

export default SocialButtons;
