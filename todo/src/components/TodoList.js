import React from 'react';
import { connect } from 'react-redux';

import { addTodo, deleteTodo, toggleCompleted, deleteCompleted } from '../actions/index';

import TodoItem from './TodoItem';

function TodoList(props) {
  return (
    <div>
      {props.todos.map(todo => {
        return <TodoItem todo={todo} toggleCompleted={props.toggleCompleted} deleteTodo={props.deleteTodo} key={todo.id} />;
      })}
    </div>
  );
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
