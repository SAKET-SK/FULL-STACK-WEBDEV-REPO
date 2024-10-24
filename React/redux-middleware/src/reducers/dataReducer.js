import { FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from '../actions/actionTypes';

const initialState = {
  data: [],       // for fetched data
  loading: false,   // implies that we are not loading up any data as of yet
  error: '',     // can be used to accomodate error messages (if things go south)
};

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_DATA_REQUEST:
        // If the data fetching has started, set loading to true
        return { ...state, loading: true };
  
      case FETCH_DATA_SUCCESS:
        // If data was fetched successfully, update the state with the data and set loading to false
        return { ...state, loading: false, data: action.payload };
  
      case FETCH_DATA_FAILURE:
        // If something went wrong, set loading to false and store the error message
        return { ...state, loading: false, error: action.error };
  
      default:
        // If none of the action types match, return the current state unchanged
        return state;
    }
  };
  
  export default dataReducer;