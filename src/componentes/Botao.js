import React from 'react';

const Botao = ({ texto, onClick, dataTestId, condition = false }) => {
  return (
    <div>
      <button
        data-testid={dataTestId}
        disabled={condition}
        onClick={onClick ? () => onClick() : null}
      >
        {texto}
      </button>
    </div>
  );
};

export default Botao;
