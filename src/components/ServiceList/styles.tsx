import styled from "styled-components/native";

export const List = styled.View`
    display: flex;
    flex-direction: row;
    align-self: flex-start;
    width: 100%;
    flex: 1;
    padding-right: 24px;
`

export const Item = styled.TouchableOpacity`
    width: 200px;
    margin-right: 16px;
    align-items: center;
`

export const Image = styled.View`
    width: 100%;
    height: 80px;
    border-radius: 12px;
    margin-bottom: 12px;
`