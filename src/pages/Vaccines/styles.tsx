import styled from "styled-components/native";

export const PetButton = styled.TouchableOpacity<{ selected: boolean }>`
    display: flex;
    flex-direction: row;
    padding: 12px 24px;
    border: 1px solid #E8E8E8;
    border-radius: 8px;
    margin-bottom: 8px;
`

export const Tag = styled.View`
    padding: 4px 12px;
    border: 1px solid #0085FF;
    border-radius: 6px;
`

export const Box = styled.View`
    margin-right: 20px;
    justify-content: center;
`

export const PetImage = styled.Image`
    width: 80px;
    height: 80px;
    border-radius: 80px;
`

export const MorePetsButton = styled.TouchableOpacity`
    padding: 12px 24px;
    border: 1px solid #E8E8E8;
    border-radius: 8px;
    align-items: center;
`

export const ContentModal = styled.View`
    background-color: #fff;
    height: 60%;
    width: 100%;
    padding: 24px 24px 82px;
`

export const BackgroundModal = styled.View`
    width: 100%;
    height: 100%;
    background-color: #00000090;
    display: flex;
    justify-content: flex-end;
`