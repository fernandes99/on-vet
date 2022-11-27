import { View } from "react-native"
import { useDispatch } from "react-redux"
import { PrimaryButton } from "../../../components/PrimaryButton"
import { PetType, setAddPet } from "../../../store/reducers/addPet"
import { Text } from "../../../styles/Text"
import { Box } from "../styles"

export const StepChoicePet = (props: {setNextStep: (() => void)}) => {
    const dispatch = useDispatch();

    const selectPet = (pet: PetType) => {
        dispatch(setAddPet({ type: pet }));
        props.setNextStep();
    }

    return (
        <Box>
            <Text category="h1" color="#5F5F66" mb="24px">
                Qual é seu pet?
            </Text>
            <PrimaryButton
                text="Cachorro"
                backgroundColor="#F4F5F9"
                color="#2D2D36"
                onPress={() => selectPet('dog')}
                style={{ marginBottom: 12 }}
            />
            <PrimaryButton
                text="Gato"
                backgroundColor="#F4F5F9"
                color="#2D2D36"
                onPress={() => selectPet('cat')}
                style={{ marginBottom: 12 }}
            />
            <PrimaryButton
                text="Outros"
                backgroundColor="#F4F5F9"
                color="#2D2D36"
                onPress={() => selectPet('other')}
            />
        </Box>
    )
}