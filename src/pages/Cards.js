import Card from "../components/card/Card";
import "./Cards.css";

function Cards({ cards, setCards }) {
  function deleteCard(id) {
    const newCards = cards.filter((card) => {
      return id !== card.id && card;
    });
    setCards(newCards);
  }
  return (
    <section className="quiz">
      {cards.map(({ id, question, answer, tags, bookmarked }) => (
        <Card
          key={id}
          question={question}
          answer={answer}
          tags={tags}
          bookmarked={bookmarked}
          onDeleteClick={() => {
            deleteCard(id);
          }}
        />
      ))}
    </section>
  );
}

export default Cards;
