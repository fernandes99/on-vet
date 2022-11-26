import styled from 'styled-components/native';

// Design System base concept: https://akveo.github.io/react-native-ui-kitten/docs/components
export const Container = styled.View`
    width: 100%;
    height: 100%;
    padding: 24px;
`;

export const Strong = styled.Text`
    font-weight: bold;
`

export const Loading = styled.View`
    border-radius: 50px;
    width: 24px;
    height: 24px;
    border: 3px solid rgba(white, 0.2);
    border-top-color: white;
`