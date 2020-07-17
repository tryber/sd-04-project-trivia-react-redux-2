import React from 'react';

const Input = ({ name, onChange, dataTestId }) => {
  return (
    <div>
      <label htmlFor={name}>
        Insira seu {name}:
        <input
          type="text"
          data-testid={dataTestId}
          onChange={(event) => onChange(event.target)}
          name={name}
        ></input>
      </label>
    </div>
  );
};

export default Input;
