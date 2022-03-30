import Axios from "axios";
import { GET_MOVIES_SUCCESS, GET_MOVIES_ERROR, UPDATE_SEARCH_TEXT, DELETE_SUCCESS_STATUS } from "./actionTypes";

export const getMovies = () => {
  return async (dispatch, getState) => {
    try {
      const query = getState().movieState.inputText;
      const result = await Axios.get(`https://swapi.dev/api/films/?search=${query}`);
      dispatch({ type: GET_MOVIES_SUCCESS, payload: result.data.results.map(el => el.title) || [] });
    } catch (error) {
      dispatch({ type: GET_MOVIES_ERROR, error });
    }
  };
};

export const updateSearchInput = (text) => {
  return (dispatch) => {
    dispatch({ type: UPDATE_SEARCH_TEXT, text });
  };
};

export const deleteSuccessStataus = (index) => {
  return (dispatch) => {
    dispatch({ type: DELETE_SUCCESS_STATUS, index });
  };
};

