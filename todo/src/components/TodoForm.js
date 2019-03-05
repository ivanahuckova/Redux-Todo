import React from 'react';
import { connect } from 'react-redux';

import { addTodo, deleteCompleted } from '../actions/index';

//import styled components
import Button from './partial_components/Button';
import Input from './partial_components/Input';

class TodoForm extends React.Component {
  textRef = React.createRef();

  render() {
    return (
      <form>
        <Input placeholder="input your todo..." ref={this.textRef} />
        <Button
          onClick={event => {
            event.preventDefault();
            this.props.addTodo(this.textRef.current.value);
            this.textRef.current.value = '';
          }}>
          Submit
        </Button>
        <Button
          onClick={event => {
            event.preventDefault();
            this.props.deleteCompleted();
          }}>
          Delete completed
        </Button>
      </form>
    );
  }
}

//redux

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  { addTodo, deleteCompleted }
)(TodoForm);
