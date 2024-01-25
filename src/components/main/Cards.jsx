import styled from "styled-components";
import Card from "./Card";

import thumbnail from "../../assets/강해린2.jpeg";

const StyledCards = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, auto));
  max-width: 1040px;
  width: 100%;
  gap: 40px;
`;

const Cards = () => {
  return (
    <StyledCards>
      <Card
        imgSrc={thumbnail}
        title="적금계산기"
        content="내용"
        period="기간"
      />
      <Card imgSrc={thumbnail} title="Notes App" content="내용" period="기간" />
    </StyledCards>
  );
};

export default Cards;
