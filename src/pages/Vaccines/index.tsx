import { View } from "react-native"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-native"
import { PrimaryButton } from "../../components/PrimaryButton"
import { TopBarAddress } from "../../components/TopBarAddress"
import { RootState } from "../../store"
import { Container } from "../../styles/global"
import { Text } from "../../styles/Text"
import { PetButton, Tag } from "./styles"

export const VaccinesPage = () => {
    const navigate = useNavigate();
    const pets = useSelector((state: RootState) => state.user.pets);

    return (
        <View>
            <TopBarAddress />

            <Container>
                <Text category="h2">
                    Para qual pet?
                </Text>

                {pets?.length
                    ? pets.map((pet, index) => (
                        <PetButton key={index}>
                            <Tag>
                                <Text>{pet.type}</Text>
                            </Tag>
                            <Text>
                                {pet.name}
                                {JSON.stringify(pet)}
                            </Text>
                        </PetButton>
                    ))
                    : <PrimaryButton text="Adicionar pet" onPress={() => navigate('/pets/add')} />
                }
            </Container>
        </View>
    )
}