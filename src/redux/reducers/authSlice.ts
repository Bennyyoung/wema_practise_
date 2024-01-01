import { createSlice } from "@reduxjs/toolkit"

const initialState = {
 isAuthenticated: false,
 user: null
}

const authSlice = createSlice({
 name: 'auth',
 initialState,
 reducers: {
  registerSuccess(state, action) {
   state.isAuthenticated = true
   state.user = action.payload
  },

  logoutSuccess(state) {
   state.isAuthenticated = false;
   state.user = null
  }
 }
})

export const { registerSuccess, logoutSuccess } = authSlice.actions
export default authSlice.reducer