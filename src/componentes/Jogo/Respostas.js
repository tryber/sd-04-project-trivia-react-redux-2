import React from 'react';
const Respostas = (props) => {
  const { correct_answer, incorrect_answers } = props;
  return (
    <div>
      <button data-testid="correct-answer">{correct_answer}</button>
      {incorrect_answers.map((incorrect_answer, index) => (
        <button data-testid={`wrong-answer-${index}`}>{incorrect_answer}</button>
      ))}
    </div>
  );
};

export default Respostas;
