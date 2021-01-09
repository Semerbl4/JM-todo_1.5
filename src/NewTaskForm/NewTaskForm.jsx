import React from 'react';
import PropTypes from 'prop-types';

import './NewTaskForm.css';

class NewTaskForm extends React.Component {
  state = {
    value: '',
  };

  static defaultProps = {
    addTask: () => {},
  };

  static propTypes = {
    addTask: PropTypes.func,
  };

  render() {
    const { value } = this.state;
    const { addTask } = this.props;

    return (
      <header className="header">
        <h1>todos</h1>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          value={value}
          onChange={(event) => {
            this.setState({ value: event.target.value });
          }}
          onKeyDown={(event) => {
            if (event.keyCode === 13 && event.target.value !== '') {
              addTask(value);
              this.setState({ value: '' });
              // console.log(value);
            }
          }}
        />
      </header>
    );
  }
}

export default NewTaskForm;
