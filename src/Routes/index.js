import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../Pages/Home'
import Tarefas from '../Pages/Tarefas'
import Entrada from '../Pages/Entrada';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator
      initialRouteName="Entrada"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}
    >
      <Stack.Screen
        name="Entrada"
        component={Entrada}
        options={{
            headerShown: false
        }}
        
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
      />
      
    </Stack.Navigator>
  );
}