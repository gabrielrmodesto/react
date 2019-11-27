import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import  rootReducer from './reducers';

export default () => {
    const enchanters = applyMiddleware(thunk);
    
    return createStore(
        rootReducer,
        enchanters
    )
}