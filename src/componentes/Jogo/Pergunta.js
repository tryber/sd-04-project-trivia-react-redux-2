import React from 'react';

const Pergunta = (props) => {
  if (!props.currQuestion) return <div>Loading...</div>;
  const { currQuestion } = props;
  const { category, question } = currQuestion;
  return (
    <div>
      <div data-testid="question-category">Categoria: {category}</div>
      <div data-testid="question-text">{question}</div>
    </div>
  );
};

export default Pergunta;
