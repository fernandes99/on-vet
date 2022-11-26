import { useEffect } from "react"
import { View } from "react-native"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-native"
import { PrimaryButton } from "../../components/PrimaryButton"
import { TopBar } from "../../components/TopBar"
import { enableNavbar } from "../../store/reducers/global"
import { Container } from "../../styles/global"
import { Text } from "../../styles/Text"

export const PetsPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(enableNavbar(true));
    }, []);
    
    return (
        <View>
            <TopBar text="Meus pets" />
            <Container>
                <View style={{ paddingHorizontal: 80 }}>
                    <Text
                        category="h1"
                        color="#5F5F66"
                        align="center"
                        mb="24px"
                    >
                        Você não possui nenhum pet
                    </Text>
                </View>
                <PrimaryButton
                    text="Adicionar pet"
                    outlined={true}
                    onPress={() => navigate('/pets/add')}
                />
            </Container>
        </View>
    )
}