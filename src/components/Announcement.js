import React from 'react'
import styled from 'styled-components'

function Announcement() {
  return (
    <Container>
      Super Deal! free shipping on Orders Over $50
    </Container>
  )
}
const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 400;
`;

export default Announcement
