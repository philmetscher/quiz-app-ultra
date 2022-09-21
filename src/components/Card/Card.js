import { useState } from "react";
import "./Card.css";

function Card({ question, answer, tags, bookmarked }) {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <section className={"card"} data-js="card">
      <div className="card__question-wrapper">
        <p className="card__question" data-js="question">
          {question}
        </p>
        <button
          className={"card__btn" + (showAnswer ? " btn--hide-answer" : "")}
          data-js="toggleAnswer"
          onClick={() => {
            setShowAnswer(!showAnswer);
          }}
        >
          {showAnswer ? "Hide Answer" : "Show Answer"}
        </button>
        <ul className="card__tags">
          {tags.map((tag) => (
            <li className="card__tag" key={tag}>
              #{tag}
            </li>
          ))}
        </ul>
      </div>
      {showAnswer && (
        <div className="card__answer-wrapper" data-js="answer">
          <p>{answer}</p>
        </div>
      )}
      <button
        className={
          "card__bookmark" + (bookmarked ? " card__bookmark--active" : "")
        }
        aria-label="bookmark"
        data-js="bookmarkBtn"
      >
        <i className="fa-solid fa-bookmark"></i>
      </button>
    </section>
  );
}

export default Card;
