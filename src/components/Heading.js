import styled from "styled-components"

function Heading({title}) {
  return (
    <Container>
      <Title>
        {title}
      </Title>
    </Container>
  )
}
const Container = styled.div`
    margin: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Title = styled.h1`
    font-size: 34px;
    font-weight: 300;
`
export default Heading
