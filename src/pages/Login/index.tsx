import { Button, TextInput } from "react-native"
import { Container } from "../../styles/global"
import { useNavigate } from "react-router-native"
import { Box, Content, Highlight, Input, Subtitle, Text, Title } from "./styles"

export const Login = () => {
    const navigate = useNavigate();

    return (
        <Container>
            <Content>
                <Box>
                    <Text>
                        É um veterinário? <Highlight>Seja um parceiro</Highlight>
                    </Text>
                </Box>

                <Box>
                    <Title>
                        O que está esperando?
                    </Title>
                    <Subtitle>
                        Nunca foi tão fácil encontrar um veterinário!
                    </Subtitle>
                </Box>

                <Box>
                    <Text>Entre com sua rede social</Text>
                    <Button title="Google" onPress={() => navigate(-1)} /> 
                    <Button title="User page" onPress={() => navigate('/user/nicollas-viado')} /> 
                </Box>
            </Content>
        </Container>
    )
}