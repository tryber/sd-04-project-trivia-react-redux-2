import React from 'react';

class Tempo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 1,
    };
  }
  render() {
    const { contador } = this.state;
    return (
      <div>
        <h1>Tempo: {contador}</h1>
      </div>
    );
  }
  componentDidMount() {
    const { inciarContagem } = this.props;
    this.setState({
      contador: inciarContagem,
    });
    this.doIntervalChange();
  }
  doIntervalChange = () => {
    this.myInterval = setInterval(() => {
      this.setState((prevState) => ({
        contador: prevState.contador - 1,
      }));
    }, 30);
  };
}

export default Tempo;
