import { useEffect, useState } from "react"
import { KeyboardAvoidingView, ScrollView, TextInput, TouchableOpacity } from "react-native"
import { useNavigate } from "react-router-native"
import { ArrowLeftIcon } from "../../assets/icons/ArrowLeftIcon"
import { PrimaryButton } from "../../components/buttons/PrimaryButton"
import { BottomBox, ButtonBox, LogoOnVet, SubTitle, Title, TopBox } from "../Welcome/styles"

export const AddressPage = () => {
    const navigate = useNavigate();

    const [cep, setCep] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [neighborhood, setNeighborhood] = useState('');
    const [numberResidence, setNumberResidence] = useState('');
    const [complement, setComplement] = useState('');
    const [step, setStep] = useState(0);

    useEffect(() => {
        if (cep?.length >= 8) {
            fetch(`https://viacep.com.br/ws/${cep}/json`)
                .then(res => {
                    if (res.status !== 200) return;
                    return res.json()
                })
                .then(data => {
                    console.log(data);
                    if (!data) return;

                    setStreet(data.logradouro);
                    setCity(data.localidade);
                    setNeighborhood(data.bairro);
                    setStep(step + 1);
                })
        }
    }, [cep])

    return (
        <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
        >
            <TopBox>
                <LogoOnVet
                    source={{
                        uri: "https://i.imgur.com/Pizh59h.png"
                    }}
                />
            </TopBox>

            {step == 0 &&
                <KeyboardAvoidingView behavior="position">
                    <BottomBox>
                        <TouchableOpacity
                            style={{ marginBottom: 20 }}
                            onPress={() => navigate(-1)}
                        >
                            <ArrowLeftIcon />
                        </TouchableOpacity>
                        <SubTitle>
                            Para buscar os veterinários próximo a você, insira seu CEP a baixo:
                        </SubTitle>
                        <TextInput
                            autoFocus={true}
                            keyboardType="number-pad"
                            placeholder={`Insira seu CEP clicando aqui`}
                            onChangeText={(value) => setCep(value)}
                        />
                    </BottomBox>
                </KeyboardAvoidingView>
            }

            {step == 1 &&
                <KeyboardAvoidingView behavior="position">
                    <BottomBox>
                        <TouchableOpacity
                            style={{ marginBottom: 20 }}
                            onPress={() => setStep(step - 1)}
                        >
                            <ArrowLeftIcon />
                        </TouchableOpacity>
                        <SubTitle>
                            Qual número da residência?
                        </SubTitle>
                        <TextInput
                            keyboardType="number-pad"
                            autoFocus={true}
                            placeholder="Insira seu número aqui"
                            onChangeText={(value) => setNumberResidence(value)}
                            maxLength={8}
                            value={numberResidence}
                        />
                        <ButtonBox>
                            <PrimaryButton
                                text="Continuar"
                                onPress={() => setStep(step + 1)}
                            />
                        </ButtonBox>
                    </BottomBox>
                </KeyboardAvoidingView>
            }

            {step == 2 &&
                <KeyboardAvoidingView behavior="position">
                    <BottomBox>
                        <TouchableOpacity
                            style={{ marginBottom: 20 }}
                            onPress={() => setStep(step - 1)}
                        >
                            <ArrowLeftIcon />
                        </TouchableOpacity>
                        <SubTitle>
                            Algum complemento?
                        </SubTitle>
                        <TextInput
                            placeholder="Insira o complemento aqui"
                            autoFocus={true}
                            value={complement}
                            onChangeText={(value) => setComplement(value)}
                        />
                        <ButtonBox>
                            <PrimaryButton
                                text="Continuar"
                                onPress={() => setStep(step + 1)}
                            />
                        </ButtonBox>
                    </BottomBox>
                </KeyboardAvoidingView>
            }

            {step == 3 &&
                <KeyboardAvoidingView behavior="position">
                    <BottomBox>
                        <TouchableOpacity
                            style={{ marginBottom: 20 }}
                            onPress={() => setStep(step - 1)}
                        >
                            <ArrowLeftIcon />
                        </TouchableOpacity>

                        <SubTitle>
                            Cidade: {city}, Bairro: {neighborhood}, Rua: {street}
                        </SubTitle>

                        <ButtonBox>
                            <PrimaryButton
                                text="Confirmar"
                                onPress={() => navigate('/home')}
                            />
                        </ButtonBox>
                    </BottomBox>
                </KeyboardAvoidingView>
            }
        </ScrollView>
    )
}