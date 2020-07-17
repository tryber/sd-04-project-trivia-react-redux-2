import React, { Component } from 'react';
import { connect } from 'react-redux';
import Profile from '../componentes/Perfil';
import Botao from '../componentes/Botao';
import Pergunta from '../componentes/Jogo/Pergunta';
import Respostas from '../componentes/Jogo/Respostas';

class PaginaJogo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 30,
      index: 0,
    };
    this.incrementQuestionIndex = this.incrementQuestionIndex.bind(this);
  }

  incrementQuestionIndex() {
    const { index } = this.state;
    this.setState({ index: index + 1 });
  }
  render() {
    const { questions } = this.props;
    const { index } = this.state;
    if(!questions[index]) return <div>Loading...</div>
    return (
      <div>
        <Profile />
        <Pergunta currQuestion={questions[index]} />
        <Botao texto="PRÓXIMA" onClick={this.incrementQuestionIndex} />
        {console.log(questions[index].correct_answer)}
        <Respostas
          correct_answer={questions[index].correct_answer}
          incorrect_answers={questions[index].incorrect_answers}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  questions: state.dataReducer.trivia,
});

export default connect(mapStateToProps)(PaginaJogo);
