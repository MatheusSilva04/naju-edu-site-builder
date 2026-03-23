import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/data/products";

const Footer = () => (
  <footer className="bg-foreground py-10 mt-16">
    <div className="container mx-auto px-4 text-center">
      <p className="font-heading font-bold text-xl text-background mb-2">
        NAJU<span className="text-primary">.Educa</span>
      </p>
      <p className="text-muted-foreground text-sm mb-4">Produtos educacionais de qualidade para o seu aprendizado.</p>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2 rounded-lg font-body font-semibold hover:opacity-90 transition-opacity"
      >
        <MessageCircle size={18} />
        Fale conosco pelo WhatsApp
      </a>
      <p className="text-muted-foreground text-xs mt-6">© {new Date().getFullYear()} NAJU.Educa — Todos os direitos reservados.</p>
    </div>
  </footer>
);

export default Footer;
