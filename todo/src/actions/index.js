import uuid from 'uuid';

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';

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

export const toggleCompleted = index => {
  return {
    type: TOGGLE_COMPLETED,
    index
  };
};
