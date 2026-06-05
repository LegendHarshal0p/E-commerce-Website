export default function Cart({
  cart,
  increaseQty,
  decreaseQty
}) {

  const subtotal = cart.reduce(
    (total, item) => {
      const discountedPrice =
        item.price -
        (item.price * item.discount) / 100;

      return (
        total +
        discountedPrice * item.quantity
      );
    },
    0
  );

  return (
    <section className="cart">

      <h2>Your Cart</h2>

      {cart.map(item => {

        const discountedPrice =
          item.price -
          (item.price * item.discount) / 100;

        return (
          <div
            className="cart-item"
            key={item.id}
          >
            <h4>{item.name}</h4>

            <div className="quantity-controls">

              <button
                onClick={() =>
                  decreaseQty(item.id)
                }
              >
                -
              </button>

              <span>
                {item.quantity}
              </span>

              <button
                onClick={() =>
                  increaseQty(item.id)
                }
              >
                +
              </button>

            </div>

            <div>
              ₹
              {(
                discountedPrice *
                item.quantity
              ).toLocaleString()}
            </div>
          </div>
        );
      })}

      <hr />

      <h3>
        Subtotal:
        ₹{subtotal.toLocaleString()}
      </h3>

    </section>
  );
}