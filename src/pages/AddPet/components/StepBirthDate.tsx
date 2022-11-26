import { Platform, View } from "react-native"
import DateTimePicker from '@react-native-community/datetimepicker';
import { PrimaryButton } from "../../../components/PrimaryButton"
import { Text } from "../../../styles/Text"
import { Box } from "../styles"
import { useState } from "react";

export const StepBirthDate = (props: {setNextStep: (() => void)}) => {
    const [date, setDate] = useState(new Date(1598051730000));

    return (
        <Box>
            <Text category="h1" color="#5F5F66" mb="24px">
                Data de nascimento
            </Text>
            <DateTimePicker value={date} />
        </Box>
    )
}