export default function ProductCard({
  product,
  addToCart,
  cart
}) {

  const discountedPrice =
    product.price -
    (product.price * product.discount) / 100;

  const isAdded = cart.some(
    item => item.id === product.id
  );

  return (
    <div className="card">

      <div className="discount-badge">
        {product.discount}% OFF
      </div>

      <img
        src={product.image}
        alt={product.name}
      />

      <div className="card-content">

        <h3>{product.name}</h3>

        <p>{product.category}</p>

        <div className="price-box">

          <span className="discount-price">
            ₹{discountedPrice}
          </span>

          <span className="original-price">
            ₹{product.price}
          </span>

        </div>

        <div className="stock-status">
          {product.stock > 3
            ? "In Stock"
            : `Only ${product.stock} Left`}
        </div>

        <button
          className={isAdded ? "added" : ""}
          onClick={() => addToCart(product)}
        >
          {isAdded
            ? "Added ✓"
            : "Add To Cart"}
        </button>

      </div>
    </div>
  );
}