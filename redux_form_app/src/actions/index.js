export const INITIAL_FETCH = 'INITIAL_FETCH';

export function getInitialFetch(){
    return {
        type: INITIAL_FETCH,
        payload: { name: 'Gabriel Modesto' }
    }
}