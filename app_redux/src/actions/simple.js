export default function simpleAction() {
    console.log('Hello from actions');
    return (dispatch) => {
        dispatch({ type: 'ACTION_1', payload: {msg: 'Hello Thunk'}})
    }
}