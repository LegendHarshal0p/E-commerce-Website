import { Link } from "react-router-dom";

function ProductCard({
  product,
  addToCart,
  addToWishlist
}) {

  return (
    <div className="product-card">

      <Link
        to={`/product/${product.id}`}
      >
        <img
          src={product.image}
          alt={product.name}
        />
      </Link>

      <div className="product-card-content">

        <h3>{product.name}</h3>

        <p>{product.description}</p>

        <h4>
          ₹{product.price.toLocaleString()}
        </h4>

        <button
          onClick={() =>
            addToCart(product)
          }
        >
          Add To Cart
        </button>

        <button
          onClick={() =>
            addToWishlist(product)
          }
        >
          Wishlist
        </button>

      </div>

    </div>
  );
}

export default ProductCard;