import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Screen, Navigator } = createNativeStackNavigator();

import { ScreenA } from '../screens/ScreenA'
import { ScreenB } from '../screens/ScreenB'

export function StackRoutes(){
    return (
        <Navigator>
        <Screen
            name='screenA'
            options={{
                title: 'Pagina incial',
               headerTitleAlign: 'left'
            }}
            component = {ScreenA}
            />
<Screen
            name='screenB'
            options={{
                title: 'Tela Secundária',
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: 'FF8C00'
                },
                headerTintColor: '#FFF'
            }}
            component = {ScreenB}
            />
        </Navigator>
    )
}