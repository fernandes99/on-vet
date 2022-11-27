import { PrimaryButton } from "../../../components/PrimaryButton"
import { Text } from "../../../styles/Text"
import { Box } from "../styles"
import { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { setAddPet } from "../../../store/reducers/addPet";

export const StepPetRace = (props: {setNextStep: (() => void)}) => {
    const dispatch = useDispatch();
    const [selectedRace, setSelectedRace] = useState();
    const addPetData = useSelector((state: RootState) => state.addPet.data);

    const setPetRace = () => {
        dispatch(setAddPet({ race: selectedRace }));
        props.setNextStep();
    }

    return (
        <Box>
            <Text category="h1" color="#5F5F66" mb="24px">
                Qual a raça de {addPetData.name}
            </Text>

            <Picker
                selectedValue={selectedRace}
                onValueChange={value => setSelectedRace(value)}
                style={{ marginBottom: 24  }}
            >
                <Picker.Item label="Budog" value="bugod" />
                <Picker.Item label="Pincher" value="pincher" />
            </Picker>


            <PrimaryButton text="Continuar" onPress={setPetRace} />
        </Box>
    )
}
