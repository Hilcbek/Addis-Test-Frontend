import { configureStore } from '@reduxjs/toolkit';
import musicSlice from './auth/musicSlice';
import { combineReducers } from '@reduxjs/toolkit';
const rootReducer = combineReducers({
  music: musicSlice,
});
const store = configureStore({
  reducer: rootReducer,
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
