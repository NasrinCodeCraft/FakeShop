import { configureStore } from '@reduxjs/toolkit';
import reducers from './reducers/index';

const store = configureStore({
  reducers,
  preloadedState,
});

export default store;