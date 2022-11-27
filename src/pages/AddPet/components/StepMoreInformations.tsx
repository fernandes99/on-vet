import { PrimaryButton } from "../../../components/PrimaryButton";
import Checkbox from 'expo-checkbox';
import { Text } from "../../../styles/Text";
import { Box, Field } from "../styles";
import { Input } from "../../../styles/Input";
import { MoreInfoType, setAddPet } from "../../../store/reducers/addPet";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../../../store/reducers/global";
import { addPetUser } from "../../../store/reducers/user";
import { RootState } from "../../../store";
import { useNavigate } from "react-router-native";

export const StepMoreInformations = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const addPetData = useSelector((state: RootState) => state.addPet.data);
    const [isConvulsed, setIsConvulsed] = useState(false);
    const [isAgresssive, setIsAgressive] = useState(false);
    const [allergy, setAllergy] = useState('');
    const [note, setNote] = useState('');

    const savePet = () => {
        dispatch(setLoading(true));
        dispatch(setAddPet({
            moreInfo: {
                isAgresssive,
                isConvulsed,
                allergy,
                note
            }
        }));

        setTimeout(() => {
            dispatch(addPetUser(addPetData));
            dispatch(setLoading(false));
            navigate(-1);
        }, 3000);
    }

    return (
        <Box>
            <Text category="h1" color="#5F5F66" mb="24px">
                Informações adicionais
            </Text>

            <Field>
                <Checkbox
                    value={isAgresssive}
                    onValueChange={setIsAgressive}
                    style={{
                        marginRight: 8,
                        width: 28,
                        height: 28,
                    }}
                />
                <Text category="h3" color="#5F5F66">
                    É agressivo?
                </Text>
            </Field>

            <Field>
                <Checkbox
                    value={isConvulsed}
                    onValueChange={setIsConvulsed}
                    style={{
                        marginRight: 8,
                        width: 28,
                        height: 28,
                    }}
                />
                <Text category="h3" color="#5F5F66">
                    Já convulsionou?
                </Text>
            </Field>

            <Field>
                <Input
                    placeholder="Possui alguma alergia?"
                    onChangeText={setAllergy}
                />
            </Field>

            <Field>
                <Input
                    placeholder="Alguma observação?"
                    onChangeText={setNote}
                />
            </Field>

            <PrimaryButton
                text="Salvar"
                onPress={savePet}
            />
        </Box>
    )
}
