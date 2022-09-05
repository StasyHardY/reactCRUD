import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from '../../../utils/axios'

const initialState = {
   user:[],
   loading:false
}


export const getAllUsers = createAsyncThunk('auth/getAllUsers', async () => {
   try {
      const {data} = await axios.get('auth/users')
      console.log(data)
      return data
   } catch (error) {
      console.log(error)
   }
})

export const removeUsers = createAsyncThunk('auth/removeUsers', async (id) => {
   try {
      const {data} = await axios.delete(`auth/users/${id}`,id)
      return data
   } catch (error) {
      console.log(error)
   }
})




export const userSlice = createSlice({
   name:'user',
   initialState,
   reducers:{
     
   },
   extraReducers:{
      [getAllUsers.pending]:(state) => {
         state.isLoading = true
      },
      [getAllUsers.fulfilled]:(state, action) => {
         state.loading = false
         state.users = action.payload.users
      },
      [getAllUsers.rejected]:(state, action) => {
         state.loading = false
      },

/////////////////////////////////////////////////////////


      [removeUsers.pending]:(state) => {
         state.isLoading = true
      },
      [removeUsers.fulfilled]:(state, action) => {
         state.loading = false
      },
      [removeUsers.rejected]:(state, action) => {
         state.loading = false
      },
   }
})

export default userSlice.reducer