import React from 'react'
import styled from 'styled-components'
import { popularProducts } from '../data'
import Product from './Product'

function Products() {
  return (
    <Container>
      {
        popularProducts.map((item)=>(
            <Product item={item} key={item.id}></Product>
        ))
      }
    </Container>
  )
}
const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
`

export default Products
