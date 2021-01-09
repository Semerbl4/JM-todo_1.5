import React from 'react';
// import ReactDOM from "react-dom";
import PropTypes from 'prop-types';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

import './Task.css';

class Task extends React.Component {
  static defaultProps = {
    completed: false,
    taskText: '',
    taskCreateTime: new Date(),
    id: Math.random(),
    completeChanged: () => {},
    taskDestroyed: () => {},
    className: '',
  };

  static propTypes = {
    completed: PropTypes.bool,
    taskText: PropTypes.string,
    taskCreateTime: PropTypes.objectOf(PropTypes.object),
    id: PropTypes.number,
    completeChanged: PropTypes.func,
    taskDestroyed: PropTypes.func,
    className: PropTypes.string,
  };

  completeToogler = () => {
    const { completeChanged } = this.props;
    const { id } = this.props;

    completeChanged(id);
  };

  currentTaskDestroyed = () => {
    const { id } = this.props;
    const { taskDestroyed } = this.props;

    taskDestroyed(id);
  };

  render() {
    const { completed } = this.props;
    const { taskText } = this.props;
    const { taskCreateTime } = this.props;
    const { className } = this.props;

    // console.log(completed);
    // console.log(this.props);
    return (
      <li className={completed ? 'completed' : ''}>
        <div className="view">
          <input className="toggle" type="checkbox" onClick={this.completeToogler} defaultChecked={completed} />
          <label>
            <span className="description">{taskText}</span>
            <span className="created">created {formatDistanceToNow(taskCreateTime, { includeSeconds: true })} ago</span>
          </label>
          <button className="icon icon-edit" type="button" aria-label="Редактировать" />
          <button
            className="icon icon-destroy"
            onClick={this.currentTaskDestroyed}
            type="button"
            aria-label="Удалить"
          />
        </div>
        {className === 'editing' ? <input type="text" className="edit" defaultValue="Editing task" /> : null}
      </li>
    );
  }
}

export default Task;
