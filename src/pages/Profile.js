import styled from "styled-components";
import Navbar from "../components/Navbar";
import PersnalInfo from "../components/PersnalInfo";
import Orders from "../components/Orders";
import Footer from "../components/Footer";
import MiniCart from "../components/MiniCart";
import Wishlist from "../components/Wishlist";
import { useState } from "react";

function Profile() {
  const [currentComponent, setCurrentComponent] = useState(PersnalInfo);

  const handleClick = (component) => {
    setCurrentComponent(component);
  };

  return (
    <Container>
      <Navbar />
      <Wrapper>
        <UserProfile>
          <Banner>
            <Image src="https://images.unsplash.com/photo-1530982011887-3cc11cc85693?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFubmVyJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"></Image>
          </Banner>
          <UserNavigation>
            <ProfilePic>
              <ImageLogo src="./kunal_logo.jpg"></ImageLogo>
            </ProfilePic>
            <UserDetail>
              <Title>Kunal Kumar</Title>
              <Email>kunal@gmail.com</Email>
              <NavigateList>
                <List onClick={() => handleClick(PersnalInfo)}>Presnal Information</List>
                <List onClick={() => handleClick(Orders)}>Your Orders</List>
                <List onClick={() => handleClick(Wishlist)}>Your WisList</List>
                <List onClick={() => handleClick(MiniCart)}>Your Cart</List>
              </NavigateList>
            </UserDetail>
            <UserInformation>
              {currentComponent}
            </UserInformation>
          </UserNavigation>
        </UserProfile>
      </Wrapper>
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  background-color: #fff7f7;
  width: 100%;
  height: 100vh;
`;
const Wrapper = styled.div`
  max-width: 70%;
  margin: 30px auto;
`;
const UserProfile = styled.div``;
const Banner = styled.div`
  width: 100%;
  height: 165px;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const UserNavigation = styled.div`
  display: flex;
  position: relative;
`;
const ProfilePic = styled.div``;
const ImageLogo = styled.img`
  width: 200px;
  border-radius: 50%;
  position: absolute;
  top: -100px;
  left: 20px;
`;
const UserDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 115px;
  padding-left: 20px;
`;
const Title = styled.h1``;
const Email = styled.span`
  display: flex;
  justify-content: center;
`;
const NavigateList = styled.ul`
  margin-top: 20px;
  padding: 0px;
`;
const List = styled.li`
  padding: 10px 0px;
  list-style: none;
  cursor: pointer;
`;

const UserInformation = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 115px;
  padding-left: 105px;
`;

export default Profile;
