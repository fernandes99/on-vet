import { FlatList } from "react-native";
import { Text } from "../../styles/Text";
import { Item, List, Image } from "./styles";

export const ServiceList = () => {
    const services = [
        {
            name: "Vacinas",
            color: "#0085FF50",
        },
        {
            name: "Consultas",
            color: "#4C4CD650",
        },
        {
            name: "Castração",
            color: "#8820DA50",
        }
    ];

    return(
        <List>
            {services?.map((service, index) => (
                <Item key={index}>
                    <Image style={{ backgroundColor: `${service.color}` }}/>
                    <Text>{service.name}</Text>
                </Item>
            ))}
        </List>
    )
}