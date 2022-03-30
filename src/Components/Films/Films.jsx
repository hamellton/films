import React from 'react';
import classes from './Films.module.css';
import { useSelector } from 'react-redux';

const Films = () => {
    const films = useSelector(state => state.movieState.movies);
  return (
    <div className={classes.filmsWrapper}>
        <div className={classes.filmsName}>
                {films.length > 0 ? films.map((el, index) => <div key={`${el}_${index}`} className={classes.filmItem}>{el}</div>) : null}
            </div>
        <div className={classes.filmsInfo} />
        <div className={classes.filmsName} />
    </div>
  )
}

export default Films;