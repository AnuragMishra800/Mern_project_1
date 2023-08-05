import styled from 'styled-components'


function Wishlist() {
  return (
    <Container>
      <Title>WishList</Title>
      <Desc>
        Here you can manage your profile and also check your order detail and
        your wislist{" "}
      </Desc>
      <Boxs>
        
      </Boxs>
    </Container>
  );
}
const Container = styled.div``;

const Title = styled.h1``;

const Desc = styled.p``;
const Boxs = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px 20px 20px 0px;
  gap: 10px;
`;
export default Wishlist;
