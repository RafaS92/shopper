import React, { useEffect } from "react";
import { useStateValue } from "../StateProvider";
import "../Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import { useLocation } from "react-router-dom";

function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          alt=""
          className="checkout_img"
          src="https://cdn11.bigcommerce.com/s-utiov5b794/product_images/uploaded_images/blog13-sell-to-gainsaver.jpg"
        />
        {basket?.length === 0 ? (
          <div>
            <h2> Your Shopping Basket is empty</h2>
            <p>
              You have no items in your basket. Please,add items to your basket.
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

      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
