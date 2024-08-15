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
      Accounts:[],
      Transactions:[]
      
      

    },
  },
  reducers: {
    userChange: (state, action) => {
      const { id,email,profileSetup, firstName, lastName, image,Accounts,Transactions} = action.payload;
      state.value = { id,email,profileSetup, firstName, lastName, image,Accounts ,Transactions};
    },
  },
});

export const { userChange } = userSlice.actions;
export default userSlice.reducer;
