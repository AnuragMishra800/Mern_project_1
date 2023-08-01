import { combineReducers } from "redux";
import { productReducer,singleProductReducer } from "./productReducer";

const reducers = combineReducers({
    allProducts:productReducer,
    oneProduct:singleProductReducer,
});

export default reducers;