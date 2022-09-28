import styled from "styled-components";
import Card from "../components/Card";

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
    <ActualQuiz>
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
    </ActualQuiz>
  );
}

const ActualQuiz = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: baseline;
  gap: 30px;
`;

export default Cards;
