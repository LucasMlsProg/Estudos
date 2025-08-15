import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { DetailsScreen } from "../screens/DetailsScreen"
import { HomeScreen } from "../screens/HomeScreen"
import { PerfilScreen } from "../screens/PerfilScreen"

const Tab = createBottomTabNavigator()

export function TabRouts(){
    return(
         <Tab.Navigator>
            <Tab.Screen name="Feed" component={HomeScreen}/>
            <Tab.Screen name="Detalhes" component={DetailsScreen}/>
          
        </Tab.Navigator>
    )
}