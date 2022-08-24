import {
  combineReducers,
  applyMiddleware,
  configureStore,
} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import missionsReducer from './missions/missions';
import rocketReducer from './rockets/rockets';

const rootReducer = combineReducers({
  missions: missionsReducer,
  rockets: rocketReducer,
});

const store = configureStore({ reducer: rootReducer }, applyMiddleware(thunk));

export default store;
