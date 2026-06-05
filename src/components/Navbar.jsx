export default function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <div className="logo">GameShop</div>

      <div
  className="cart-badge"
  onClick={() => setShowCart(true)}
>
  🛒 {cartCount}
</div>
    </nav>
  );
}