import {configureStore} from "@reduxjs/toolkit";
import testsReducer from "./tests/testsSlice";
import userSlice from "./user/userSlice";

export const store = configureStore({
    reducer: {
        tests: testsReducer,
        user: userSlice
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
