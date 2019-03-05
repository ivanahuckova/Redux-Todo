import React from 'react';
import { connect } from 'react-redux';
import { filterTodo } from '../actions/index';

//import styled components
import Input from './partial_components/Input';
import Button from './partial_components/Button';

class FilterTodo extends React.Component {
  textRef = React.createRef();

  render() {
    return (
      <form>
        <Input placeholder="filter your todos..." ref={this.textRef} />
        <Button
          onClick={event => {
            event.preventDefault();
            this.props.filterTodo(this.textRef.current.value);
          }}>
          Submit
        </Button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}

export default connect(
  mapStateToProps,
  { filterTodo }
)(FilterTodo);
