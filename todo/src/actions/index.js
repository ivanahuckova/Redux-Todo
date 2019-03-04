export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';

export const addTodo = value => {
  return {
    type: ADD_TODO,
    value: value
  };
};

export const toggleCompleted = index => {
  return {
    type: TOGGLE_COMPLETED,
    index: index
  };
};
