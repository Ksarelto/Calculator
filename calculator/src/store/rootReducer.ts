import { combineReducers } from 'redux';
import { calculateReducer } from './calculateReducer';
const rootReducer = combineReducers({
  calculator: calculateReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;