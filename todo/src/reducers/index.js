import { ADD_TODO } from '../actions';

const initialState = {
  todos: [{ value: 'write', completed: false }, { value: 'sing', completed: false }, { value: 'walk the dog', completed: false }]
};

export default function todoApp(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: state.todos.concat({ text: `${action.value}`, completed: false })
      };
    default:
      return state;
  }
}
