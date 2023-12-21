import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const AuthState = {
  _id: null,
  first_name: null,
  last_name: null,
  email: null,
  isAuth: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: AuthState,
  reducers: {
    setlogin: (state, action) => {
      state._id = action.payload?.User?._id;
      state.first_name = action.payload?.User?.first_name;
      state.last_name = action.payload?.User?.last_name;
      state.email = action.payload?.User?.email;
      state.isAuth = action.payload?.User?.isAuth;

      if (action.payload?.User?._id) {
        localStorage.setItem(
          "USER",
          JSON.stringify({
            User: {
              _id: action.payload?.User?._id,
              first_name: action.payload?.User?.first_name,
              last_name: action.payload?.User?.last_name,
              email: action.payload?.User?.email,
              isAuth: action.payload?.User?.isAuth,
            },
          })
        );
      }
    },
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("USER");
      Cookies.remove("_cks_ui");
      state.isAuth = false;
    },
    register: (state, action) => {
      state.user = action.payload;
      state.isAuth = false;
    },
    getMe: (state, action) => {
      state.user = action.payload;
      state.isAuth = true;
    },
  },
});

export const { setlogin, logout, register, getMe } = authSlice.actions;

export default authSlice.reducer;
