import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import AuthService from "../../services/authService";

const accessToken = JSON.parse(localStorage.getItem("token"));

const initialState = {
  id: 0,
  loading: false,
  error: null,
  serial_no: "",
  user_id: "",
  full_name: "",
  user_name: "",
  email: "",
  cell_no: "",
  user_type: "",
  is_online: "",
  is_active: "",
  is_login: "",
  EmployeeId: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      return {
        ...state,
        isLoggedIn: action.payload ? true : false,
        token: action.payload,
      };
    },
    resetStore: (state) => initialState,
  },
});

const { reducer } = authSlice;
export default reducer;
