import "./Form.css";

function Form() {
  return (
    <form class="new-question" data-js="questionForm">
      <div class="form-group">
        <textarea
          name="question"
          id="question"
          cols="30"
          rows="4"
          placeholder="Your Question:"
          autoFocus
          autocomplete="off"
        ></textarea>
        <label for="question">Your Question:</label>
      </div>
      <div class="form-group">
        <textarea
          name="answer"
          id="answer"
          cols="30"
          rows="4"
          placeholder="Your Answer:"
          autocomplete="off"
        ></textarea>
        <label for="answer">Your Answer:</label>
      </div>
      <div class="form-group">
        <input
          type="text"
          name="tags"
          id="tags"
          placeholder="Tags:"
          autocomplete="off"
        />
        <label for="tags">
          Tags: <small>(seperated with ",")</small>
        </label>
      </div>
      <button class="new-question__submit" type="submit">
        Submit
      </button>
    </form>
  );
}

export default Form;
