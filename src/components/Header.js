import styled from "styled-components";
import logo from "../assets/image/QuizzleUltra.svg";

function Header({ useDefaultCards }) {
  return (
    <HeaderMain>
      <Logo src={logo} alt="Quizzle" />
      <ResetBtn>
        <i className="fa-solid fa-arrows-rotate"></i>
        <span>Karten zurücksetzen</span>
      </ResetBtn>
    </HeaderMain>
  );
}

const HeaderMain = styled.header`
  padding: 20px 20px 63px;
  text-align: center;
  background: var(--secondary);
  border-bottom: 5px solid var(--primary);
  margin-bottom: 20px;
  box-shadow: 0 4px 4px var(--secondary025);
  color: #fff;
  position: relative;

  @media screen and (min-width: 992px) {
    padding: 20px;
  }
`;
const Logo = styled.img`
  height: 43px;
`;
const ResetBtn = styled.button`
  position: absolute;
  top: 88px;
  width: 205px;
  left: calc(50% - (205px / 2));
  text-align: center;
  display: inline-flex;
  gap: 10px;
  background: none;
  color: #fff;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  outline: none;

  @media screen and (min-width: 992px) {
    left: unset;
    right: 20px;
    top: 30.5px;
  }
`;

export default Header;
