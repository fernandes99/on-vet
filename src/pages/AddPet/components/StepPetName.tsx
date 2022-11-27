import { useState } from "react"
import { KeyboardAvoidingView } from "react-native"
import { useDispatch } from "react-redux"
import { PrimaryButton } from "../../../components/PrimaryButton"
import { setAddPet } from "../../../store/reducers/addPet"
import { Input } from "../../../styles/Input"
import { Text } from "../../../styles/Text"
import { Box } from "../styles"

export const StepPetName = (props: {setNextStep: (() => void)}) => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');

    const setPetName = () => {
        dispatch(setAddPet({ name: name }));
        props.setNextStep();
    }

    return (
        <KeyboardAvoidingView behavior="position">
            <Box>
                <Text category="h1" color="#5F5F66" mb="24px">
                    Qual o nome do seu pet?
                </Text>
                <Input
                    placeholder="Insira o nome aqui"
                    onChangeText={setName}
                    onSubmitEditing={setPetName}
                    autoFocus={true}
                />
                <PrimaryButton text="Continuar" onPress={setPetName} />
            </Box>
        </KeyboardAvoidingView>
    )
}