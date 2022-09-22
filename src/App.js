import { useState } from "react";
import "./App.css";

import { initialCards } from "./db";

import Header from "./components/header/Header";
import Navigation from "./components/navigation/Navigation";
import Cards from "./pages/Cards";
import Form from "./pages/Form";
import Profile from "./pages/Profile";

function App() {
  const [page, setPage] = useState("home");
  const [cards, setCards] = useState(initialCards);

  return (
    <div className="App">
      <Header />
      <main>
        {page === "home" && <Cards cards={cards} setCards={setCards} />}
        {page === "bookmarks" && (
          <Cards
            cards={cards.filter((card) => card.bookmarked)}
            setCards={setCards}
          />
        )}
        {page === "form" && (
          <Form cards={cards} setCards={setCards} setPage={setPage} />
        )}
        {page === "profile" && <Profile />}
      </main>
      <Navigation page={page} setPage={setPage} />
    </div>
  );
}

export default App;
