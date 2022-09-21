import Card from "../components/card/Card";
import "./Cards.css";

function Cards({ cards }) {
  return (
    <section className="quiz" data-js="card-container">
      {cards.map(({ id, question, answer, tags }) => (
        <Card key={id} question={question} answer={answer} tags={tags} />
      ))}
    </section>
  );
}

export default Cards;
