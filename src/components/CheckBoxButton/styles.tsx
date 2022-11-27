import styled from "styled-components/native";
import { PropsPrimaryButton } from ".";

export const Button = styled.View<PropsPrimaryButton>`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.backgroundColor ? props.backgroundColor : "#0085FF"};
    height: 58px;
    width: 100%;
    border-radius: 12px;
`

export const Text = styled.Text<{ color: string }>`
    color: ${props => props.color};
    font-weight: 500;
    font-size: 18px;
`