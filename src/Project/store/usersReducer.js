import { createSlice } from "@reduxjs/toolkit";
// import * as client from "../client";

const initialState = {
    selectedUser: null,
};

// client.readUsers().then((response) => { initialState.users = response; })

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