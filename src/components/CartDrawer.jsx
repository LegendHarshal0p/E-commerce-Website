export default function CartDrawer({
  cart,
  showCart,
  setShowCart
}) {

  const subtotal = cart.reduce(
    (total, item) =>
      total +
      item.price * item.quantity,
    0
  );

  return (
    <div
      className={`cart-drawer ${
        showCart ? "open" : ""
      }`}
    >
      <div className="cart-header">

        <h2>Your Cart</h2>

        <button
          onClick={() =>
            setShowCart(false)
          }
        >
          ✕
        </button>

      </div>

      {cart.map(item => (
        <div
          key={item.id}
          className="drawer-item"
        >
          <img
            src={item.image}
            alt={item.name}
          />

          <div>
            <h4>{item.name}</h4>
            <p>
              ₹{item.price}
            </p>
          </div>
        </div>
      ))}

      <div className="subtotal">
        Total:
        ₹{subtotal.toLocaleString()}
      </div>

      <button className="checkout-btn">
        Proceed To Checkout
      </button>

    </div>
  );
}