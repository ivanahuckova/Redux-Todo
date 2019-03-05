import React from 'react';
import { connect } from 'react-redux';

import { addTodo, deleteTodo, toggleCompleted, deleteCompleted } from '../actions/index';

import TodoItem from './TodoItem';

class TodoList extends React.Component {
  textRef = React.createRef();

  render() {
    return (
      <div>
        {this.props.todos.map(todo => {
          return <TodoItem todo={todo} toggleCompleted={this.props.toggleCompleted} deleteTodo={this.props.deleteTodo} key={todo.id} />;
        })}
      </div>
    );
  }
}

//Redux
const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  { addTodo, deleteTodo, toggleCompleted, deleteCompleted }
)(TodoList);
