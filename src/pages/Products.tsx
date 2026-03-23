import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const Products = () => (
  <>
    <Header />
    <main className="pt-24 pb-8">
      <div className="container mx-auto px-4">
        <h1 className="font-heading font-extrabold text-3xl md:text-4xl text-foreground mb-2 text-center">Nossos Produtos</h1>
        <p className="text-muted-foreground text-center mb-10 max-w-lg mx-auto">
          Confira nossa seleção de materiais educacionais de qualidade.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </main>
    <Footer />
  </>
);

export default Products;
