import Card from "../components/card/Card";
import "./Cards.css";

function Cards({ cards }) {
  return (
    <section className="quiz">
      {cards.map(({ id, question, answer, tags, bookmarked }) => (
        <Card
          key={id}
          question={question}
          answer={answer}
          tags={tags}
          bookmarked={bookmarked}
        />
      ))}
    </section>
  );
}

export default Cards;
