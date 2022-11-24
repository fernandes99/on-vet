import styled from 'styled-components/native';

export const Container = styled.View`
    width: 100%;
    height: 100%;
    padding: 24px;
`;

export const Strong = styled.Text`
    font-weight: bold;
`

export const Loading = styled.View`
    border-radius: 50%;
    width: 24px;
    height: 24px;
    border: .25rem solid rgba(white, 0.2);
    border-top-color: white;
    animation: spin 1s infinite linear;
`