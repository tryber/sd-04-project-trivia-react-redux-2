import React from 'react';
import PropTypes from 'prop-types';

const Pergunta = (props) => {
  if (!props.currQuestion) return <div>Loading...</div>;
  const { currQuestion } = props;
  console.log(currQuestion);
  const { category, question } = currQuestion;
  return (
    <div>
      <div data-testid="question-category">Categoria: {category}</div>
      <div data-testid="question-text">{question}</div>
    </div>
  );
};

Pergunta.propTypes = {
  currQuestion: PropTypes.shape({
    category: PropTypes.string,
    type: PropTypes.string,
    difficulty: PropTypes.string,
    question: PropTypes.string,
    correct_answer: PropTypes.string,
    incorrect_answer: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default Pergunta;
