import { useState } from "react"
import { Text, TouchableOpacity, View } from "react-native"
import { useNavigate } from "react-router-native"
import { ArrowLeftIcon } from "../../assets/icons/ArrowLeftIcon"
import { CheckIcon } from "../../assets/icons/CheckIcon"
import { PrimaryButton } from "../../components/buttons/PrimaryButton"
import { Strong } from "../../styles/global"
import { TopBox, BottomBox, Title, LogoOnVet, Content, SubTitle, List, Item, ItemText, ButtonBox } from "./styles"

export const Welcome = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState<"Initial" | "Second">("Initial");

    return (
        <Content
            contentContainerStyle={{ flexGrow: 1 }}
        >
            <TopBox>
                <LogoOnVet
                    source={{
                        uri: "https://i.imgur.com/Pizh59h.png"
                    }}
                />
            </TopBox>

            {step === "Initial" &&
                <BottomBox>
                    <Title>
                        Bem-vindo ao On<Strong>Vet</Strong>
                    </Title>
                    <SubTitle>
                        Conectamos veterinários com donos de pets!
                    </SubTitle>
                    <List>
                        <Item>
                            <CheckIcon />
                            <ItemText>Selecione um serviço</ItemText>
                        </Item>

                        <Item>
                            <CheckIcon />
                            <ItemText>Veja os veterinários perto de você</ItemText>
                        </Item>

                        <Item>
                            <CheckIcon />
                            <ItemText>Compare preços</ItemText>
                        </Item>

                        <Item>
                            <CheckIcon />
                            <ItemText>Agende o serviço</ItemText>
                        </Item>
                    </List>
                    <ButtonBox>
                        <PrimaryButton
                            text="Continuar"
                            onPress={() => setStep("Second")}
                        />
                    </ButtonBox>
                </BottomBox>
            }
            {step === "Second" &&
                <BottomBox>
                    <TouchableOpacity
                        style={{ marginBottom: 20 }}
                        onPress={() => setStep("Initial")}
                    >
                        <ArrowLeftIcon />
                    </TouchableOpacity>
                    <Title>
                        Antes de tudo, vamos precisar de algumas informações
                    </Title>
                    <ButtonBox>
                        <PrimaryButton
                            text="Certo, vamos lá!"
                            onPress={() => navigate("/location")}
                        />
                    </ButtonBox>
                </BottomBox>
            }
        </Content>
    )
}