import { configureStore } from '@reduxjs/toolkit';
import dashboardReducer from './reducers/DasboardSlice'

export default configureStore({
  reducer: {
    switcher: dashboardReducer, // Use the reducer here
  },
});
