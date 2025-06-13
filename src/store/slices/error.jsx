import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    errors: "",
};

const errorsSlice = createSlice({
    name: "errors",
    initialState,
    reducers: {
        setError: (state, action) => {
            return { errors: action.payload };
        },
        clearError: () => {
            return { errors: "" };
        },
    },
});

const { reducer, actions } = errorsSlice;

export const { setError, clearError } = actions
export default reducer;