import { createSlice } from '@reduxjs/toolkit';

export const accountSlice = createSlice({
  name: 'transaction',
  initialState: {
    value: -1,
  },
  reducers: {
    transactionChange: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { transactionChange } = accountSlice.actions;
export default accountSlice.reducer;
