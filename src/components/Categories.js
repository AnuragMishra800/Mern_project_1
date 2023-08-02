import React from 'react'
import { categories } from '../data'
import styled  from 'styled-components'
import CategoryItem from './CategoryItem'

function Categories() {
  return (
    <Container>
      {
        categories.map((item)=>(
            <CategoryItem item = {item}/>
        ))
      }
    </Container>
  )
}
const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
`

export default Categories
