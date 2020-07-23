import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Perfil from '../componentes/Perfil';
import Botao from '../componentes/Botao';
import Pergunta from '../componentes/Jogo/Pergunta';
import Respostas from '../componentes/Jogo/Resposta';
import { fetchToken, fetchTrivia } from '../redux/actions/apiActions';

class PaginaJogo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 30,
      index: 0,
    };
    this.incrementQuestionIndex = this.incrementQuestionIndex.bind(this);
  }

  componentDidMount() {
    const { getToken, getTrivia } = this.props;
    getToken();
    getTrivia();
  }

  incrementQuestionIndex() {
    const { index } = this.state;
    this.setState({ index: index + 1 });
  }

  render() {
    const { questions } = this.props;
    const { index, click } = this.state;
    if (!questions[index]) return <div>Loading...</div>;
    return (
      <div>
        <Perfil />
        <Pergunta currQuestion={questions[index]} />
        <Respostas
          correctAnswer={questions[index].correct_answer}
          incorrectAnswers={questions[index].incorrect_answers}
          condition={click}
          aoClicar={this.desabilitaBotoes}
        />
        <Botao texto="PRÓXIMA" onClick={this.incrementQuestionIndex} dataTestId="btn-next" />
      </div>
    );
  }
}

PaginaJogo.propTypes = {
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string,
      type: PropTypes.string,
      difficulty: PropTypes.string,
      question: PropTypes.string,
      correct_answer: PropTypes.string,
      incorrect_answer: PropTypes.arrayOf(PropTypes.string),
    }),
  ).isRequired,
  getToken: PropTypes.func.isRequired,
  getTrivia: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  questions: state.dataReducer.trivia,
});

const mapDispatchToProps = (dispatch) => ({
  getToken: () => dispatch(fetchToken()),
  getTrivia: () => dispatch(fetchTrivia()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PaginaJogo);
