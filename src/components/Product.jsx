import React from "react";
import "../Product.css";
import { useStateValue } from "../StateProvider";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
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
            <p>&#11088;</p>
          ))}
      </div>
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
}

export default Product;
