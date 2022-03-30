import React, { useEffect } from 'react';
import classes from './InfoBlock.module.css';
import { useDispatch } from 'react-redux';
import { deleteSuccessStataus } from './../../actions/moviesAction';

const InfoBlock = ({ status, text, index }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        if(status === 'success') {
            setTimeout(() => {
                dispatch(deleteSuccessStataus(index));
            }, 10000);
        } else if(status === 'noResult') {
            setTimeout(() => {
                dispatch(deleteSuccessStataus(index));
            }, 15000);  
        }
    }, [dispatch, status, index])
    
    const deleteButtonHandler = () => {
        dispatch(deleteSuccessStataus(index));
    }

  return (
    <div className={`${classes.infoContainer} ${status === 'success' ? classes.statusSuccess
        : status === 'noResult' ? classes.statusNoResult 
        : status === 'error' ? classes.statusError
        : '' }`}>
                <div>{ text }</div>
                {status === 'error' && <div onClick={deleteButtonHandler} className={classes.button} />}
            </div>
  )
}

export default InfoBlock