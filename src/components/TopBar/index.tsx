import { TouchableOpacity, View } from "react-native"
import { useNavigate } from "react-router-native"
import { ArrowLeftIcon } from "../../assets/icons/ArrowLeftIcon"
import { Text } from "../../styles/Text"
import { Box } from "./styles"
interface PropsTopBar {
    text: string,
    hasBack?: boolean,
}

export const TopBar = (props: PropsTopBar) => {
    const navigate = useNavigate();

    return (
        <Box>
            {props.hasBack &&
                <TouchableOpacity
                    onPress={() => navigate(-1)}
                >
                    <ArrowLeftIcon />
                </TouchableOpacity>
            }
            <View style={{ flex: 1 }}>
                <Text
                    category="m1"
                    color="#5F5F66"
                    align="center"
                >
                    {props.text}
                </Text>
            </View>
        </Box>
    )
}