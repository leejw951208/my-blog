import styled from "styled-components";
import Card from "./Card";

import CONTENT_DATAS from "../../../data";

const StyledCards = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  justify-content: center;
  max-width: 1280px;
  width: 100%;
  gap: 40px;
  padding: 0 30px;
  @media screen and (max-width: 300px) {
    grid-template-columns: 1fr;
  }
`;

const Cards = () => {
  return (
    <StyledCards>
      {CONTENT_DATAS.map((content) => (
        <Card
          key={content.title}
          imgSrc={content.thumbnail}
          title={content.title}
          description={content.description}
          period={content.period}
        />
      ))}
    </StyledCards>
  );
};

export default Cards;
