import { createStore } from "redux";
import reducers from "./redux/reducers/index";
const store = createStore(reducers,{},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;

// import { configureStore } from '@reduxjs/toolkit';
// import productReducer from '../features/product/productSlice'
// export const store = configureStore({
//   reducer: {
//     product:productReducer,
//   },
// });
