// import { createStore } from 'redux';  ----> DEPRECATED
import { legacy_createStore as createStore} from 'redux'
import counterReducer from './reducers/counterReducer';

// Create the store using the counterReducer
const store = createStore(counterReducer);

export default store;