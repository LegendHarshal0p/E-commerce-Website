import { useState } from "react";

import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";
import products from "./data/products";

import "./App.css";

function App() {
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");

  const addToCart = (product) => {
  const existingItem = cart.find(
    item => item.id === product.id
  );

  if (existingItem) {
    setCart(
      cart.map(item =>
        item.id === product.id
          ? {
              ...item,
              quantity: item.quantity + 1
            }
          : item
      )
    );
  } else {
    setCart([
      ...cart,
      {
        ...product,
        quantity: 1
      }
    ]);
  }
};
  const increaseQty = (id) => {
  setCart(
    cart.map(item =>
      item.id === id
        ? {
            ...item,
            quantity: item.quantity + 1
          }
        : item
    )
  );
};
  const decreaseQty = (id) => {
  setCart(
    cart
      .map(item =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity - 1
            }
          : item
      )
      .filter(item => item.quantity > 0)
  );
}; 
  

  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  const filteredProducts =
    products.filter((product) =>
      product.name
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  const [showCart, setShowCart] =
  useState(false);

  return (
    <>
      <Navbar
        cartCount={cart.length}
        setShowCart={setShowCart}
      />

      <section className="hero">
        <h1>Modern E-Commerce Store</h1>

        <p>
          Find the best gadgets at amazing
          prices.
        </p>

        <input
          className="search-box"
          placeholder="Search Products..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />
      </section>

      <section className="products">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
            cart={cart}
/>
        ))}
      </section>

      <CartDrawer
        cart={cart}
        showCart={showCart}
        setShowCart={setShowCart}
      />

      <Footer />
    </>
  );
}

export default App;
