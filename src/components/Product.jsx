import React from "react";
import "../Product.css";
import { useStateValue } from "../StateProvider";

function Product({ id, title, image, price, rating }) {
  const [user, dispatch] = useStateValue();
  const addToBasket = () => {
    //add
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        image,
        price,
        rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>
      <img src={image} alt="" />
      <div className="product_rating">
        {Array(rating)
          .fill()
          .map((_) => (
            <span
              key={Math.random() * (1000 - 1) + 1}
              role="img"
              aria-label="star"
            >
              &#11088;
            </span>
          ))}
      </div>

      {user.user ? (
        <button onClick={addToBasket}>Add to basket</button>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Product;
