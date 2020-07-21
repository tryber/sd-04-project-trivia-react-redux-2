import React from 'react';
import PropTypes from 'prop-types';

let segundos = 30;

const decrescimo = () => {
  segundos = segundos - 1;
}

componentDidMount = () => {
  while(sungundos > 0){
    setInterval(decrescimo(), 1000);
  }
}

const Tempo = () => (
  <div>
    ${segundos}
  </div>
);

Input.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  dataTestId: PropTypes.string.isRequired,
};

export default Input;