import React from 'react';
import PropTypes from 'prop-types';

const Respostas = (props) => {
  const { correctAnswer, incorrectAnswers, condition, onClick, difficulty } = props;
  return (
    <div>
      <button
        type="button"
        data-testid="correct-answer"
        style={condition ? { border: '3px solid rgb(6, 240, 15)' } : null}
        onClick={() => onClick(true, difficulty)}
        disabled={condition}
      >
        {correctAnswer}
      </button>
      {incorrectAnswers.map((incorrectAnswer, index) => (
        <button
          type="button"
          key={incorrectAnswer}
          data-testid={`wrong-answer-${index}`}
          style={condition ? { border: '3px solid rgb(255, 0, 0)' } : null}
          onClick={() => onClick(false)}
          disabled={condition}
        >
          {incorrectAnswer}
        </button>
      ))}
    </div>
  );
};

Respostas.propTypes = {
  correctAnswer: PropTypes.string.isRequired,
  incorrectAnswers: PropTypes.arrayOf(PropTypes.string).isRequired,
  condition: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Respostas;
