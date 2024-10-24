import { FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from './actionTypes';

export const fetchData = () => {
    return async dispatch => {
        dispatch({ type: FETCH_DATA_REQUEST });   // Dispatch an action to say that data fetching has started
    
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/posts'); // Fetch data from an external API
            const data = await response.json();
            dispatch({ type: FETCH_DATA_SUCCESS, payload: data }); // Dispatch success action with the fetched data
        } catch(error){
            dispatch({ type: FETCH_DATA_FAILURE, error: error.message }); // If there's an error, dispatch a failure action with the error message
        }
    }
}