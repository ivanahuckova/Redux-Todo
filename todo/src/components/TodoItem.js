import React from 'react';
import styled from 'styled-components';

const StyledTodoItem = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  margin: 5px 0;
  font-size: 1.5rem;

  .line-through {
    text-decoration: line-through;
  }

  span {
    margin-left: 10px;
    padding: 5px;
    cursor: pointer;
    font-size: 0.9rem;
  }
`;

export default function TodoItem(props) {
  return (
    <StyledTodoItem>
      <div onClick={() => props.toggleCompleted(props.todo.id)} className={props.todo.completed ? 'line-through' : ''}>
        {props.todo.value}
      </div>
      <div onClick={() => props.deleteTodo(props.todo.id)}>
        <span role="img" aria-label="delete button">
          ❌
        </span>
      </div>
    </StyledTodoItem>
  );
}
