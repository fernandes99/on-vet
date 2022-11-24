import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { NativeRouter, Route, Routes } from "react-router-native";
import { useDispatch, useSelector } from "react-redux";
import { Login } from "./pages/Login";
import { User } from "./pages/User";
import { Welcome } from "./pages/Welcome";
import { RootState } from "./store";
import { setLoading } from "./store/reducers/global";
import { Loading } from "./styles/global";

export const Index = () => {
    const dispatch = useDispatch();
    const global = useSelector((state: RootState) => state.global);

    return (
        <NativeRouter>
            {global.loading &&
                <Loading />
            }
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/login" element={<Login />} />
                <Route path="/user/:id" element={<User />} />
            </Routes>
        </NativeRouter>
    );
}