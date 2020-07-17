import React from 'react';

const Input = (props) => {
  const {dataTestId, texto } = props;
  return(
    <div>
      <label>
        Insira seu {texto}:
        <input type="text" data-testid={dataTestId} />
      </label>
    </div>
  );
}

export default Input;
