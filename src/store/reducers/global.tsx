import { createSlice } from "@reduxjs/toolkit";

const global = createSlice({
    name: 'global',
    initialState: {
        loading: false as boolean,
        navbar: {
            enabled: true as boolean,
            actived: "home" as "home" | "pets" | "schedule" | "user",
        },
    },
    reducers: {
        setLoading (state, action) {
            state.loading = action.payload;
        },
        enableNavbar (state, action) {
            state.navbar.enabled = true;
        },
        setNavbar (state, action) {
            state.navbar.actived = action.payload;
        }
    }
})

export const { setLoading, enableNavbar, setNavbar } = global.actions;
export default global.reducer;