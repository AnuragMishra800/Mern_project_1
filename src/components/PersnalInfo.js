import { EditOutlined } from "@material-ui/icons";
import styled from "styled-components";
function PersnalInfo() {
  return (
    <Container>
      <Title>Persnal Information</Title>
      <Desc>
        Here you can manage your profile and also check your order detail and
        your wislist{" "}
      </Desc>
      <Boxs>
        <Box>
          <BoxWarrper>
            <Question>Name</Question>
            <Answer>Kunal Kumar</Answer>
          </BoxWarrper>
          <EditOutlined />
        </Box>
        <Box>
          <BoxWarrper>
            <Question>Email</Question>
            <Answer>kunal43255@gmail.com</Answer>
          </BoxWarrper>
          <EditOutlined />
        </Box>
        <Box>
          <BoxWarrper>
            <Question>Date of Birth</Question>
            <Answer>01/02/2035</Answer>
          </BoxWarrper>
          <EditOutlined />
        </Box>
        <Box>
          <BoxWarrper>
            <Question>Cuntry</Question>
            <Answer>India</Answer>
          </BoxWarrper>
          <EditOutlined />
        </Box>
        <Box>
          <BoxWarrper>
            <Question>Language</Question>
            <Answer>English, Hindi</Answer>
          </BoxWarrper>
          <EditOutlined />
        </Box>
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
const Box = styled.div`
  width: 45%;
  padding: 10px;
  background-color: white;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
`;
const BoxWarrper = styled.div``;
const Question = styled.h1``;
const Answer = styled.p``;
export default PersnalInfo;
