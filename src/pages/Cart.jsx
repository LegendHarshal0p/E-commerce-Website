import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

function Cart({
  cart,
  increaseQty,
  decreaseQty,
  removeItem
}) {

  const total = cart.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page">

      <h1>🛒 Shopping Cart</h1>

      {cart.length === 0 ? (
        <div className="empty-cart">

          <h2>Your Cart Is Empty</h2>

          <Link to="/shop">
            <button>Continue Shopping</button>
          </Link>

        </div>
      ) : (
        <>
          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              increaseQty={increaseQty}
              decreaseQty={decreaseQty}
              removeItem={removeItem}
            />
          ))}

          <div className="cart-summary">

            <h2>
              Total: ₹{total.toLocaleString()}
            </h2>

            <Link to="/checkout">
              <button>
                Proceed To Checkout
              </button>
            </Link>

          </div>
        </>
      )}
    </div>
  );
}

export default Cart;