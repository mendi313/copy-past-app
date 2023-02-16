import { configureStore } from '@reduxjs/toolkit';
import isLogedInReducer from './reducer';

const rootReducer = isLogedInReducer;

export default configureStore({ reducer: rootReducer });
