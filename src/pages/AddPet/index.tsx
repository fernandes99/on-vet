import { useEffect } from "react";
import { View } from "react-native"
import { useDispatch } from "react-redux";
import { enableNavbar } from "../../store/reducers/global";

export const AddPetPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(enableNavbar(false));
    }, []);

    return (
        <View>
            
        </View>
    )
}