export const clickReducers = (state = {msg: ''}, action) => {
    switch (action.type) {
        case 'CLICK':
            return {...state,msg: 'School of Net'};
        default:
            return state;
    }
}