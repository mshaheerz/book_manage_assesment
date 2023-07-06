import { createSlice } from '@reduxjs/toolkit';
export const bookSlice = createSlice({
    name:'bookDetails',
    initialState:{value:[]},
    reducers:{
        books:(state, action)=>{
            state.value = action.payload;
        }
    }
});
export const {books} = bookSlice.actions;
export default bookSlice.reducer;