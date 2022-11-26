import React, { ReactNode } from "react"
import { TouchableOpacityProps } from "react-native";
import { Button, Text } from "./styles"

interface PropsPrimaryButton extends TouchableOpacityProps {
    text: string,
    size?: string,
    color?: string,
    backgroundColor?: string,
    icon?: string,
    disabled?: boolean,
    children?: ReactNode | string;
    outlined?: boolean,
}

export const PrimaryButton = (props: PropsPrimaryButton) => {
    const {...rest} = props;

    return (
        <Button {...rest}>
            <Text>
                {props.text}
            </Text>
        </Button>
    )
}