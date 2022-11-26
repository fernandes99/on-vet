import { useEffect, useState } from "react";
import { View } from "react-native"
import { useDispatch } from "react-redux";
import { TopBar } from "../../components/TopBar";
import { enableNavbar } from "../../store/reducers/global";
import { StepBirthDate } from "./components/StepBirthDate";
import { StepChoiceGender } from "./components/StepChoiceGender";
import { StepChoicePet } from "./components/StepChoicePet";
import { StepChoiceWeight } from "./components/StepChoiceWeight";
import { StepPetName } from "./components/StepPetName";

export const AddPetPage = () => {
    const dispatch = useDispatch();
    const [step, setStep] = useState(0);

    useEffect(() => {
        dispatch(enableNavbar(false));
    }, []);

    return (
        <View style={{ flex: 1 }}>
            <TopBar text="Adicionar pet" hasBack={true} />
            {{
                0: <StepChoicePet setNextStep={() => setStep(step + 1)} />,
                1: <StepPetName setNextStep={() => setStep(step + 1)}/>,
                2: <StepChoiceGender setNextStep={() => setStep(step + 1)}/>,
                3: <StepChoiceWeight setNextStep={() => setStep(step + 1)}/>,
                4: <StepBirthDate setNextStep={() => setStep(step + 1)}/>
            }[step]}
        </View>
    )
}