//This file has a action creator funtion  that return a simple obj
import { ActionTypes } from "../contants/action-types";

//Here is the action where we will send the data of all products into reducer
export const fetchAllProducts = (products) => {
  return {
    type: ActionTypes.FETCH_PRODUCTS,
    payload: products,
  };
};

export const fetchProduct = (product)=>{
  return {
    type:ActionTypes.FETCH_SELECTED_PRODUCT,
    payload:product,
  }
}