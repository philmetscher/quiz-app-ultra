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
          <Card
            question="In the Kingdom Heart series who provides the english voice for Master Eraqus?"
            answer="Mark Hamill"
            tag="kingdomheart"
          />
          <Card
            question="Daniel Radcliffe became a global star in the film industry due to his performance in which film franchise?"
            answer="Harry Potter"
            tag="hewhomustnotbenamed"
          />
          <Card
            question='Which former US president was nicknamed "Teddy" after he refused to shoot a defenseless black bear?'
            answer="Theodore Roosevelt"
            tag="usa,president,teddybear"
          />
        </section>
      </main>
      <Navigation />
    </div>
  );
}

export default App;
