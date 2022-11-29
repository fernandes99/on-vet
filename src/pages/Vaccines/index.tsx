import { useState } from "react"
import { Modal, SafeAreaView, View } from "react-native"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-native"
import { PrimaryButton } from "../../components/PrimaryButton"
import { TopBarAddress } from "../../components/TopBarAddress"
import { RootState } from "../../store"
import { Container } from "../../styles/global"
import { Text } from "../../styles/Text"
import { getPetTypeName } from "../../utils/general"
import { VaccineList } from "./components/VaccineList"
import { BackgroundModal, Box, ContentModal, MorePetsButton, PetButton, PetImage, Tag } from "./styles"

export const VaccinesPage = () => {
    const navigate = useNavigate();
    const pets = useSelector((state: RootState) => state.user.pets);
    const [visible, setVisible] = useState(false);

    return (
        <View>
            <TopBarAddress />

            <Container>
                <Text category="h2" mb="16px">
                    Para qual pet?
                </Text>

                {!!pets?.length
                    && pets.map((pet, index) => (
                        <PetButton
                            key={index}
                            selected={true}
                            onPress={() => setVisible(true)}
                        >
                            <Box>
                                <PetImage source={{
                                    uri: pet.image || "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/65761296352685.5eac4787a4720.jpg"
                                }}/>
                            </Box>
                            <Box>
                                <Text category="h3" mb="4px">
                                    {pet.name}
                                </Text>
                                <Tag>
                                    <Text category="m2" color="#0085FF">
                                        {getPetTypeName(pet.type)}
                                    </Text>
                                </Tag>
                            </Box>
                        </PetButton>
                    ))
                }

                <MorePetsButton onPress={() => navigate('/pets/add')}>
                    <Text>Adicionar pet</Text>
                </MorePetsButton>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={visible}
                    onRequestClose={() => {
                        setVisible(false)
                    }}
                >
                    <BackgroundModal>
                        <ContentModal>
                            <Text category="h2" mb={"24px"}>Escolha a vacina:</Text>
                            <VaccineList onSave={() => setVisible(false)} onClose={() => setVisible(false)} />
                        </ContentModal>
                    </BackgroundModal>
                </Modal>
                    
            </Container>
        </View>
    )
}