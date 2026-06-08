function Wishlist({
  wishlist,
  removeWishlistItem
}) {

  return (
    <div className="wishlist-page">

      <h1>Wishlist</h1>

      {wishlist.map(item => (

        <div
          key={item.id}
          className="wishlist-card"
        >

          <img
            src={item.image}
            alt={item.name}
          />

          <h3>{item.name}</h3>

          <button
            onClick={() =>
              removeWishlistItem(
                item.id
              )
            }
          >
            Remove
          </button>

        </div>

      ))}
    </div>
  );
}

export default Wishlist;