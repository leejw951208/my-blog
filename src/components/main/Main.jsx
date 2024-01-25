import styled from "styled-components";

const StyledMain = styled.main`
  display: flex;
  justify-content: center;
  height: 100%;
`;

const StyledSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 20px;
  max-width: 768px;
  width: 100%;
  justify-content: space-between;
`;

const StyledDiv = styled.div`
  border: 1px solid #000000;
`;

const Main = () => {
  return (
    <StyledMain>
      <StyledSection>
        <StyledDiv>
          <div>썸네일</div>
          <div>설명</div>
        </StyledDiv>
        <StyledDiv>
          <div>썸네일</div>
          <div>설명</div>
        </StyledDiv>
        <StyledDiv>
          <div>썸네일</div>
          <div>설명</div>
        </StyledDiv>
      </StyledSection>
    </StyledMain>
  );
};

export default Main;
