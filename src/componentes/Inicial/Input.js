import React from 'react';

class Input extends React.Component {
  render() {
    const { label } = this.props;

    return (
      <div data-testid="">
        <label>{ label }</label>
        <input type="text" />
      </div>
    );
  }
}

export default Input;
