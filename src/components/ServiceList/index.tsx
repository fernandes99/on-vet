import { useNavigate } from "react-router-native";
import { Text } from "../../styles/Text";
import { Item, List, Image } from "./styles";

export const ServiceList = () => {
    const navigate = useNavigate();
    const services = [
        {
            name: "Vacinas",
            path: "/vaccines",
            color: "#0085FF50",
        },
        {
            name: "Consultas",
            path: "/vaccines",
            color: "#4C4CD650",
        },
        {
            name: "Castração",
            path: "/vaccines",
            color: "#8820DA50",
        }
    ];

    return(
        <List>
            {services?.map((service, index) => (
                <Item
                    key={index}
                    onPress={() => navigate(service.path)}
                >
                    <Image style={{ backgroundColor: `${service.color}` }}/>
                    <Text>{service.name}</Text>
                </Item>
            ))}
        </List>
    )
}