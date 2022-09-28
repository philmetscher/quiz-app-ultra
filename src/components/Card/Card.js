import { useState } from "react";
import styled from "styled-components";
import "./Card.css";

function Card({
  question,
  answer,
  tags,
  bookmarked,
  onDeleteClick,
  onBookmarkClick,
}) {
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
    <ActualCard>
      <CardQuestionWrapper>
        <CardQuestion>{question}</CardQuestion>
        <CardBtn
          className={"btn" + (showAnswer ? " btn--hide-answer" : "")}
          onClick={() => setShowAnswer(!showAnswer)}
        >
          {showAnswer ? "Hide Answer" : "Show Answer"}
        </CardBtn>
        <CardTags>
          {tagsArray.map((tag) => (
            <li key={tag}>{"#" + tag}</li>
          ))}
        </CardTags>
      </CardQuestionWrapper>
      {showAnswer && (
        <CardAnswerWrapper>
          <p>{answer}</p>
        </CardAnswerWrapper>
      )}
      <BookmarkBtn
        className={bookmarked ? "active" : ""}
        aria-label="bookmark"
        onClick={onBookmarkClick}
      >
        <i className="fa-solid fa-bookmark"></i>
      </BookmarkBtn>
      <DeleteBtn aria-label="delete" onClick={onDeleteClick}>
        <i className="fa-solid fa-x"></i>
      </DeleteBtn>
    </ActualCard>
  );
}

const ActualCard = styled.section`
  box-shadow: 0 0 4px var(--secondary025);
  width: 260px;
  position: relative;
`;
const CardQuestionWrapper = styled.div`
  background: var(--card-bg);
  padding: 30px 20px;
  text-align: center;
  position: relative;
  overflow: hidden;
  height: auto;
`;
const CardAnswerWrapper = styled.div`
  padding: 20px;
  background: var(--secondary);
  filter: drop-shadow(0 -4px 4px var(--secondary025));
  color: var(--card-answer-color);
  z-index: 1;
  text-align: center;
  transition: all 0.25s ease;
  overflow: hidden;
`;
const CardQuestion = styled.p`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  min-height: 81px;
`;
const CardBtn = styled.button`
  margin-top: 20px;

  &.btn--hide-answer {
    background: var(--secondary);
    color: var(--card-btn-hide-answer-color);
  }
`;
const CardTags = styled.ul`
  display: flex;
  flex-flow: row wrap;
  gap: 10px;
  justify-content: center;
  list-style-type: none;
  margin-top: 20px;
`;

const BookmarkBtn = styled.button`
  position: absolute;
  right: 10px;
  top: 0;
  border: none;
  background: none;
  font-size: 24px;
  box-shadow: none;

  i {
    position: relative;
    top: -4px;
    color: var(--secondary);
  }

  &.active i {
    color: var(--primary);
  }

  &:hover i {
    color: var(--primary-hover);
  }
`;
const DeleteBtn = styled.button`
  position: absolute;
  left: -10px;
  top: -10px;
  border: none;
  background: none;
  box-shadow: none;
  font-size: 20px;

  i {
    background: var(--secondary);
    color: var(--primary);
    border-radius: 100%;
    padding: 5px;
    width: 30px;
    height: 30px;
    line-height: 20px;
  }

  &:hover i {
    background: var(--primary-hover);
    color: #fff;
  }
`;
/*


*/

export default Card;
