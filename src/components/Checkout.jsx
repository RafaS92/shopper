import React from "react";
import { useStateValue } from "../StateProvider";
import "../Checkout.css";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <img
        className="checkout_img"
        src="https://static.vecteezy.com/system/resources/previews/000/095/529/original/best-offer-sale-banner-vector.jpg"
      />
      {basket?.length === 0 ? (
        <div>
          <h2> Your Shopping Basket is empty</h2>
          <p>
            You have no items in your basket. Please,dd items to your basket.
          </p>
        </div>
      ) : (
        <div>
          <h2 className="checkout_title">Your Shopping Basket</h2>
          {basket?.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Checkout;
