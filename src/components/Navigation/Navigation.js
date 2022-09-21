import "./Navigation.css";

function Navigation({ page, setPage }) {
  return (
    <nav className="nav-main">
      <ul className="nav__list">
        <li
          className={
            "nav__entry" + (page === "home" ? " nav__entry--active" : "")
          }
        >
          <a
            href="#"
            className="nav__link"
            onClick={(event) => {
              event.preventDefault();
              setPage("home");
            }}
          >
            <i className="fa-solid fa-house"></i>
            <span>Home</span>
          </a>
        </li>
        <li
          className={
            "nav__entry" + (page === "bookmarks" ? " nav__entry--active" : "")
          }
        >
          <a
            href="./bookmarks.html"
            className="nav__link"
            onClick={(event) => {
              event.preventDefault();
              setPage("bookmarks");
            }}
          >
            <i className="fa-solid fa-bookmark"></i>
            <span>Merkliste</span>
          </a>
        </li>
        <li
          className={
            "nav__entry" + (page === "form" ? " nav__entry--active" : "")
          }
        >
          <a
            href="./form.html"
            className="nav__link"
            onClick={(event) => {
              event.preventDefault();
              setPage("form");
            }}
          >
            <i className="fa-solid fa-circle-plus"></i>
            <span>neue Frage</span>
          </a>
        </li>
        <li
          className={
            "nav__entry" + (page === "profile" ? " nav__entry--active" : "")
          }
        >
          <a
            href="./profile.html"
            className="nav__link"
            onClick={(event) => {
              event.preventDefault();
              setPage("profile");
            }}
          >
            <i className="fa-solid fa-user"></i>
            <span>Profile</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
