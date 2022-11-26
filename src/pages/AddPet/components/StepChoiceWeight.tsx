import { View } from "react-native"
import { PrimaryButton } from "../../../components/PrimaryButton"
import { Text } from "../../../styles/Text"
import { Box } from "../styles"

export const StepChoiceWeight = (props: {setNextStep: (() => void)}) => {
    return (
        <Box>
            <Text category="h1" color="#5F5F66" mb="24px">
                Qual o peso de "NOME"
            </Text>
            <PrimaryButton
                text="Menos de 4kg"
                backgroundColor="#F4F5F9"
                color="#2D2D36"
                onPress={props.setNextStep}
                style={{ marginBottom: 12 }}
            />
            <PrimaryButton
                text="Entre 4~6kg"
                backgroundColor="#F4F5F9"
                color="#2D2D36"
                onPress={props.setNextStep}
                style={{ marginBottom: 12 }}
            />
            <PrimaryButton
                text="Entre 6~8kg"
                backgroundColor="#F4F5F9"
                color="#2D2D36"
                onPress={props.setNextStep}
                style={{ marginBottom: 12 }}
            />
            <PrimaryButton
                text="Mais de 10kg"
                backgroundColor="#F4F5F9"
                color="#2D2D36"
                onPress={props.setNextStep}
                style={{ marginBottom: 12 }}
            />
            <PrimaryButton
                text="Não sei"
                backgroundColor="#F4F5F9"
                color="#2D2D36"
                onPress={props.setNextStep}
                style={{ marginBottom: 12 }}
            />
        </Box>
    )
}