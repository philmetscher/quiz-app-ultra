import logo from "../../assets/image/QuizzleUltra.svg";
import "./Header.css";

function Header() {
  return (
    <header className="header-main">
      <img src={logo} alt="Quizzle" />
    </header>
  );
}

export default Header;
