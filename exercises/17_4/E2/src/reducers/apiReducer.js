import { REQUEST_API, RECEIVE_API, RECEIVE_API_ERROR } from '../actions/index';
  
  const INITIAL_STATE = {
    isFetching: false,
    name: '',
    gender: '',
    aliases: [],
    books: [],
  };
  
  const apiReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case REQUEST_API:
        return {
          ...state,
          isFetching: true,
        };
      case RECEIVE_API:
        return {
          ...state,
          isFetching: false,
          name: action.name,
          gender: action.gender,
          aliases: action.aliases,
          books: action.books,
        }
      case RECEIVE_API_ERROR:
        return {
          ...state,
          error: action.error,
        }
      default:
        return state;
    }
  }
  
  export default apiReducer;
