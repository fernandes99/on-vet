import { Text } from "../../styles/Text"
import { Box } from "./styles"
interface PropsTopBar {
    text: string,
    hasBack?: boolean,
}

export const TopBar = (props: PropsTopBar) => {
    return (
        <Box>
            <Text category="m1" color="#5F5F66">
                {props.text}
            </Text>
        </Box>
    )
}