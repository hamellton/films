import { GET_MOVIES_SUCCESS, GET_MOVIES_ERROR, UPDATE_SEARCH_TEXT, DELETE_SUCCESS_STATUS } from "../actions/actionTypes";

const initialState = {
  movies: [],
  inputText: null,
  filmsValid: 0,
  statusRequest: []
};

const countFilms = 5;

export default function movieReducers(state = initialState, action) {
  switch (action.type) {
    case GET_MOVIES_SUCCESS:
      const movies = [...new Set([...state.movies, ...action.payload])];
      const copyStatusRequest = [...state.statusRequest];

      if(movies.length > 0) {
        copyStatusRequest.push('success');
      } else if(movies.length === 0) {
        copyStatusRequest.push('noResult');
      }

      return {
        ...state,
        movies: movies.slice(0, 5),
        inputText: null,
        filmsValid: Boolean(movies.length >= countFilms),
        statusRequest: copyStatusRequest
      };
    case GET_MOVIES_ERROR:
      const statusRequestState = [...state.statusRequest];
      if(action.error) {
        statusRequestState.push('error');
      }
      return {
        ...state,
        statusRequest: statusRequestState
      };
    case UPDATE_SEARCH_TEXT:
      const prevState = {...state};
      prevState.inputText = action.text;
        return prevState;
    case DELETE_SUCCESS_STATUS:
        return {...state, statusRequest: [...state.statusRequest].filter((el, index) => index !== action.index)};
    default:
      return state;
  }
};

