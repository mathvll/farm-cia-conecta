import { MessageCircle } from "lucide-react";

const SocialButtons = () => {
  const whatsappLink = "https://wa.me/5541984848680";

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50">
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale conosco no WhatsApp"
        className="
          group flex items-center justify-center w-14 h-14 rounded-full 
          bg-[#25D366] text-white shadow-lg
          transition-all duration-300 ease-out
          hover:scale-110 hover:shadow-xl
          animate-pulse-soft
        "
      >
        <MessageCircle className="w-7 h-7 transition-transform duration-300 group-hover:scale-110" />
      </a>
    </div>
  );
};

export default SocialButtons;
