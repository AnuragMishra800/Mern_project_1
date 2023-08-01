import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { useDispatch,useSelector } from 'react-redux';
import { fetchProduct } from '../redux/actions/productActions';

function ProductDetaile() {
  const product = useSelector((state)=> state.oneProduct.product);

  const params = useParams();
  const dispatch = useDispatch();
  console.log(params.id);
  console.log(product);
  const fetchOneProduct = async()=>{
    const response = await axios.get(`http://localhost:8080/products/${params.id}`).catch((err)=>{
      console.log("ERR",err);
    })
    dispatch(fetchProduct(response.data));
  }
  useEffect(()=>{
    fetchOneProduct();
  },[params.id])
  return (
    <div>
      <h1>ProductDetaile</h1>
      <img src={product.thumbnail} alt="" />
    </div>
  )
}

export default ProductDetaile
