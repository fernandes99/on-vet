import styled from "styled-components/native";

export const Button = styled.TouchableOpacity`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #0085FF;
    height: 58px;
    width: 100%;
    border-radius: 12px;

    &:disabled {
        background-color: red;
    }
`

export const Text = styled.Text`
    color: white;
    font-weight: 500;
    font-size: 18px;
`