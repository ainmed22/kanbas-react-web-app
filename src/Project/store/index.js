import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "../Courses/Modules/modulesReducer";
import usersReducer from "./usersReducer";

const store = configureStore({
    reducer: {
        usersReducer,
        modulesReducer
    }
});

export default store;