import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

function Home({ addToCart, addToWishlist }) {
  const featuredProducts = products.slice(0, 8);

  return (
    <>
      <Hero />

      <section className="featured-section">
        <h2>🔥 Featured Gaming Gear</h2>

        <div className="products-grid">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
              addToWishlist={addToWishlist}
            />
          ))}
        </div>
      </section>

      <section className="brands-section">
        <h2>Top Gaming Brands</h2>

        <div className="brands">
          <div>Sony</div>
          <div>Xbox</div>
          <div>ASUS ROG</div>
          <div>Logitech</div>
          <div>Razer</div>
          <div>Corsair</div>
        </div>
      </section>
    </>
  );
}

export default Home;