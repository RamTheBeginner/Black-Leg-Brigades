import { createSlice } from '@reduxjs/toolkit';

export const chartSlice = createSlice({
  name: 'chart',
  initialState: {
    value: 0,
  },
  reducers: {
    vary: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { vary } = chartSlice.actions;
export default chartSlice.reducer;
