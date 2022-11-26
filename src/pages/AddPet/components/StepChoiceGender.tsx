import { View } from "react-native"
import { PrimaryButton } from "../../../components/PrimaryButton"
import { Text } from "../../../styles/Text"
import { Box } from "../styles"

export const StepChoiceGender = (props: {setNextStep: (() => void)}) => {
    return (
        <Box>
            <Text category="h1" color="#5F5F66" mb="24px">
                "NOME" é macho ou femêa?
            </Text>
            <PrimaryButton
                text="Macho"
                backgroundColor="#F4F5F9"
                color="#2D2D36"
                onPress={props.setNextStep}
                style={{ marginBottom: 12 }}
            />
            <PrimaryButton
                text="Femea"
                backgroundColor="#F4F5F9"
                color="#2D2D36"
                onPress={props.setNextStep}
                style={{ marginBottom: 12 }}
            />
        </Box>
    )
}