// A simplified version of Redux in action
import { createStore } from 'redux';

// Reducer function: Defines how the state should change
function userReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_USER':
      return [...state, action.payload];  // Adds a new user to the list
    default:
      return state;  // If no action matches, return current state
  }
}

// Create the store using the reducer
const store = createStore(userReducer);

// Dispatching an action to add a user
store.dispatch({ type: 'ADD_USER', payload: { name: 'Jane Doe', age: 28 } });

// Check the updated state
console.log(store.getState());  // [{ name: 'Jane Doe', age: 28 }]
