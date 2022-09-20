import "./App.css";

import Header from "./components/header/Header";
import Card from "./components/card/Card";
import Navigation from "./components/navigation/Navigation";
import { cards } from "./db";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <section className="quiz" data-js="card-container">
          {cards.map(({ id, question, answer, tags }) => (
            <Card key={id} question={question} answer={answer} tags={tags} />
          ))}
        </section>
      </main>
      <Navigation />
    </div>
  );
}

export default App;
