import "./Navigation.css";

function Navigation() {
  return (
    <nav class="nav-main">
      <ul class="nav__list">
        <li class="nav__entry nav__entry--active">
          <a href="#" class="nav__link">
            <i class="fa-solid fa-house"></i>
            <span>Home</span>
          </a>
        </li>
        <li class="nav__entry">
          <a href="./bookmarks.html" class="nav__link">
            <i class="fa-solid fa-bookmark"></i>
            <span>Merkliste</span>
          </a>
        </li>
        <li class="nav__entry">
          <a href="./form.html" class="nav__link">
            <i class="fa-solid fa-circle-plus"></i>
            <span>neue Frage</span>
          </a>
        </li>
        <li class="nav__entry">
          <a href="./profile.html" class="nav__link">
            <i class="fa-solid fa-user"></i>
            <span>Profile</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
