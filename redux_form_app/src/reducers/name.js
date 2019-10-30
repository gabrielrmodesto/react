import { INITIAL_FETCH } from './actions';
const INITIAL_STATE = { data: {} };

export default function reducerName(state = INITIAL_STATE, action){
    switch (action.type) {
        case INITIAL_FETCH:
            return { ...state, data: action.payload };
        default:
            return state;
    }
}