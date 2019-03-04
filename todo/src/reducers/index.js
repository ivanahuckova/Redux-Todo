import { ADD_TODO } from '../actions';

const initialState = {
  todos: [{ text: 'write', completed: false }, { text: 'sing', completed: false }, { text: 'walk the dog', completed: false }]
};

export default function todoApp(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: state.todos.concat({ text: `${action.text}`, completed: false })
      };
    default:
      return state;
  }
}
