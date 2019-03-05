import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTodo, deleteCompleted } from '../actions/index';

//import styled components
import Button from './partial_components/Button';
import Input from './partial_components/Input';

export class TodoForm extends React.Component {
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
          onClick={() => {
            this.props.deleteCompleted();
          }}>
          Delete completed
        </Button>
      </form>
    );
  }
}

//redux

function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      addTodo,
      deleteCompleted
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoForm);
