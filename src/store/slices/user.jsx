import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "employee",
  initialState: [],
  reducers: {
    addEmployee: (state, action) => {
      const employee = action.payload;
      state.push(employee);
    },
  },
});

export default userSlice;
