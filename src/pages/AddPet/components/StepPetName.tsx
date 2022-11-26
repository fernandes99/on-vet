import { KeyboardAvoidingView } from "react-native"
import { PrimaryButton } from "../../../components/PrimaryButton"
import { Input } from "../../../styles/Input"
import { Text } from "../../../styles/Text"
import { Box } from "../styles"

export const StepPetName = (props: {setNextStep: (() => void)}) => {
    return (
        <Box>
            <KeyboardAvoidingView behavior="position">
                <Text category="h1" color="#5F5F66" mb="24px">
                    Qual o nome do seu pet?
                </Text>
                <Input
                    placeholder="Insira o nome aqui"
                    onSubmitEditing={props.setNextStep}
                    autoFocus={true}
                />
            </KeyboardAvoidingView>
        </Box>
    )
}