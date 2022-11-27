import { View } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { PrimaryButton } from "../../../components/PrimaryButton"
import { RootState } from "../../../store"
import { setAddPet } from "../../../store/reducers/addPet"
import { Text } from "../../../styles/Text"
import { Box } from "../styles"

export const StepChoiceWeight = (props: {setNextStep: (() => void)}) => {
    const dispatch = useDispatch();
    const addPetData = useSelector((state: RootState) => state.addPet.data);

    const setPetWeight = (weight: string) => {
        dispatch(setAddPet({ weight }));
        props.setNextStep();
    }

    return (
        <Box>
            <Text category="h1" color="#5F5F66" mb="24px">
                Qual o peso de {addPetData.name}
            </Text>
            <PrimaryButton
                text="Menos de 4kg"
                backgroundColor="#F4F5F9"
                color="#2D2D36"
                onPress={() => setPetWeight("Menos de 4kg")}
                style={{ marginBottom: 12 }}
            />
            <PrimaryButton
                text="Entre 4~6kg"
                backgroundColor="#F4F5F9"
                color="#2D2D36"
                onPress={() => setPetWeight("Entre 4~6kg")}
                style={{ marginBottom: 12 }}
            />
            <PrimaryButton
                text="Entre 6~8kg"
                backgroundColor="#F4F5F9"
                color="#2D2D36"
                onPress={() => setPetWeight("Entre 6~8kg")}
                style={{ marginBottom: 12 }}
            />
            <PrimaryButton
                text="Mais de 10kg"
                backgroundColor="#F4F5F9"
                color="#2D2D36"
                onPress={() => setPetWeight("Mais de 10kg")}
                style={{ marginBottom: 12 }}
            />
            <PrimaryButton
                text="Não sei"
                backgroundColor="#F4F5F9"
                color="#2D2D36"
                onPress={() => setPetWeight("Não sei")}
                style={{ marginBottom: 12 }}
            />
        </Box>
    )
}