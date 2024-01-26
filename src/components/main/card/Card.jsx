import styled from "styled-components";

const Img = styled.div`
  border-radius: 16px;
  overflow: hidden;
  transition: 0.3s;
  height: 230px;
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

const Description = styled.div`
  > p {
    overflow: hidden;
    white-space: normal;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-break: keep-all;
  }
`;

const StyledCard = styled.article`
  display: flex;
  flex-direction: column;
  gap: 10px;
  cursor: pointer;
  &:hover {
    ${Img} {
      transform: translateY(-15px);
      box-shadow: 0 3px 20px rgba(0, 0, 0, 0.23);
    }
  }
`;

const Card = ({ imgSrc, title, description, period, onClick }) => {
  return (
    <StyledCard onClick={onClick}>
      <Img>
        <img src={imgSrc} />
      </Img>
      <Title>
        <h2>{title}</h2>
      </Title>
      <Description>
        <p>{description}</p>
      </Description>
      <div>
        <p>{period}</p>
      </div>
    </StyledCard>
  );
};

export default Card;
