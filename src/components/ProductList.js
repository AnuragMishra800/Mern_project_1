import React, { useEffect } from "react";
import ProductComponent from "./ProductComponent";
import { useDispatch } from "react-redux";
import { fetchAllProducts } from "../redux/actions/productActions";
import axios from "axios";

function ProductList() {
  const dispatch = useDispatch();

  // This is an simple api that fetch the data from the given URL
  const fetchProducts = async () => {
    const response = await axios
      .get("http://localhost:8080/products")
      .catch((err) => {
        console.log("ERR", err);
      });
    //Here we Dispatch the action those we make remember the action take an argument so we fetch all product and
    // we got an response with data
    // send the data as a arguments
    dispatch(fetchAllProducts(response.data));
  };

  //Here we doing an fuction call those fuction i will make
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div>
      <h1>productList</h1>
      <ProductComponent></ProductComponent>
    </div>
  );
}

export default ProductList;
