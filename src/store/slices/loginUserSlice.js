import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const {user, email, role, token, isLoggedIn} = JSON.parse(localStorage.getItem("userInfo")) || {};

const initialState = {
  user: user,
  email: email,
  role: role,
  token: token,
  isLoggedIn: isLoggedIn,
  isLoader: true
};

const loginUserSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    loginIn: (state, action) => {
      if (action.payload) {
        const newState = {user: action.payload.user.name, email: action.payload.user.email, role: action.payload.user.role, token: action.payload.token, isLoggedIn: true}
        localStorage.setItem("userInfo", JSON.stringify(newState))
        return newState
      }
    },
    signUpIn: (state, action) => {
      if (action.payload) {
        const newState = ''
      }
    },
    loader: (state) => {
      state.isLoader = !state.isLoader
    } 
  }
})

export const {
  loginIn,
  loader
} = loginUserSlice.actions

export const loginUser = (data) => (dispatch) => {
  dispatch(loader())
  axios.post("https://travelingback.fly.dev/api/v1/users/login", data)
    .then(res => {
      dispatch(loginIn(res.data))
      dispatch(loader())
    })
    .catch(err => {
      console.log(err)
      dispatch(loader())
  })
}

export const registerUser = (data) => (dispatch) => {
  dispatch(loader())
  axios.post("https://travelingback.fly.dev/api/v1/users/signup", data)
    .then(res => dispatch(loader()))
    .catch(err => {
      console.log(err)
      dispatch(loader())
    })
}

export default loginUserSlice.reducer