import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";
import { Text, View } from "react-native"
import { enableNavbar } from "../../store/reducers/global"
import { RootState } from "../../store";

export const HomePage = () => {
    const dispatch = useDispatch();
    const global = useSelector((state: RootState) => state.global);

    useEffect(() => {
        dispatch(enableNavbar(true));
    }, [])

    return (
        <View>
            <Text>Home page</Text>
            <Text>Home page</Text>
            <Text>Home page</Text>
        </View>
    )
}