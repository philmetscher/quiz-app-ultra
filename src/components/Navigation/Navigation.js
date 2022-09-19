import "./Navigation.css";

function Navigation() {
  return (
    <nav className="nav-main">
      <ul className="nav__list">
        <li className="nav__entry nav__entry--active">
          <a href="#" className="nav__link">
            <i className="fa-solid fa-house"></i>
            <span>Home</span>
          </a>
        </li>
        <li className="nav__entry">
          <a href="./bookmarks.html" className="nav__link">
            <i className="fa-solid fa-bookmark"></i>
            <span>Merkliste</span>
          </a>
        </li>
        <li className="nav__entry">
          <a href="./form.html" className="nav__link">
            <i className="fa-solid fa-circle-plus"></i>
            <span>neue Frage</span>
          </a>
        </li>
        <li className="nav__entry">
          <a href="./profile.html" className="nav__link">
            <i className="fa-solid fa-user"></i>
            <span>Profile</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
