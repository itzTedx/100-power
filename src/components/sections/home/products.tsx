import { ProductCard } from "@/components/product-card";
import { PRODUCTS } from "@/data/constants";

export const Products = () => {
  return (
    <section className="container py-12">
      <h2 className="mb-4 text-2xl">Flagship Products</h2>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {PRODUCTS.map((product) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </div>
    </section>
  );
};
