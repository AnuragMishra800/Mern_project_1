import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function ProductComponent() {
  //Here we access the store global state
  const products = useSelector((state) => state.allProducts.products);

  //Here we make a component that render in the retuen statement 
  const rederList = products.map((product) => {
    const { id, title, thumbnail, price, category } = product;
    return (
      <div>
        <Link to = {`product-detaile/${id}`}>
          <div>
            <img src={thumbnail} alt="" />
            <h1>{title}</h1>
            <h1>{price}</h1>
            <h1>{category}</h1>
          </div>
        </Link>
      </div>
    );
  });
  return (
    <div>
      <h1>ProductComponent</h1>
      <>{rederList}</>
    </div>
  );
}

export default ProductComponent;
