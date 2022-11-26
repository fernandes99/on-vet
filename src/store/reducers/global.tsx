import { createSlice } from "@reduxjs/toolkit";

const global = createSlice({
    name: 'global',
    initialState: {
        loading: false as boolean,
        navbar: {
            enabled: false as boolean,
            actived: "home" as "home" | "pets" | "schedule" | "user",
        },
    },
    reducers: {
        setLoading (state, action) {
            state.loading = action.payload;
        },
        enableNavbar (state, action) {
            state.navbar.enabled = action.payload;
        },
        setNavbar (state, action) {
            state.navbar.actived = action.payload;
        }
    }
})

export const { setLoading, enableNavbar, setNavbar } = global.actions;
export default global.reducer;