import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ name, onChange, dataTestId }) => (
  <input
    className="form-control"
    type="text"
    data-testid={dataTestId}
    onChange={(event) => onChange(event.target)}
    name={name}
    required
    placeholder={`Insira seu ${name}`}
  />
);

Input.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  dataTestId: PropTypes.string.isRequired,
};

export default Input;
