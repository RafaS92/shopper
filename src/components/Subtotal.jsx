import React from "react";
import { useHistory } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../StateProvider";
import "../Subtotal.css";
import { getBasketTotal } from "../reducer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  const history = useHistory();

  const removeall = () => {
    dispatch({
      type: "REMOVE_ALL_FROM_BASKET",
    });

    setTimeout(() => window.location.reload(), 4500);

    notify();
  };

  const backHome = (e) => {
    history.push("/");
  };

  const notify = () =>
    toast.error(
      "The details of your purchase were sent to you email account, thank you for shopping."
    );
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            {basket?.length > 0 ? (
              <div>
                <p>
                  Subtotal ({basket?.length} items):{" "}
                  <strong> {`${value}`}</strong>
                </p>
                <small className="subtotal_gift">
                  <input type="checkbox" /> This order contains a gift
                </small>
              </div>
            ) : (
              "There is nothing in your basket"
            )}
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <ToastContainer />
      <button onClick={removeall}>Proceed to Checkout</button>
      <div>
        <button onClick={backHome} className="login_back">
          Back Home
        </button>
      </div>
    </div>
  );
}

export default Subtotal;
