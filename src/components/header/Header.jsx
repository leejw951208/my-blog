import styled from "styled-components";

const StyledHeader = styled.header`
  height: 72px;
  border-bottom: 1px solid #e1e4eb;
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  margin-left: 40px;
`;

const Home = styled.a`
  flex: 1;
  text-decoration-line: none;
  > span {
    font-size: 25px;
    color: #006aff;
    font-weight: 600;
  }
`;

const Nav = styled.nav`
  flex: 2;
`;

const Menus = styled.ul`
  list-style: none;
  display: flex;
  gap: 40px;
  > li {
    font-size: 18px;
    font-weight: 550;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <StyledDiv>
        <Home>
          <span>Home</span>
        </Home>
        <Nav>
          <Menus>
            <li>Study</li>
          </Menus>
        </Nav>
      </StyledDiv>
    </StyledHeader>
  );
};

export default Header;
