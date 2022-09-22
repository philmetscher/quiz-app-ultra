import { useState } from "react";
import "./Card.css";

function Card({ question, answer, tags, bookmarked }) {
  const [showAnswer, setShowAnswer] = useState(false);

  //check for some tags
  let tagsArray = tags;
  if (typeof tags === "string") {
    if (tags.indexOf(",")) {
      tagsArray = tags.split(",");
    } else {
      tagsArray = [tags];
    }
  }
  return (
    <section className={"card"}>
      <div className="card__question-wrapper">
        <p className="card__question">{question}</p>
        <button
          className={"btn card__btn" + (showAnswer ? " btn--hide-answer" : "")}
          onClick={() => {
            setShowAnswer(!showAnswer);
          }}
        >
          {showAnswer ? "Hide Answer" : "Show Answer"}
        </button>
        <ul className="card__tags">
          {tagsArray.map((tag) => (
            <li className="card__tag" key={tag}>
              #{tag}
            </li>
          ))}
        </ul>
      </div>
      {showAnswer && (
        <div className="card__answer-wrapper">
          <p>{answer}</p>
        </div>
      )}
      <button
        className={
          "card__bookmark" + (bookmarked ? " card__bookmark--active" : "")
        }
        aria-label="bookmark"
      >
        <i className="fa-solid fa-bookmark"></i>
      </button>
      <button className="card__delete" aria-label="delete">
        <i class="fa-solid fa-x"></i>
      </button>
    </section>
  );
}

export default Card;
