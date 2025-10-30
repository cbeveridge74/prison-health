import { combineReducers } from '@reduxjs/toolkit';
import medicationReducer from './medicationReducer';
import orderReducer from './orderReducer';

const rootReducer = combineReducers({
  Medications: medicationReducer,
  Orders: orderReducer,
});

export default rootReducer;