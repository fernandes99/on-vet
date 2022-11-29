import { NativeRouter, Route, Routes } from "react-router-native";
import { useSelector } from "react-redux";
import { LoginPage } from "./pages/Login";
import { WelcomePage } from "./pages/Welcome";
import { RootState } from "./store";
import { AddressPage } from "./pages/Address";
import { HomePage } from "./pages/Home";
import { PetsPage } from "./pages/Pets";
import { BottomNavigation } from "./components/BottomNavigation";
import { SchedulePage } from "./pages/Schedule";
import { UserPage } from "./pages/User";
import { AddPetPage } from "./pages/AddPet";
import { VaccinesPage } from "./pages/Vaccines";
import { useEffect } from "react";

export const Index = () => {
    const global = useSelector((state: RootState) => state.global);

    useEffect(() => {
        // localStorage.setItem('key', JSON.stringify({ data: 'teste' }));
    }, [])

    return (
        <NativeRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/home" element={<HomePage />} />

                <Route path="/pets" element={<PetsPage />} />
                <Route path="/pets/add" element={<AddPetPage />} />

                <Route path="/vaccines" element={<VaccinesPage />} />
                
                <Route path="/schedule" element={<SchedulePage />} />
                <Route path="/user" element={<UserPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/address" element={<AddressPage />} />
                <Route path="/welcome" element={<WelcomePage />} />
            </Routes>

            {global.navbar.enabled &&
                <BottomNavigation />
            }
        </NativeRouter>
    );
}