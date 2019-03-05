import React from 'react';
import styled from 'styled-components';

const StyledTodoItem = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;

  .line-through {
    text-decoration: line-through;
  }

  button {
    margin-left: 10px;
    padding: 5px;
    cursor: pointer;
  }
`;

export default function TodoItem(props) {
  return (
    <StyledTodoItem>
      {' '}
      <div onClick={() => props.toggleCompleted(props.todo.id)} className={props.todo.completed ? 'line-through' : ''}>
        {props.todo.value}
      </div>
      <button onClick={() => props.deleteTodo(props.todo.id)}>delete</button>
    </StyledTodoItem>
  );
}
