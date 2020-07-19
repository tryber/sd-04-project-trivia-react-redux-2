import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ name, onChange, dataTestId }) => (
  <div>
    <label htmlFor={name}>
      {`Insira seu ${name}:`}
      <input
        type="text"
        data-testid={dataTestId}
        onChange={(event) => onChange(event.target)}
        name={name}
      />
    </label>
  </div>
);

Input.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  dataTestId: PropTypes.string.isRequired,
};

export default Input;
