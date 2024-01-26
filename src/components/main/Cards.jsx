import styled from "styled-components";
import Card from "./Card";

import calculator from "../../assets/calculator.jpg";
import notesApp from "../../assets/notes-app.png";

const StyledCards = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, auto));
  max-width: 1040px;
  width: 100%;
  gap: 40px;
`;

const Cards = () => {
  return (
    <StyledCards>
      <Card
        imgSrc={calculator}
        title="적금계산기"
        content="내용"
        period="기간"
      />
      <Card imgSrc={notesApp} title="Notes App" content="내용" period="기간" />
    </StyledCards>
  );
};

export default Cards;
