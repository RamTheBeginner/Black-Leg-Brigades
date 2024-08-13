import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    value: {
      id:'',
      email: '',
      profileSetup:false,
      firstName: '',
      lastName: '',
      image: 'https://unsplash.com/photos/a-woman-standing-next-to-a-street-light-uOqWyCHitns',
      
      

    },
  },
  reducers: {
    userChange: (state, action) => {
      const { id,email,profileSetup, firstName, lastName, image } = action.payload;
      state.value = { id,email,profileSetup, firstName, lastName, image };
    },
  },
});

export const { userChange } = userSlice.actions;
export default userSlice.reducer;