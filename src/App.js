import Header from './components/Header';
import './App.css';
import { createBrowserRouter, RouterProvider, Link ,BrowserRouter} from "react-router-dom";
import ProductList from './components/ProductList';
import ProductDetaile from './components/ProductDetaile';
const router = createBrowserRouter([
  {
    path: "/",
    element: (
        <ProductList></ProductList>
    ),
  },
  {
    path: "/product-detaile/:id",
    element: (
        <ProductDetaile></ProductDetaile>
    ),
  },
])
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Header></Header>
     {/* <RouterProvider router={router}/> */}
     <div>heoll</div>
     <div>heoll</div>
     <div>heoll</div>
     <div>heoll</div>
     <div>heoll</div>
     <div>heoll</div>
     <div>heoll</div>
     <div>heoll</div>
     <div>heoll</div>
     <div>heoll</div>
     <div>heoll</div>
     <div>heoll</div>
     <div>heoll</div>
     <div>heoll</div>
     <div>heoll</div>
     <div>heoll</div>
     <div>heoll</div>
     <div>heoll</div>
     <div>heoll</div>
     <div>heoll</div>
     <div>heoll</div>
     <div>heoll</div>
     <div>heoll</div>
     <div>heoll</div>
     <div>heoll</div>
     <div>heoll</div>
     <div>heoll</div>
     <div>heoll</div>
     <div>heoll</div>
     <div>heoll</div>
     <div>heoll</div>
     <div>heoll</div>
     <div>heoll</div>
     <div>heoll</div>
     <div>heoll</div>
     <div>heoll</div>
     <div>heoll</div>
     <div>heoll</div>
     <div>heoll</div>
     <div>heoll</div>
     <div>heoll</div>
     <div>heoll</div>
     <div>heoll</div>
     <div>heoll</div>
     <div>heoll</div>
     <div>heoll</div>
     <div>heoll</div>
     <div>heoll</div>
     <div>heoll</div>
     <div>heoll</div>
     <div>heoll</div>
     <div>heoll</div>
     <div>heoll</div>
     <div>heoll</div>
     <div>heoll</div>
     <div>heoll</div>
     </BrowserRouter>
    </div>
  );
}

export default App;
