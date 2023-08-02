import { Facebook, GitHub, Instagram, LinkedIn, MailOutline, Phone, Room, Telegram } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

function Footer() {
  return (
    <Container>
      <Left>
        <Logo>WEB MAKERS</Logo>
        <Desc>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam perferendis deserunt ut voluptate, quae, eos, ducimus consequatur alias eum tenetur cumque? Perspiciatis, rerum.
        </Desc>
        <SocialContainer>
            <SocialIcon color = "3B5999">
                <Facebook/>
            </SocialIcon>
            <SocialIcon color = "55ACEE">
                <LinkedIn/>
            </SocialIcon>
            <SocialIcon color = "E60023">
                <GitHub/>
            </SocialIcon>
            <SocialIcon color = "E4405F">
                <Instagram/>
            </SocialIcon>
            <SocialIcon color = "3B5999">
                <Telegram/>
            </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Man Fashion</ListItem>
            <ListItem>Women Fashion</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>WishList</ListItem>
            <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
            <Room style={{marginRight:"10px"}}></Room>
            622 Dixie Path , South Tobinchester 98336
        </ContactItem>
        <ContactItem>
            <Phone style={{marginRight:"10px"}}/>
            +91 1234567890
        </ContactItem>
        <ContactItem>
            <MailOutline style={{marginRight:"10px"}}/>
            contact@webmakers.dev
        </ContactItem>
        <Payment ser = "#"/>
      </Right>
    </Container>
  )
}

const Container = styled.div`
    display: flex;

`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.h1``
const Desc = styled.p`
    margin: 20px 0px;
`
const SocialContainer = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #${props=>props.color};
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
`
const Center = styled.div`
    flex: 1;
    padding: 20px;
`
const Title = styled.h3`
    margin-bottom: 30px;
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;

`
const ListItem = styled.li`
    width: 50%;
    margin-bottom:10px ;

`
const Right = styled.div`
    flex: 1;
    padding: 20px;
`
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;

`
const Payment = styled.img`
    width: 100%;
`
export default Footer
