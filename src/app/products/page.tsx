import { ProductCard } from "@/components/product-card";
import { Cta } from "@/components/sections/cta";
import { PRODUCTS } from "@/data/constants";

export default function ProductsPage() {
  return (
    <main className="flex flex-col gap-16 py-12 md:py-16">
      <section className="container mt-24 mb-8 flex flex-col items-center gap-6 text-center">
        <h1 className="text-4xl font-bold tracking-tight italic sm:text-5xl md:text-7xl">
          Our Products
        </h1>
        <p className="text-muted-foreground max-w-3xl text-lg">
          Discover our flagship lubrication and anti-friction solutions
          engineered for maximum performance and reliability across industries.
        </p>
      </section>
      <section className="container">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} data={product} />
          ))}
        </div>
      </section>
      <Cta />
    </main>
  );
}
