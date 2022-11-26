import { createSlice } from "@reduxjs/toolkit";

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
});

export interface UserType {
    name: string,
    address: UserAddressType,
}

export interface UserAddressType {
    street: string,
    number: string,
}

export const { setUser } = user.actions;
export default user.reducer;