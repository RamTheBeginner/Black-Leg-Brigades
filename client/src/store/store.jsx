import { configureStore } from '@reduxjs/toolkit';
import dashboardReducer from './reducers/DasboardSlice';
import userReducer from './reducers/UserSlice';
import valueReducer from './reducers/ChartSlice'
export default configureStore({
  reducer: {
    switcher: dashboardReducer,
    user: userReducer,
    chart: valueReducer
  },
});
