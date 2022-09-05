import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from '../../../utils/axios'

const initialState = {
   user:null,
   token:null,
   isLoading:false,
   status:null
}

export const registerUser = createAsyncThunk('auth/registerUser', async ({username, password, email, skills}) => {
   try {
      const {data} = await axios.post('auth/register', {
         username, password, email, skills
      })
      if(data.token) {
         window.localStorage.setItem('token', data.token)
      }
      return data
   } catch (error) {
      console.log(error)
   }
})

export const loginUser = createAsyncThunk('auth/loginUser', async ({password, username,}) => {
   try {
      const {data} = await axios.post('auth/login', {
         password, username
      })
      if(data.token) {
         window.localStorage.setItem('token', data.token)
      }
      return data
   } catch (error) {
      console.log(error)
   }
})

export const getUser = createAsyncThunk('auth/loginUser', async () => {
   try {
      const {data} = await axios.post('auth/me')
      return data
   } catch (error) {
      console.log(error)
   }
})

export const authSlice = createSlice({
   name:'auth',
   initialState,
   reducers:{
      logout:(state)=> {
         state.user=null
         state.token=null
         state.isLoading=false
         state.status=null
      }
   },
   extraReducers:{
      // register
      [registerUser.pending]:(state) => {
         state.isLoading = true
         state.status = null
      },
      [registerUser.fulfilled]:(state, action) => {
         state.isLoading = false
         state.status = action.payload.message
         state.user = action.payload.user
         state.token = action.payload.token
      },
      [registerUser.rejected]:(state, action) => {
         state.status = action.payload.message
         state.isLoading = false
      },
      // login
      [loginUser.pending]:(state) => {
         state.isLoading = true
         state.status = null
      },
      [loginUser.fulfilled]:(state, action) => {
         state.isLoading = false
         state.status = action.payload.message
         state.user = action.payload.user
         state.token = action.payload.token
      },
      [loginUser.rejected]:(state, action) => {
         state.status = action.payload.message
         state.isLoading = false
      },
      // get User
      [getUser.pending]:(state) => {
         state.isLoading = true
         state.status = null
      },
      [getUser.fulfilled]:(state, action) => {
         state.isLoading = false
         state.status = null
         state.user = action.payload?.user
         state.token = action.payload?.token
      },
      [getUser.rejected]:(state, action) => {
         state.status = action.payload.message
         state.isLoading = false
      }
   }
})

export const checkIsAuth = (state) =>  Boolean(state.auth.token)
export const {logout} = authSlice.actions
export default authSlice.reducer