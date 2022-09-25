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

  useEffect(() => {
    localStorage.removeItem("cards"); //remove current saved cards;
    localStorage.setItem("cards", JSON.stringify(cards));
  }, [cards]);

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
          <Cards useCards={cards} cards={cards} setCards={setCards} />
        )}
        {page === "bookmarks" && (
          <Cards
            useCards={cards.filter((card) => card.bookmarked)}
            cards={cards}
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
