import "./Form.css";

function Form() {
  return (
    <form className="new-question" data-js="questionForm">
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
      <button className="new-question__submit" type="submit">
        Submit
      </button>
    </form>
  );
}

export default Form;
