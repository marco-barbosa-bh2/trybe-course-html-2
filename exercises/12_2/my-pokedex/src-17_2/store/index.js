import { createStore, combineReducers } from 'redux';
import clickCounterReducer from '../reducers/clickCounterReducer';

const rootReducer = combineReducers({clickCounterReducer});
const store = createStore(rootReducer);

export default store;