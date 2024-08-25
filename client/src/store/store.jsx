import { configureStore } from '@reduxjs/toolkit';
import dashboardReducer from './reducers/DasboardSlice';
import userReducer from './reducers/UserSlice';
import valueReducer from './reducers/ChartSlice'
import transactionChange  from './reducers/AccountSlice';
export default configureStore({
  reducer: {
    switcher: dashboardReducer,
    user: userReducer,
    chart: valueReducer,
    transaction: transactionChange,
  },
});
