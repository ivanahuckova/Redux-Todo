import ADD_TODO from '../actions';

const initialState = {
  todos: []
};

export default function todoApp(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state.todos, { text: action.text, completed: false }];
    default:
      return state;
  }
}
