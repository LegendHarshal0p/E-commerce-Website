import { Link } from "react-router-dom";

function OrderSuccess() {

  return (
    <div
      style={{
        textAlign:"center",
        padding:"100px"
      }}
    >

      <h1>
        🎉 Order Placed Successfully
      </h1>

      <p>
        Thank you for shopping at
        GameStop.
      </p>

      <Link to="/">
        <button>
          Continue Shopping
        </button>
      </Link>

    </div>
  );
}

export default OrderSuccess;