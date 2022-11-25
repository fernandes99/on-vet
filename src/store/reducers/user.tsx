import { createSlice } from "@reduxjs/toolkit";
import { UserType } from "./user.type";

const user = createSlice({
    name: 'user',
    initialState: {
        user: {} as UserType
    },
    reducers: {
        setUser (state: any, action: any) {
            state.user = action.user;
        },
    }
})

export const { setUser } = user.actions;
export default user.reducer;