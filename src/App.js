import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import { initialCards } from "./db";

import Header from "./components/Header";
import Navigation from "./components/Navigation";
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
        <Routes>
          <Route
            path="/"
            element={
              <Cards useCards={cards} cards={cards} setCards={setCards} />
            }
          />
          <Route
            path="/bookmark"
            element={
              <Cards
                useCards={cards.filter((card) => card.bookmarked)}
                cards={cards}
                setCards={setCards}
              />
            }
          />
          <Route
            path="/new-question"
            element={
              <Form cards={cards} setCards={setCards} setPage={setPage} />
            }
          />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
      <Navigation page={page} setPage={setPage} />
    </div>
  );
}

export default App;
