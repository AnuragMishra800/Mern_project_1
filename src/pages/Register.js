import styled from "styled-components"

function Register() {
  return (
    <Container>
    <Wrapper>
      <Title>Register</Title>
      <Form>
        <Input placeholder = "Name"/>
        <Input placeholder = "Last Name"/>
        <Input placeholder = "Username"/>
        <Input placeholder = "Email"/>
        <Input placeholder = "Password"/>
        <Input placeholder = "Confirm Password"/>
        <Agreement>
          By creating an account , I consent to the processing of my personal
          data in accordance with the <b>PRIVACY POLICY</b>
        </Agreement>
        <Button>Create</Button>
      </Form>
    </Wrapper>
  </Container>
  )
}
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url("https://i.postimg.cc/htWGsDCk/bg.jpg") center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
`
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`
const Form  = styled.form`
  display: flex;
  flex-wrap: wrap;
`

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`
const Agreement = styled.span`
  font-size: 20px;
  margin: 20px 0px;
`
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`


export default Register