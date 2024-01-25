import styled from "styled-components";
import thumbnail from "../../assets/강해린2.jpeg";

const MainSection = styled.main`
  display: flex;
  justify-content: center;
  height: 100%;
`;

const ReactSecion = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20%, 1fr));
  max-width: 1040px;
  width: 100%;
  gap: 40px;
`;

const Card = styled.article`
  display: flex;
  flex-direction: column;
  width: 320px;
  gap: 20px;
`;

const ImgDiv = styled.div`
  border-radius: 16px;
  flex: 1;
  overflow: hidden;
  > img {
    width: 100%;
  }
`;

const SummaryDiv = styled.div`
  flex: 1;
`;

const Main = () => {
  return (
    <MainSection>
      <ReactSecion>
        <Card>
          <ImgDiv>
            <img src={thumbnail} />
          </ImgDiv>
          <SummaryDiv>설명</SummaryDiv>
        </Card>
        <Card>
          <ImgDiv>
            <img />
          </ImgDiv>
          <SummaryDiv>설명</SummaryDiv>
        </Card>
        <Card>
          <ImgDiv>
            <img />
          </ImgDiv>
          <SummaryDiv>설명</SummaryDiv>
        </Card>
      </ReactSecion>
    </MainSection>
  );
};

export default Main;
