import { createSlice } from "@reduxjs/toolkit";

const addPet = createSlice({
    name: 'addPet',
    initialState: {
        data: {} as AddPetDataType
    },
    reducers: {
        setAddPet (state: any, action: any) {
            state.data = {...state.data, ...action.payload};
        },
    }
});

export interface AddPetDataType {
    type: PetType,
    name: string,
    gender: "male" | "female",
    race: string,
    weight: string,
    birthDate?: Date,
    moreInfo: MoreInfoType,
}

export type PetType = "cat" | "dog" | "other";
export type MoreInfoType = {
    isAgressive: boolean,
    isConvulsed: boolean,
    allergy?: string,
    note?: string
}

export const { setAddPet } = addPet.actions;
export default addPet.reducer;