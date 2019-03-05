import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { addTodo, deleteTodo, toggleCompleted } from '../actions/index';

import TodoItem from './TodoItem';

import './TodoList.css';

const StyledEnvContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #dbe6f6;
  background: linear-gradient(to right, #c5796d, #dbe6f6);
`;

const StyledTodoContainer = styled.div`
  width: 50%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px 0;

  h3 {
    font-size: 3rem;
    color: #c5796d;
    padding: 0;
    margin: 0 0 30px 0;
  }

  input {
    margin: 30px 0;
    line-height: 2;
    border: 1px solid #c5796d;
    border-radius: 5px;
    padding: 0 10px;
    margin: 10px;
    color: #c5796d;
    font-size: 1rem;

    &::placeholder {
      color: #c5796d;
    }

    &:last-of-type {
      border: none;
      color: white;
      background-color: #c5796d;
      border-radius: 5px;
      padding: 0 10px;
      margin: 10px;
      font-size: 1rem;
    }
  }
  div {
    margin: 5px 0;
    font-size: 1.5rem;
  }
`;

class TodoList extends React.Component {
  textRef = React.createRef();

  render() {
    return (
      <StyledEnvContainer>
        <StyledTodoContainer>
          <h3>Todo List</h3>
          {this.props.todos &&
            this.props.todos.map(todo => {
              return <TodoItem todo={todo} toggleCompleted={this.props.toggleCompleted} deleteTodo={this.props.deleteTodo} key={todo.id} />;
            })}

          <form>
            <input placeholder="input your todo..." ref={this.textRef} />
            <input
              type="submit"
              onClick={event => {
                event.preventDefault();
                this.props.addTodo(this.textRef.current.value);
                this.textRef.current.value = '';
              }}
            />
          </form>
        </StyledTodoContainer>
      </StyledEnvContainer>
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
  { addTodo, deleteTodo, toggleCompleted }
)(TodoList);
