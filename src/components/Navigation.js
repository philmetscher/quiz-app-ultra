import styled from "styled-components";
import { NavLink } from "react-router-dom";

function Navigation({ page, setPage }) {
  return (
    <NavMain>
      <NavList>
        <NavEntry>
          <NavEntryLink to="/" end>
            <i className="fa-solid fa-house"></i>
            <span>Home</span>
          </NavEntryLink>
        </NavEntry>
        <NavEntry>
          <NavEntryLink to="/bookmark" end>
            <i className="fa-solid fa-bookmark"></i>
            <span>Merkliste</span>
          </NavEntryLink>
        </NavEntry>
        <NavEntry>
          <NavEntryLink to="/new-question" end>
            <i className="fa-solid fa-circle-plus"></i>
            <span>neue Frage</span>
          </NavEntryLink>
        </NavEntry>
        <NavEntry>
          <NavEntryLink to="/profile" end>
            <i className="fa-solid fa-user"></i>
            <span>Profile</span>
          </NavEntryLink>
        </NavEntry>
      </NavList>
    </NavMain>
  );
}

const NavMain = styled.nav`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background: var(--secondary);
  padding: 10px 20px;
  box-shadow: 0 -4px 4px var(--secondary025);
`;
const NavList = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style-type: none;
`;
const NavEntry = styled.li`
  text-align: center;
  position: relative;
`;
const NavEntryLink = styled(NavLink)`
  display: inline-block;
  min-width: 50px;
  text-decoration: none;
  color: var(--primary);
  border-bottom: 1px solid transparent;
  padding: 10px 0;

  @media screen and (min-width: 768px) {
    min-width: 80px;
  }
  i {
    font-size: 30px;
  }
  span {
    font-size: 0;
    width: 0;
    height: 0;
    opacity: 0;
  }

  &:hover,
  &.active {
    color: var(--primary-hover);
    border-color: var(--primary-hover);
  }
`;

export default Navigation;
