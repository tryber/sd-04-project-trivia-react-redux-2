import React from 'react';
import PropTypes from 'prop-types';

const Botao = ({ texto, onClick, dataTestId, condition }) => (
  <div>
    <button
      data-testid={dataTestId}
      disabled={condition}
      onClick={onClick ? () => onClick() : null}
      type="button"
    >
      {texto}
    </button>
  </div>
);

Botao.propTypes = {
  texto: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  dataTestId: PropTypes.string.isRequired,
  condition: PropTypes.string,
};

Botao.defaultProps = {
  onClick: null,
  condition: false,
};

export default Botao;
