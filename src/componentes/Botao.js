import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Botao = ({ texto, onClick, dataTestId, condition, show = true, renderLink = false }) => {
  if (show && !renderLink) {
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
  if (show && renderLink) {
    return (
      <Link data-testid="btn-next" to="/feedback">
        PRÓXIMA
      </Link>
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
  renderLink: PropTypes.bool,
};

Botao.defaultProps = {
  onClick: null,
  condition: false,
  show: true,
  renderLink: false,
};

export default Botao;
