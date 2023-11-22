import { createSlice } from "@reduxjs/toolkit";
// import * as client from "../client";

const initialState = {
    selectedUser: null,
};

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        selectUser: (state, action) => {
            state.selectedUser = action.payload;
        },
    },
});

export const { selectUser } = usersSlice.actions;
export default usersSlice.reducer;