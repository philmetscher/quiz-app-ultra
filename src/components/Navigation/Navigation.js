import { useState } from "react";
import "./Navigation.css";

function Navigation() {
  const [currentActiveNav, setCurrentActiveNav] = useState("home");
  return (
    <nav className="nav-main">
      <ul className="nav__list">
        <li
          className={
            "nav__entry" +
            (currentActiveNav === "home" ? " nav__entry--active" : "")
          }
        >
          <a
            href="#"
            className="nav__link"
            onClick={() => {
              setCurrentActiveNav("home");
            }}
          >
            <i className="fa-solid fa-house"></i>
            <span>Home</span>
          </a>
        </li>
        <li
          className={
            "nav__entry" +
            (currentActiveNav === "bookmarks" ? " nav__entry--active" : "")
          }
        >
          <a
            href="./bookmarks.html"
            className="nav__link"
            onClick={() => {
              setCurrentActiveNav("bookmarks");
            }}
          >
            <i className="fa-solid fa-bookmark"></i>
            <span>Merkliste</span>
          </a>
        </li>
        <li
          className={
            "nav__entry" +
            (currentActiveNav === "form" ? " nav__entry--active" : "")
          }
        >
          <a
            href="./form.html"
            className="nav__link"
            onClick={() => {
              setCurrentActiveNav("form");
            }}
          >
            <i className="fa-solid fa-circle-plus"></i>
            <span>neue Frage</span>
          </a>
        </li>
        <li
          className={
            "nav__entry" +
            (currentActiveNav === "profile" ? " nav__entry--active" : "")
          }
        >
          <a
            href="./profile.html"
            className="nav__link"
            onClick={() => {
              setCurrentActiveNav("profile");
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
