import { NavigationContainer } from "@react-navigation/native";
import TabsRouts from "./TabNav";
import TabRouts from "./TabNav";

export function Routs() {
    return(
        <NavigationContainer>
            <TabRouts/>
        </NavigationContainer>
    )
}