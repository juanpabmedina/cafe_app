import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/FontAwesome';

// Screens

// Screens
import DryScreen from '../screens/dry_station';
import FermentationScreen from '../screens/fermentation_station';
import WeatherScreen from '../screens/weather_station';

//Screen names
const dryName = "Secado";
const fermentationName = "Fermentación";
const weatherName = "Meteorológica";
const Icon = ''

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={dryName}
        screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ focused, size }) => {
            let iconName;
            let rn = route.name;
            let color;
            

            if (rn === dryName) {
              iconName = focused ? 'sun-o' : 'sun-o';
              color = focused ? '#FFA600' : 'grey';

            } else if (rn === fermentationName) {
              iconName = focused ? 'leaf' : 'leaf';
              color = focused ? '#1DB72D' : 'grey';

            } else if (rn === weatherName) {
              iconName = focused ? 'cloud' : 'cloud';
              color = focused ? '#7DC8E7' : 'grey';
            }
            
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />
            
          },
          tabBarActiveTintColor: ({route, focused}) => {
            let color;
            let rn = route.name;

            if (rn === dryName) {
              color = focused ? '#FFA600' : 'grey';

            } else if (rn === fermentationName) {
              color = focused ? '#1DB72D' : 'grey';

            } else if (rn === weatherName) {
              color = focused ? '#7DC8E7' : 'grey';
            }
            return {color};
          },
          tabBarInactiveTintColor: 'gray',
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 20, height: 70},
          headerShown: false
        })}
       >

        <Tab.Screen name={dryName} component={DryScreen} />
        <Tab.Screen name={fermentationName} component={FermentationScreen} />
        <Tab.Screen name={weatherName} component={WeatherScreen} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;