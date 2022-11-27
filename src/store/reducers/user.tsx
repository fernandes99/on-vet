import { createSlice } from "@reduxjs/toolkit";
import { AddPetDataType } from "./addPet";

const user = createSlice({
    name: 'user',
    initialState: {
        data: {} as UserType,
        pets: [] as AddPetDataType[]
    },
    reducers: {
        setUser (state, action) {
            state.data = {...state, ...action.payload};
        },
        addPetUser (state, action) {
            state.pets.push(action.payload);
        }
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

export const { setUser, addPetUser } = user.actions;
export default user.reducer;