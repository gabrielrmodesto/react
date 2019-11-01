import { createStore, applyMiddleware } from 'redux';
import  rootReducer from './reducers';

export default () => {
    const enchanters = applyMiddleware();

    return createStore(
        rootReducer,
        enchanters
    )
}