import { useParams } from "react-router-dom";
import products from "../data/products";

function ProductDetails() {

  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return <h1>Product Not Found</h1>;
  }

  return (
    <div className="product-details">

      <img
        src={product.image}
        alt={product.name}
      />

      <div>

        <h1>{product.name}</h1>

        <p>{product.description}</p>

        <h2>
          ₹{product.price.toLocaleString()}
        </h2>

        <button>
          Add To Cart
        </button>

      </div>

    </div>
  );
}

export default ProductDetails;