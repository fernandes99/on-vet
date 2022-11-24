import { Text, View } from "react-native";
import { NativeRouter, Route, Routes } from "react-router-native";
import { Login } from "./pages/Login";
import { User } from "./pages/User";
import { Welcome } from "./pages/Welcome";

export const Index = () => {
    return (
        <NativeRouter>
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/login" element={<Login />} />
                <Route path="/user/:id" element={<User />} />
            </Routes>
        </NativeRouter>
    );
}