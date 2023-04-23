import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Tarefas from '../Tarefas'
import NovaTarefa from '../NovaTarefa';
import Favoritas from '../Favoritas';
import { StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

export default function Principal() {
  return (
    <Tab.Navigator

        initialRouteName="Home"
        screenOptions={{
            tabBarLabel: '',
            tabBarStyle: {
                height: 90,
                paddingHorizontal: 35,
                paddingBottom: 20,
              },
        tabBarActiveTintColor:  '#2C39FD',
      }}
    >
      <Tab.Screen
        name="Home"
        component={Tarefas}
        options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={30} />
            ),
          }}
      />

    <Tab.Screen
        name="Nova"
        component={NovaTarefa}
        options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="plus-circle" color={color} size={30} />
            ),
          }}
      />

    <Tab.Screen
        name="Favoritas"
        component={Favoritas}
        options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="heart" color={color} size={30} />
            ),
          }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
    nav: {
        height: 70
    }
})