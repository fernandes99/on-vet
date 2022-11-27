import { useEffect, useState } from "react";
import { View } from "react-native"

// STATES
import { useDispatch } from "react-redux";
import { enableNavbar } from "../../store/reducers/global";

// COMPONENTS
import { TopBar } from "../../components/TopBar";
import { StepBirthDate } from "./components/StepBirthDate";
import { StepChoiceGender } from "./components/StepChoiceGender";
import { StepChoicePet } from "./components/StepChoicePet";
import { StepChoiceWeight } from "./components/StepChoiceWeight";
import { StepPetName } from "./components/StepPetName";
import { StepPetRace } from "./components/StepPetRace";
import { StepMoreInformations } from "./components/StepMoreInformations";

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
                3: <StepPetRace setNextStep={() => setStep(step + 1)}/>,
                4: <StepChoiceWeight setNextStep={() => setStep(step + 1)}/>,
                5: <StepBirthDate setNextStep={() => setStep(step + 1)}/>,
                6: <StepMoreInformations />
            }[step]}
        </View>
    )
}