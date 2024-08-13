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

export const { change } = dashboardSlice.actions;
export default dashboardSlice.reducer;
