import { Platform } from "react-native"
import DateTimePicker from '@react-native-community/datetimepicker';
import { PrimaryButton } from "../../../components/PrimaryButton"
import { Text } from "../../../styles/Text"
import { Box } from "../styles"
import { useState } from "react";
import { FormatDate } from "../../../utils/general";
import { useDispatch, } from "react-redux";
import { setAddPet } from "../../../store/reducers/addPet";

export const StepBirthDate = (props: { setNextStep: (() => void) }) => {
    const dispatch = useDispatch();
    const [birthDate, setBirthDate] = useState<Date>();
    const [showDatePicker, setShowDatePicker] = useState(false);

    const nextStep = () => {
        if (birthDate) {
            dispatch(setAddPet({ birthDate: `${birthDate}` }));
        }

        props.setNextStep();
    }

    return (
        <Box>
            <Text category="h1" color="#5F5F66" mb="24px">
                Data de nascimento
            </Text>

            <Text
                category="h3"
                color="#C7C7C7"
                onPress={() => setShowDatePicker(true)}
                mb={'32px'}
            >
                {birthDate ? ` ${FormatDate(birthDate, "date")}` : "Insire a data aqui"}
            </Text>

            {showDatePicker &&
                <DateTimePicker
                    display={Platform.OS === "android" ? "default" : "inline"}
                    value={new Date()}
                    onChange={(event, date) => {
                        setShowDatePicker(false);
                        if (!date) return;
                        setBirthDate(new Date(date));
                    }}
                />
            }

            <PrimaryButton text="Continuar" onPress={nextStep} />
        </Box>
    )
}
