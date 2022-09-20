import "./App.css";

import Header from "./components/header/Header";
import Card from "./components/card/Card";
import Navigation from "./components/navigation/Navigation";

const cards = [
  {
    id: 0,
    question:
      "In the Kingdom Heart series who provides the english voice for Master Eraqus?",
    answer: "Mark Hamill",
    tags: ["kingdomheart", "mastereraqus", "english voices"],
  },
  {
    id: 1,
    question:
      "Daniel Radcliffe became a global star in the film industry due to his performance in which film franchise?",
    answer: "Harry Potter",
    tags: ["danielradcliffe", "hewhomustnotbenamed", "abracadabra"],
  },
  {
    id: 2,
    question:
      'Which former US president was nicknamed "Teddy" after he refused to shoot a defenseless black bear?',
    answer: "Theodore Roosevelt",
    tags: ["usa", "president", "teddybear"],
  },
];

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
