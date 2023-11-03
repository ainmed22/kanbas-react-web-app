import { createSlice } from "@reduxjs/toolkit";
import db from "../Database";

const initialState = {
    users: db.users,
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