import { eventWrapper } from "@testing-library/user-event/dist/utils";
import Card from "../components/card/Card";
import "./Form.css";

function Form({ cards, setCards, setPage }) {
  function appendCard({ question, answer, tags }) {
    const newCard = {
      id: Math.random().toFixed(36),
      question: question,
      answer: answer,
      tags: tags,
      bookmarked: false,
    };

    return newCard;
  }

  function submitCardForm(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const appendingCard = appendCard(data);
    setCards([...cards, appendingCard]);
    setPage("home");
  }

  return (
    <form className="new-question" onSubmit={submitCardForm}>
      <div className="form-group">
        <textarea
          name="question"
          id="question"
          cols="30"
          rows="4"
          placeholder="Your Question:"
          autoFocus
          autoComplete="off"
        ></textarea>
        <label htmlFor="question">Your Question:</label>
      </div>
      <div className="form-group">
        <textarea
          name="answer"
          id="answer"
          cols="30"
          rows="4"
          placeholder="Your Answer:"
          autoComplete="off"
        ></textarea>
        <label htmlFor="answer">Your Answer:</label>
      </div>
      <div className="form-group">
        <input
          type="text"
          name="tags"
          id="tags"
          placeholder="Tags:"
          autoComplete="off"
        />
        <label htmlFor="tags">
          Tags: <small>(seperated with ",")</small>
        </label>
      </div>
      <button className="btn new-question__submit" type="submit">
        Submit
      </button>
    </form>
  );
}

export default Form;
