import { useNavigate }
from "react-router-dom";

function Checkout() {

  const navigate =
    useNavigate();

  const handleSubmit = (e) => {

    e.preventDefault();

    navigate("/success");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="checkout-form"
    >

      {/* inputs */}

      <button type="submit">
        Place Order
      </button>

    </form>
  );
}

export default Checkout;