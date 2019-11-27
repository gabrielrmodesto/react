import { combineReducers } from 'redux';
import simpleReducer from './simple';
import { isFetching, fetched, fetchedError } from './app';

export default combineReducers({
    simpleReducer,
    isFetching,
    fetched,
    fetchedError
});