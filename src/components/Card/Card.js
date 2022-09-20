import "./Card.css";

function Card({ question, answer, tag }) {
  return (
    <section className="card" data-js="card">
      <div className="card__question-wrapper">
        <p className="card__question" data-js="question">
          {question}
        </p>
        <button className="card__btn" data-js="toggleAnswer">
          Show Answer
        </button>
        <ul className="card__tags">
          <li className="card__tag">#{tag}</li>
        </ul>
      </div>
      <div className="card__answer-wrapper" data-js="answer">
        <p>{answer}</p>
      </div>
      <button
        className="card__bookmark"
        aria-label="bookmark"
        data-js="bookmarkBtn"
      >
        <i className="fa-solid fa-bookmark"></i>
      </button>
    </section>
  );
}

export default Card;
