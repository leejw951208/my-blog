import styled from "styled-components";
import Cards from "./card/Cards";

const StyledMain = styled.main`
  display: flex;
  justify-content: center;
  margin-top: 100px;
  height: 100%;
`;

const Main = () => {
  return (
    <StyledMain>
      <Cards />
    </StyledMain>
  );
};

export default Main;
