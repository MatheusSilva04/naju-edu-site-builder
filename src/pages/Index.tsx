import { Link } from "react-router-dom";
import { Award, DollarSign, Zap, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-education.jpg";
import aboutImage from "@/assets/about-store.jpg";

const features = [
  { icon: Award, title: "Qualidade", description: "Produtos selecionados com alto padrão de qualidade." },
  { icon: DollarSign, title: "Bom preço", description: "Preços acessíveis para todos os bolsos." },
  { icon: Zap, title: "Atendimento rápido", description: "Respondemos suas dúvidas em minutos." },
  { icon: MessageCircle, title: "Compra pelo WhatsApp", description: "Compre de forma prática e segura." },
];

const Index = () => (
  <>
    <Header />
    <main className="pt-16">
      {/* Hero */}
      <section id="home" className="relative gradient-hero overflow-hidden">
        <div className="container mx-auto px-4 py-20 md:py-32 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 text-center md:text-left animate-fade-in-up">
            <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-4">
              NAJU<span className="text-primary">.Educa</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-lg mb-8">
              Sua loja de produtos educacionais. Materiais escolares, livros e muito mais para potencializar o aprendizado!
            </p>
            <Link
              to="/produtos"
              className="inline-block bg-primary text-primary-foreground font-body font-bold px-8 py-3 rounded-xl text-lg hover:opacity-90 transition-opacity shadow-lg"
            >
              Ver produtos
            </Link>
          </div>
          <div className="flex-1 max-w-lg">
            <img src={heroImage} alt="Material escolar educativo" width={1280} height={720} className="rounded-2xl shadow-xl" />
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="py-20 bg-card">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 max-w-md">
            <img src={aboutImage} alt="Loja NAJU.Educa" loading="lazy" width={800} height={600} className="rounded-2xl shadow-lg" />
          </div>
          <div className="flex-1">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">Sobre a NAJU.Educa</h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-4">
              A <strong className="text-foreground">NAJU.Educa</strong> é uma loja dedicada a oferecer produtos educacionais de qualidade. Acreditamos que o aprendizado começa com os materiais certos — por isso selecionamos cuidadosamente cada item do nosso catálogo.
            </p>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              De cadernos a mochilas, de livros a kits escolares, nossa missão é facilitar a vida de estudantes, pais e educadores com produtos acessíveis e de alta qualidade.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground text-center mb-12">Nossos diferenciais</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <div key={f.title} className="bg-card rounded-xl border border-border p-6 text-center hover:shadow-md transition-shadow">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4">
                  <f.icon size={28} />
                </div>
                <h3 className="font-heading font-bold text-lg text-foreground mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-3xl text-foreground mb-4">Confira nossos produtos</h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">Explore nosso catálogo e encontre tudo o que você precisa para estudar com qualidade.</p>
          <Link
            to="/produtos"
            className="inline-block bg-secondary text-secondary-foreground font-body font-bold px-8 py-3 rounded-xl text-lg hover:opacity-90 transition-opacity shadow-lg"
          >
            Ver todos os produtos
          </Link>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default Index;
