import { useDispatch } from "react-redux";
import styled from "styled-components";
import { detailAction } from "../../../store/detail-slice";

const Container = styled.div`
  display: ${(props) => (props.$open ? "block" : "none")};
  z-index: 999;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.35);
`;

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  max-width: 100%;
  max-height: 100%;
  overflow-y: auto;
  background-color: white;
  border-radius: 15px;
  padding: 20px;
`;

const CloseButton = styled.div`
  display: flex;
  justify-content: flex-end;
  > button {
    border: none;
    background-color: transparent;
    font-size: 20px;
    cursor: pointer;
  }
`;

const Body = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 20px;
  gap: 15px;
`;

const Img = styled.div`
  border-radius: 16px;
  overflow: hidden;
  width: 100%;
  height: 100%;
  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Title = styled.div`
  margin-top: 15px;
  > h2 {
    font-size: 24px;
  }
`;

const Skills = styled.div`
  display: flex;
  gap: 10px;
  > span {
    background-color: #f1f3f5;
    border-radius: 15px;
    padding: 5px 10px;
    color: #6a7585;
    font-weight: 600;
    font-size: 16px;
  }
`;

const Detail = ({ open, data }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(detailAction.setDetail({ is: false, id: data.id }));
  };

  return (
    <Container $open={open}>
      <Overlay />
      <Wrapper>
        <CloseButton>
          <button onClick={handleClick}>X</button>
        </CloseButton>
        <Body>
          <Img>
            <img src={data.thumbnail} alt="썸네일" />
          </Img>
          <Title>
            <h2>{data.title}</h2>
          </Title>
          <Skills>
            {data.skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </Skills>
        </Body>
      </Wrapper>
    </Container>
  );
};

export default Detail;
