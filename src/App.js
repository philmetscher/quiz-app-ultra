import "./App.css";

import Header from "./components/header/Header";
import Card from "./components/card/Card";
import Navigation from "./components/navigation/Navigation";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <section className="quiz" data-js="card-container">
          <Card />
          <Card />
          <Card />
        </section>
      </main>
      <Navigation />
    </div>
  );
}

export default App;
