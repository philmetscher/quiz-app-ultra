import { useEffect, useState } from "react";
import "./App.css";

import { initialCards } from "./db";

import Header from "./components/header/Header";
import Navigation from "./components/navigation/Navigation";
import Cards from "./pages/Cards";
import Form from "./pages/Form";
import Profile from "./pages/Profile";

function App() {
  const [page, setPage] = useState("home");
  const [cards, setCards] = useState(
    () => JSON.parse(localStorage.getItem("cards")) ?? initialCards
  );

  function setSavedCards(currentCards) {
    localStorage.removeItem("cards"); //remove current saved cards;
    localStorage.setItem("cards", JSON.stringify(currentCards));
    localStorage.setItem("loadedCards", true);
  }

  return (
    <div className="App">
      <Header
        useDefaultCards={() => {
          localStorage.removeItem("cards");
          setCards(initialCards);
        }}
      />
      <main>
        {page === "home" && (
          <Cards
            cards={cards}
            setCards={setCards}
            setSavedCards={setSavedCards(cards)}
          />
        )}
        {page === "bookmarks" && (
          <Cards
            cards={cards.filter((card) => card.bookmarked)}
            setCards={setCards}
            setSavedCards={setSavedCards(cards)}
          />
        )}
        {page === "form" && (
          <Form
            cards={cards}
            setCards={setCards}
            setPage={setPage}
            setSavedCards={setSavedCards(cards)}
          />
        )}
        {page === "profile" && <Profile />}
      </main>
      <Navigation page={page} setPage={setPage} />
    </div>
  );
}

export default App;
