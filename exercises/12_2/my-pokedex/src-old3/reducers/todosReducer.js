import { ADD_TODO } from '../actions/index';

const INITIAL_STATE = {
  listToDo: [],
};

const todosReducer = (state=INITIAL_STATE, action) => {
  const { type, value } = action;

  switch (type) {
    case ADD_TODO:
      return {
        ...state,
        listToDo: [...state.listToDo, value],
      };
    default:
      return state;
  };
};

export default todosReducer;
