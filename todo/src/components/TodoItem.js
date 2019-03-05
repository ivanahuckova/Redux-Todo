import React from 'react';

export default function TodoItem(props) {
  return (
    <div onClick={() => props.toggleCompleted(props.todo.id)} className={props.todo.completed ? 'line-through pointer' : 'pointer'}>
      {props.todo.value}
    </div>
  );
}
