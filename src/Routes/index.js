import {createNativeStackNavigator } from '@react-navigation/native-stack'

import {Home} from '../Pages/Home'
import {Login} from '../Pages/Login'
import {Tarefas} from '../Pages/Tarefas'

const Stack = createNativeStackNavigator()


export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name='Home'
                component={Home}
            />
            <Stack.Screen
                name='Login'
                component={Login}
            />
            <Stack.Screen
                name='Tarefas'
                component={Tarefas}
            />
        </Stack.Navigator>
    )
}