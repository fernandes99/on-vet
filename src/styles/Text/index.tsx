import styled from "styled-components/native";

interface TextProps {
    category?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 's1' | 's2' | 'm1' | 'm2' | 'l1' | 'l2';
    weight?: 'bolder' | 'bold' | 'medium' | 'regular' | 'light';
    color?: string;
    mb?: string;
    align?: 'left' | 'center' | 'right'; 
}

export const Text = styled.Text<TextProps>`
    font-size: ${props => {
        if (!props?.category) return '16px';

        switch (props.category) {
            case 'h1': return '28px'
            case 'h2': return '22px'
            case 'h3': return '21px'
            case 'm1': return '18px'
            case 'm2': return '16px'
            case 's1': return '14px'
            case 's2': return '12px'
            default: return '16px'
        }
    }};
    color: ${props => props.color ? props.color : '#2D2D36'};
    font-weight: ${props => {
        if (!props?.weight) return 'regular';

        switch (props.weight) {
            case 'bolder': return '900'
            case 'bold': return '600'
            case 'medium': return '500'
            case 'regular': return '400'
            case 'light': return '300'
            default: return '400'
        }
    }};
    margin-bottom: ${props => props.mb ? props.mb : 0};
    text-align: ${props => props.align ? props.align : 'left'};
`