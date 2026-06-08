function CartItem({
  item,
  increaseQty,
  decreaseQty,
  removeItem
}) {
  return (
    <div className="cart-item">

      <img
        src={item.image}
        alt={item.name}
        className="cart-item-image"
      />

      <div className="cart-item-details">
        <h3>{item.name}</h3>

        <p>{item.description}</p>

        <h4>₹{item.price.toLocaleString()}</h4>
      </div>

      <div className="cart-item-actions">

        <div className="quantity-controls">
          <button
            onClick={() => decreaseQty(item.id)}
          >
            -
          </button>

          <span>{item.quantity}</span>

          <button
            onClick={() => increaseQty(item.id)}
          >
            +
          </button>
        </div>

        <button
          className="remove-btn"
          onClick={() => removeItem(item.id)}
        >
          Remove
        </button>

      </div>

    </div>
  );
}

export default CartItem;