import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRef } from 'react';
import { getMovies, updateSearchInput } from '../../actions/moviesAction';
import classes from './SearchInput.module.css';

const mockDataSearch = {
    emptyInputError: 'please, enter the text!',
    inputPlaceholder: 'text to search',
  }

const SearchInput = () => {
const inputValue = useSelector(state => state.movieState.inputText);

const filmsValid = useSelector(state => state.movieState.filmsValid);

const searchInputRef = useRef();
  
const dispatch = useDispatch();
  
const submitButton = () => {
    if(inputValue) {
      dispatch(getMovies());
    } else {
      alert(mockDataSearch.emptyInputError);
    }
}

const searchHandler = () => {
    const text = searchInputRef.current.value;
      dispatch(updateSearchInput(text));
};

  return (
    <div className={classes.searchWrapper}>
        <input className={classes.input} placeholder={mockDataSearch.inputPlaceholder} ref={searchInputRef} onChange={searchHandler} type="text" value={inputValue ? inputValue : ''} />
        <button disabled={filmsValid} className='btn' onClick={submitButton}>Submit</button>
    </div>
  )
};

export default SearchInput;