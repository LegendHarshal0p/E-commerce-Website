import { useState } from "react";
import ProductCard from "../components/Productcard";
import products from "../data/products";

function Shop({ addToCart, addToWishlist }) {

  const [search, setSearch] = useState("");

  const [category, setCategory] =
    useState("All");

  const categories = [
    "All",
    "Console",
    "Laptop",
    "Headset",
    "Mouse",
    "Keyboard",
    "GPU",
    "Monitor",
    "Furniture"
  ];

  const filteredProducts =
    products.filter(product => {

      const matchesSearch =
        product.name
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesCategory =
        category === "All" ||
        product.category === category;

      return (
        matchesSearch &&
        matchesCategory
      );
    });

  return (
    <div className="shop-page">

      <h1>GameStop Store</h1>

      <input
        type="text"
        placeholder="Search Products..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        className="search-bar"
      />

      <div className="category-filter">

        {categories.map(cat => (
          <button
            key={cat}
            onClick={() =>
              setCategory(cat)
            }
          >
            {cat}
          </button>
        ))}

      </div>

      <div className="products-grid">

        {filteredProducts.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
            addToWishlist={addToWishlist}
          />
        ))}

      </div>

    </div>
  );
}

export default Shop;