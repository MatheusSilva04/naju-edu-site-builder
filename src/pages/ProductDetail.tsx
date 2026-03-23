import { useParams, Link } from "react-router-dom";
import { ArrowLeft, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { products, getWhatsAppProductUrl } from "@/data/products";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <>
        <Header />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-heading font-bold text-2xl text-foreground mb-4">Produto não encontrado</h1>
            <Link to="/produtos" className="text-primary font-semibold hover:underline">
              ← Voltar para produtos
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="pt-24 pb-8">
        <div className="container mx-auto px-4">
          <Link to="/produtos" className="inline-flex items-center gap-1 text-primary font-body font-semibold mb-6 hover:underline">
            <ArrowLeft size={18} /> Voltar para produtos
          </Link>

          <div className="flex flex-col md:flex-row gap-10 items-start">
            <div className="flex-1 max-w-lg">
              <img src={product.image} alt={product.name} width={640} height={640} className="w-full rounded-2xl shadow-lg" />
            </div>
            <div className="flex-1">
              <h1 className="font-heading font-extrabold text-3xl md:text-4xl text-foreground mb-4">{product.name}</h1>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">{product.description}</p>
              <p className="font-heading font-bold text-3xl text-primary mb-8">
                R$ {product.price.toFixed(2).replace(".", ",")}
              </p>
              <a
                href={getWhatsAppProductUrl(product.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-body font-bold px-8 py-3 rounded-xl text-lg hover:opacity-90 transition-opacity shadow-lg"
              >
                <MessageCircle size={22} />
                Comprar pelo WhatsApp
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ProductDetail;
