import uuid from 'uuid';

export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';
export const DELETE_COMPLETED = 'DELETE_COMPLETED';
export const FILTER_TODOS = 'FILTER_TODOS';

export const addTodo = value => {
  return {
    type: ADD_TODO,
    payload: {
      id: uuid(),
      value,
      completed: false
    }
  };
};

export const deleteTodo = id => {
  return {
    type: DELETE_TODO,
    payload: id
  };
};

export const toggleCompleted = index => {
  return {
    type: TOGGLE_COMPLETED,
    index
  };
};

export const deleteCompleted = () => {
  return {
    type: DELETE_COMPLETED
  };
};

export const filterTodo = text => {
  return {
    type: FILTER_TODOS,
    text
  };
};
