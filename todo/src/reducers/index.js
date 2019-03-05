import { ADD_TODO, DELETE_TODO, TOGGLE_COMPLETED } from '../actions';
import uuid from 'uuid';

const initialState = {
  todos: [{ id: uuid(), value: 'write', completed: false }, { id: uuid(), value: 'sing', completed: false }, { id: uuid(), value: 'walk the dog', completed: false }]
};

export default function todoApp(state = initialState, action) {
  switch (action.type) {
    //add todo
    case ADD_TODO:
      const updatedTodos = state.todos.concat({ id: action.payload.id, value: `${action.payload.value}`, completed: action.payload.completed });
      return {
        ...state,
        todos: updatedTodos
      };

    //delete todo
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };

    //toggle completed
    case TOGGLE_COMPLETED:
      const newTodos = state.todos.map(todo => {
        if (todo.id === action.index) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      });

      return {
        ...state,
        todos: newTodos
      };

    //default
    default:
      return state;
  }
}
