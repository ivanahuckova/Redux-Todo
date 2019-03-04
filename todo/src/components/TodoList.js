import React from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../actions/index';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.textRef = React.createRef();
  }

  render() {
    console.log(this.props.todos);
    return (
      <div>
        <h3>Todo List</h3>
        {this.props.todos &&
          this.props.todos.map(todo => {
            return <div key={todo.value}>{todo.value}</div>;
          })}

        <form>
          <input placeholder="input your todo" ref={this.textRef} />
          <input
            type="submit"
            onClick={event => {
              event.preventDefault();
              this.props.addTodo(this.textRef.current.value);
              this.textRef.current.value = '';
            }}
          />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  { addTodo }
)(TodoList);
