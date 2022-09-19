import "./App.css";

import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import Navigation from "./components/Navigation/Navigation";

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
