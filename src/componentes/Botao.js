import React from 'react';
import PropTypes from 'prop-types';

const Botao = ({ texto, onClick, dataTestId, condition, show = true }) => {
  if (show) {
    return (
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
  }
  return null;
};
Botao.propTypes = {
  texto: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  dataTestId: PropTypes.string.isRequired,
  condition: PropTypes.bool,
  show: PropTypes.bool,
};

Botao.defaultProps = {
  onClick: null,
  condition: false,
  show: true,
};

export default Botao;
