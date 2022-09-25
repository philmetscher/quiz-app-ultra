import Card from "../components/card/Card";
import "./Cards.css";

function Cards({ useCards, cards, setCards }) {
  function deleteCard(id) {
    const newCards = cards.filter((card) => {
      return id !== card.id && card;
    });
    setCards(newCards);
  }

  function toggleBookmark(id) {
    const newCards = cards.filter((card) => {
      if (card.id === id) card.bookmarked = !card.bookmarked;
      return card;
    });
    setCards(newCards);
  }
  return (
    <section className="quiz">
      {useCards.map(({ id, question, answer, tags, bookmarked }) => (
        <Card
          key={id}
          question={question}
          answer={answer}
          tags={tags}
          bookmarked={bookmarked}
          onDeleteClick={() => {
            deleteCard(id);
          }}
          onBookmarkClick={() => {
            toggleBookmark(id);
          }}
        />
      ))}
    </section>
  );
}

export default Cards;
