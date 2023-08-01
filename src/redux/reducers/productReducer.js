import { ActionTypes } from "../contants/action-types";

const initialState = {
  products: [],
};

// That is a simple reducer function that return the new state
// that also acepte the argument as initialState and the action 
export const productReducer = (state = initialState, {type,payload}) => {
  switch (type) {
    case ActionTypes.FETCH_PRODUCTS:
      return {...state,products:payload};
    default:
      return state;
  }
};
export const singleProductReducer = (state = {},{type,payload})=>{
  switch (type) {
    case ActionTypes.FETCH_SELECTED_PRODUCT:
      return { ...state,product:payload}
    default:
      return state;
  }
}