import React from 'react';
import InfoBlock from './../InfoBlock/InfoBlock';
import classes from './StatusRequestBlock.module.css';
import { useSelector } from 'react-redux';

const mockDataStatus = {
    error: 'Error while performing a search',
    success: 'Search performed successfully',
    noResult: 'No Result Found'
}

function StatusRequestBlock() {
    const status = useSelector(state => state.movieState.statusRequest);
  return (
    <div className={classes.statusBlockContainer}>
        {status.length > 0 && status.map((el, index) => {
            const text = el === 'error' ? mockDataStatus.error : el === 'success' ? mockDataStatus.success : el === 'noResult' ? mockDataStatus.noResult : null;
            return (
                <InfoBlock key={`${el}_${index}`} status={el} text={text} index={index} />
            )
        }) }
    </div>
  )
}

export default StatusRequestBlock