import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";
import { ScrollView, View } from "react-native"
import { enableNavbar } from "../../store/reducers/global"
import { RootState } from "../../store";
import { Text } from "../../styles/Text";
import { ServiceList } from "../../components/ServiceList";
import { Container } from "../../styles/global";
import { TopBarAddress } from "../../components/TopBarAddress";

export const HomePage = () => {
    const dispatch = useDispatch();
    const global = useSelector((state: RootState) => state.global);

    useEffect(() => {
        dispatch(enableNavbar(true));
    }, [])

    return (
        <View>
            <TopBarAddress />

            <ScrollView>
                <Container>
                    <Text
                        category="h2"
                        color="#5F5F66"
                        mb="16px"
                    >
                        Selecione um serviço
                    </Text>

                    <View>
                        <ScrollView
                            horizontal={true}
                            style={{ paddingLeft: 24, marginHorizontal: -24 }}
                            contentContainerStyle={{ flexGrow: 1 }}
                        >
                            <ServiceList />
                        </ScrollView>
                    </View>
                </Container>
            </ScrollView>
        </View>
    )
}