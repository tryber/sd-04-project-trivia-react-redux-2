import React from 'react';
import PropTypes from 'prop-types';

const Respostas = (props) => {
  const { correctAnswer, incorrectAnswers } = props;
  return (
    <div>
      <button type="button" data-testid="correct-answer">
        {correctAnswer}
      </button>
      {incorrectAnswers.map((incorrectAnswer, index) => (
        <button type="button" key={`wrong-answer-${index}`} data-testid={`wrong-answer-${index}`}>
          {incorrectAnswer}
        </button>
      ))}
    </div>
  );
};

Respostas.propTypes = {
  correctAnswer: PropTypes.string.isRequired,
  incorrectAnswers: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Respostas;
