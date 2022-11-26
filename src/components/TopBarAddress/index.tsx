import { Text } from "../../styles/Text"
import { Box } from "./styles"

export const TopBarAddress = () => {
    return (
        <Box>
            <Text category="s1" color="#6C6A69">
                Você está em    
            </Text>           
            <Text category="s1" color="#444140" weight="bold">
                R. Conêgo Valois de Castro, 274
            </Text>
        </Box>
    )
}