import { NativeRouter, Route, Routes } from "react-router-native";
import { useSelector } from "react-redux";
import { Login } from "./pages/Login";
import { Welcome } from "./pages/Welcome";
import { RootState } from "./store";
import { Loading } from "./styles/global";
import { Location } from "./pages/Location";
import { Home } from "./pages/Home";

export const Index = () => {
    const global = useSelector((state: RootState) => state.global);

    return (
        <NativeRouter>
            {global.loading &&
                <Loading />
            }
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/location" element={<Location />} />
            </Routes>
        </NativeRouter>
    );
}