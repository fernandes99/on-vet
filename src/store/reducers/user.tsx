import { createSlice } from "@reduxjs/toolkit";
import { AddPetDataType, MoreInfoType, PetType } from "./addPet";

const PetMock = {
    name: 'Mel',
    type: 'dog',
    gender: 'female',
    race: 'Buldog',
    weight: '4 ~ 6kg',
    image: 'https://i.pinimg.com/originals/6c/a5/a7/6ca5a7efff600deda95e0719551e4c0d.jpg',
    moreInfo: {
        isAgressive: true,
        isConvulsed: false
    }
} as UserPetType;

const user = createSlice({
    name: 'user',
    initialState: {
        data: {} as UserType,
        pets: [PetMock] as UserPetType[]
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

export interface UserPetType {
    type: PetType,
    name: string,
    gender: "male" | "female",
    race: string,
    weight: string,
    birthDate?: Date,
    image?: string,
    moreInfo: MoreInfoType,
}
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