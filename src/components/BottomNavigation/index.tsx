import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-native";
import { TouchableOpacity } from "react-native";
import { RootState } from "../../store";
import { setNavbar } from "../../store/reducers/global";
import { HouseIcon } from "../../assets/icons/HouseIcon";
import { PawIcon } from "../../assets/icons/PawIcon";
import { ListIcon } from "../../assets/icons/ListIcon";
import { UserIcon } from "../../assets/icons/UserIcon";
import { Box } from "./styles";

export const BottomNavigation = () => {
    const global = useSelector((state: RootState) => state.global);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (global.navbar.actived === "home") {
            navigate('/');
        }

        if (global.navbar.actived === "pets") {
            navigate('/pets');
        }

        if (global.navbar.actived === "schedule") {
            navigate('/schedule');
        }

        if (global.navbar.actived === "user") {
            navigate('/user');
        }
    }, [global.navbar.actived])

    return (
        <Box>
            <TouchableOpacity
                onPress={() => {
                    dispatch(setNavbar("home"));
                }}
            >
                {global.navbar.actived === "home" ?
                    <HouseIcon
                        style={{ fill: "#0085FF" }}
                    />
                    :
                    <HouseIcon
                        style={{ fill: "#C8C8D9" }}
                    />
                }
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    dispatch(setNavbar("pets"));
                }}
            >
                {global.navbar.actived === "pets" ?
                    <PawIcon
                        style={{ fill: "#0085FF" }}
                    />
                    :
                    <PawIcon
                        style={{ fill: "#C8C8D9" }}
                    />
                }
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    dispatch(setNavbar("schedule"));
                }}
            >
                {global.navbar.actived === "schedule" ?
                    <ListIcon
                        style={{ fill: "#0085FF" }}
                    />
                    :
                    <ListIcon
                        style={{ fill: "#C8C8D9" }}
                    />
                }
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    dispatch(setNavbar("user"));
                }}
            >
                {global.navbar.actived === "user" ?
                    <UserIcon
                        style={{ fill: "#0085FF" }}
                    />
                    :
                    <UserIcon
                        style={{ fill: "#C8C8D9" }}
                    />
                }
            </TouchableOpacity>
        </Box>
    )
}