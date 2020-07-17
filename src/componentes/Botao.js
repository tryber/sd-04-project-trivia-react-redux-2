import React from 'react';

const Botao = (props) => {
  const { dataTestId, texto } = props;
  return (
    <div>
      <button data-testid={dataTestId}>{texto}</button>
    </div>
  );
};

export default Botao;
