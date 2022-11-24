import { Text } from "react-native"
import { useLocation } from "react-router-native";

export const User = () => {
    let location = useLocation();
    return (
        <Text>
            User List 
        </Text>
    )
}