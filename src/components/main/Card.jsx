import styled from "styled-components";

const ImgDiv = styled.div`
  border-radius: 16px;
  overflow: hidden;
  transition: 0.3s;
  height: 200px;
  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
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
      box-shadow: 0 3px 20px rgba(0, 0, 0, 0.23);
    }
  }
`;

const SummaryDiv = styled.div`
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
