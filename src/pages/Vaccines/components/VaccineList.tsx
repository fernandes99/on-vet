import Checkbox from "expo-checkbox"
import { ScrollView, View } from "react-native"
import { PrimaryButton } from "../../../components/PrimaryButton"
import { Text } from "../../../styles/Text"
import { Field } from "../../AddPet/styles"

interface PropsVaccineList {
    onSave: () => void,
    onClose: () => void
}

export const VaccineList = (props: PropsVaccineList) => {
    const vaccines = [
        "Vacina 1",
        "Vacina 2",
        "Vacina 3"
    ]

    return (
        <View style={{ height: "100%", justifyContent: "space-between" }}>
            <ScrollView>
                {vaccines?.map((vaccine, index) => (
                    <Field key={index}>
                        <Checkbox
                            value={false}
                            onValueChange={() => {}}
                            style={{
                                marginRight: 8,
                                width: 28,
                                height: 28,
                            }}
                        />
                        <Text category="h3" color="#5F5F66">
                            {vaccine}
                        </Text>
                    </Field>
                ))}
            </ScrollView>

            <PrimaryButton
                text="Salvar"
                onPress={props.onSave}
                style={{ marginTop: "auto" }}
            />
        </View>
    )
}