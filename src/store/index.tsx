import { combineReducers, configureStore } from "@reduxjs/toolkit";
import globalReducer from "./reducers/global";

const reducer = combineReducers({
    global: globalReducer,
});

const store = configureStore({
    reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export default store;