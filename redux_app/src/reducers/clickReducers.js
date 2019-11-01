export const clickReducers = (state = {msg: ''}, action) => {
    switch (action.type) {
        case 'CLICK':
            return {...state,msg: action.msg};
        default:
            return state;
    }
}