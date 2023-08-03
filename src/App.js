import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Register from "./pages/Register";
import SingleProduct from "./pages/SingleProduct";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
        <Home></Home>
    ),
  },
  {
    path: "/productList",
    element: (
        <ProductList></ProductList>
    ),
  },
  {
    path: "/login",
    element: (
        <Login></Login>
    ),
  },
  {
    path: "/register",
    element: (
        <Register></Register>
    ),
  },
  {
    path: "/cart",
    element: (
        <Cart></Cart>
    ),
  },
  {
    path: "/product-detaile",
    element: (
        <SingleProduct></SingleProduct>
    ),
  },
])
function App() {
  return (
    <div className='App'>
     <RouterProvider router={router}/>
    </div>
  );
}

export default App;
