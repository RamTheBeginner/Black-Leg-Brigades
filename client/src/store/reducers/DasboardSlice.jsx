import { createSlice } from '@reduxjs/toolkit';

export const dashboardSlice = createSlice({
  name: 'switcher',
  initialState: {
    value: 0,
  },
  reducers: {
    change: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Export the action creator
export const { change } = dashboardSlice.actions;

// Export the reducer to be used in the store
export default dashboardSlice.reducer;
