import React from 'react';
import PropTypes from 'prop-types';

const Pergunta = (props) => {
  if (!props.currQuestion) return <div>Loading...</div>;
  const { currQuestion } = props;
  const { category, question } = currQuestion;
  return (
    <div className="container">
      <div data-testid="question-category">Categoria: {category}</div>
      <div data-testid="question-text">{question}</div>
    </div>
  );
};

Pergunta.propTypes = {
  currQuestion: PropTypes.shape({
    category: PropTypes.string,
    question: PropTypes.string,
  }).isRequired,
};

export default Pergunta;
