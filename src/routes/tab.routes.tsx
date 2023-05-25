import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {MaterialIcons} from "@expo/vector-icons";
const { Screen, Navigator } = createBottomTabNavigator();

import { ScreenA } from '../screens/ScreenA'
import { ScreenB } from '../screens/ScreenB'

export function TabRoutes(){
    return (
        <Navigator>
        <Screen
        name='screenA'
     component = {ScreenA}           
            options={{

            
                tabBarLabel:"Home"
            }}
            
            />

        
            <Screen
            name='screenB'  
            component = {ScreenB}
            options={{
                 tabBarLabel:"Novo"
            
            }}
           
            />
        </Navigator>
 )   
}