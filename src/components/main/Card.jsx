import styled from "styled-components";

const ImgDiv = styled.div`
  border-radius: 16px;
  flex: 1;
  overflow: hidden;
  transition: 0.3s;
  > img {
    width: 100%;
  }
`;

const StyledCard = styled.article`
  display: flex;
  flex-direction: column;
  gap: 20px;
  cursor: pointer;
  &:hover {
    ${ImgDiv} {
      transform: translateY(-15px);
    }
  }
`;

const SummaryDiv = styled.div`
  flex: 1;
  > h2 {
    font-size: 24px;
  }
`;

const Card = ({ imgSrc, title, content, period }) => {
  return (
    <StyledCard>
      <ImgDiv>
        <img src={imgSrc} />
      </ImgDiv>
      <SummaryDiv>
        <h2>{title}</h2>
        <p>{content}</p>
        <p>{period}</p>
      </SummaryDiv>
    </StyledCard>
  );
};

export default Card;
