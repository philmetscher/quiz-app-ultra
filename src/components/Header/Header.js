import logo from "../../assets/image/QuizzleUltra.svg";
import "./Header.css";

function Header({ useDefaultCards }) {
  return (
    <header className="header-main">
      <img src={logo} alt="Quizzle" />
      <button className="reset__btn" onClick={useDefaultCards}>
        <i className="fa-solid fa-arrows-rotate"></i>
        <span>Karten zurücksetzen</span>
      </button>
    </header>
  );
}

export default Header;
