import { View } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { PrimaryButton } from "../../../components/PrimaryButton"
import { RootState } from "../../../store"
import { setAddPet } from "../../../store/reducers/addPet"
import { Text } from "../../../styles/Text"
import { Box } from "../styles"

export const StepChoiceGender = (props: {setNextStep: (() => void)}) => {
    const dispatch = useDispatch();
    const addPetData = useSelector((state: RootState) => state.addPet.data);

    const setPetGender = (gender: "male" | "female") => {
        dispatch(setAddPet({ gender: gender }));
        props.setNextStep();
    }
    
    return (
        <Box>
            <Text category="h1" color="#5F5F66" mb="24px">
                {addPetData.name} é macho ou femêa?
            </Text>
            <PrimaryButton
                text="Macho"
                backgroundColor="#F4F5F9"
                color="#2D2D36"
                onPress={() => setPetGender('male')}
                style={{ marginBottom: 12 }}
            />
            <PrimaryButton
                text="Femea"
                backgroundColor="#F4F5F9"
                color="#2D2D36"
                onPress={() => setPetGender('female')}
                style={{ marginBottom: 12 }}
            />
        </Box>
    )
}