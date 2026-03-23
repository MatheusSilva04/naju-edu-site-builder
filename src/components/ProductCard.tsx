import { Link } from "react-router-dom";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => (
  <div className="bg-card rounded-xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
    <div className="aspect-square overflow-hidden bg-muted">
      <img
        src={product.image}
        alt={product.name}
        loading="lazy"
        width={640}
        height={640}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />
    </div>
    <div className="p-5">
      <h3 className="font-heading font-bold text-lg text-foreground mb-1">{product.name}</h3>
      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{product.shortDescription}</p>
      <Link
        to={`/produtos/${product.id}`}
        className="inline-block bg-primary text-primary-foreground font-body font-semibold px-5 py-2 rounded-lg hover:opacity-90 transition-opacity text-sm"
      >
        Ver produto
      </Link>
    </div>
  </div>
);

export default ProductCard;
