import React, { ReactNode } from "react"
import { TouchableOpacityProps } from "react-native";
import { TouchableOpacity } from "react-native";
import { Button, Text } from "./styles";

export interface PropsSecondaryButton extends TouchableOpacityProps {
    text: string,
    onPress: () => void,
    size?: string,
    color?: string,
    backgroundColor?: string,
    icon?: string,
    disabled?: boolean,
    children?: ReactNode | string,
    outlined?: boolean,
}

export const SecondaryButton = (props: PropsSecondaryButton) => {
    const {...rest} = props;

    return (
        <TouchableOpacity onPress={props.onPress}>
            <Button {...rest}>
                <Text color={`${props.color ? props.color : '#fff' }`}>
                    {props.text}
                </Text>
            </Button>
        </TouchableOpacity>
    )
}