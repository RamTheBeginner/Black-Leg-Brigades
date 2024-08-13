import { configureStore } from '@reduxjs/toolkit';
import dashboardReducer from './reducers/DasboardSlice';
import userReducer from './reducers/UserSlice';

export default configureStore({
  reducer: {
    switcher: dashboardReducer,
    user: userReducer,
  },
});
