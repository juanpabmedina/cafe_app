import * as React from 'react';
import { NavigationContainer, useFocusEffect } from '@react-navigation/native';
import { Text, StyleSheet,TouchableOpacity, View, Animated } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import Ionicons1 from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Animatable from 'react-native-animatable';

// Screens
import DryScreen from '../screens/dry_station';
import FermentationScreen from '../screens/fermentation_station';
import WeatherScreen from '../screens/weather_station';
import ValvesScreen from '../screens/valves_station';

const FadeInView = (props, { navigation }) => {
  const fadeAnim = React.useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useFocusEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
    return () => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
      }).start();
    };
  });

  return (
    <Animated.View // Special animatable View
      style={{
        flex: 1,
        opacity: fadeAnim, // Bind opacity to animated value
      }}>
      {props.children}
    </Animated.View>
  );
};

const FadeDryScreen = (props) => (
  <FadeInView>
    <DryScreen {...props} />
  </FadeInView>
);

const FadeFermentationScreen = (props) => (
  <FadeInView>
    <FermentationScreen {...props} />
  </FadeInView>
);

const FadeweatherScreen = (props) => (
  <FadeInView>
    <WeatherScreen {...props} />
  </FadeInView>
);

const FadevalvesScreen = (props) => (
  <FadeInView>
    <ValvesScreen {...props} />
  </FadeInView>
);

//Screen names
const dryName = "Secado";
const fermentationName = "Fermentación";
const weatherName = "Meteorológica";
const valvesName = "Válvulas";
const Tab = createBottomTabNavigator();

const animate1 = { 0: { scale: .5, translateY: 7 }, .92: { translateY: -34 }, 1: { scale: 1.2, translateY: -24 } }
const animate2 = { 0: { scale: 1.2, translateY: -24 }, 1: { scale: 1, translateY: 7 } }

const circle1 = { 0: { scale: 0 }, 0.3: { scale: .9 }, 0.5: { scale: .2 }, 0.8: { scale: .7 }, 1: { scale: 1 } }
const circle2 = { 0: { scale: 1 }, 1: { scale: 0 } }

const TabButton = (props) => {
  const { icon_name, onPress, accessibilityState } = props;
  const focused = accessibilityState.selected;
  const viewRef = React.useRef(null);
  const circleRef = React.useRef(null);
  const textRef = React.useRef(null);
  let color = React.useRef('');

  React.useEffect(() => {
    if (focused) {
      viewRef.current.animate(animate1);
      circleRef.current.animate(circle1);
      textRef.current.transitionTo({ scale: 1 });
    } else {
      viewRef.current.animate(animate2);
      circleRef.current.animate(circle2);
      textRef.current.transitionTo({ scale: 0 });
    }
  }, [focused])

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={styles.container}>
      <Animatable.View
        ref={viewRef}
        duration={500}
        style={styles.container}>
        <View style={styles.btn}>
          <Animatable.View
            ref={circleRef}
            style={styles.circle_dry} />
            <Ionicons name={'sun-o'} color={focused ? '#FFA600':'gray'} size={30}/>
        </View>
        <Animatable.Text
          ref={textRef}
          style={styles.text_dry}>
            <Text>Secado</Text>
        </Animatable.Text>
      </Animatable.View>
    </TouchableOpacity>
  )
}

const TabButton2 = (props) => {
  const { icon_name, onPress, accessibilityState } = props;
  const focused = accessibilityState.selected;
  const viewRef = React.useRef(null);
  const circleRef = React.useRef(null);
  const textRef = React.useRef(null);
  let color = React.useRef('');

  React.useEffect(() => {
    if (focused) {
      viewRef.current.animate(animate1);
      circleRef.current.animate(circle1);
      textRef.current.transitionTo({ scale: 1 });
    } else {
      viewRef.current.animate(animate2);
      circleRef.current.animate(circle2);
      textRef.current.transitionTo({ scale: 0 });
    }
  }, [focused])

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={styles.container}>
      <Animatable.View
        ref={viewRef}
        duration={500}
        style={styles.container}>
        <View style={styles.btn}>
          <Animatable.View
            ref={circleRef}
            style={styles.circle_ferm} />
            <Ionicons name={'leaf'} color={focused ? '#37783E':'gray'} size={30}  />
        </View>
        <Animatable.Text
          ref={textRef}
          style={styles.text_ferm}>
            <Text>Fermentación</Text>
        </Animatable.Text>
      </Animatable.View>
    </TouchableOpacity>
  )
}

const TabButton3 = (props) => {
  const { icon_name, onPress, accessibilityState } = props;
  const focused = accessibilityState.selected;
  const viewRef = React.useRef(null);
  const circleRef = React.useRef(null);
  const textRef = React.useRef(null);
  let color = React.useRef('');

  React.useEffect(() => {
    if (focused) {
      viewRef.current.animate(animate1);
      circleRef.current.animate(circle1);
      textRef.current.transitionTo({ scale: 1 });
    } else {
      viewRef.current.animate(animate2);
      circleRef.current.animate(circle2);
      textRef.current.transitionTo({ scale: 0 });
    }
  }, [focused])

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={styles.container}>
      <Animatable.View
        ref={viewRef}
        duration={500}
        style={styles.container}>
        <View style={styles.btn}>
          <Animatable.View
            ref={circleRef}
            style={styles.circle_weather} />
            <Ionicons name={'cloud'} color={focused ? '#2B6670':'gray'} size={25}  />
        </View>
        <Animatable.Text
          ref={textRef}
          style={styles.text_weather}>
            <Text>Meteorológica</Text>
        </Animatable.Text>
      </Animatable.View>
    </TouchableOpacity>
  )
}

const TabButton4 = (props) => {
  const { icon_name, onPress, accessibilityState } = props;
  const focused = accessibilityState.selected;
  const viewRef = React.useRef(null);
  const circleRef = React.useRef(null);
  const textRef = React.useRef(null);
  let color = React.useRef('');

  React.useEffect(() => {
    if (focused) {
      viewRef.current.animate(animate1);
      circleRef.current.animate(circle1);
      textRef.current.transitionTo({ scale: 1 });
    } else {
      viewRef.current.animate(animate2);
      circleRef.current.animate(circle2);
      textRef.current.transitionTo({ scale: 0 });
    }
  }, [focused])

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={styles.container}>
      <Animatable.View
        ref={viewRef}
        duration={500}
        style={styles.container}>
        <View style={styles.btn}>
          <Animatable.View
            ref={circleRef}
            style={styles.circle_valves} />
            <Ionicons1 name={'sprinkler-variant'} color={focused ? '#12175E':'gray'} size={27}  />
        </View>
        <Animatable.Text
          ref={textRef}
          style={styles.text_weather}>
            <Text>Válvulas</Text>
        </Animatable.Text>
      </Animatable.View>
    </TouchableOpacity>
  )
}

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={dryName}
        screenOptions={() => ({
            headerShown: false,
            tabBarInactiveTintColor: 'gray',
            tabBarStyle: { height: 60,
            position: 'absolute',
            bottom: 10,
            right: 16,
            left: 16,
            borderRadius: 16,},
        })}
       >

        <Tab.Screen name={dryName} component={FadeDryScreen} options={{ 
              tabBarButton: (props) =>{
                return(
                  <TabButton {...props}/>
                )
              } 
            }}/>
        <Tab.Screen name={fermentationName} component={FadeFermentationScreen} options={{
              tabBarButton: (props) =>{
                return(
                  <TabButton2 {...props}/>
                )
              } 
            }}/>
        <Tab.Screen name={weatherName} component={FadeweatherScreen} options={{
              tabBarButton: (props) =>{
                return(
                  <TabButton3 {...props}/>
                )
              } 
            }}/>

        <Tab.Screen name={valvesName} component={FadevalvesScreen} options={{
              tabBarButton: (props) =>{
                return(
                  <TabButton4 {...props}/>
                )
              } 
            }}/>

      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBar: {
    height: 70,
    position: 'absolute',
    bottom: 16,
    right: 16,
    left: 16,
    borderRadius: 16,
  },
  btn: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 4,
    borderColor: "white",
    backgroundColor: "white",
    justifyContent: 'center',
    alignItems: 'center'
  },
  circle_dry: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#FFDB2D",
    borderRadius: 25,
  },
  text_dry: {
    fontSize: 12,
    textAlign: 'center',
    color: "#FFA600",
  },
  circle_ferm: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#1DB72D",
    borderRadius: 25,
  },
  text_ferm: {
    fontSize: 12,
    textAlign: 'center',
    color: "#37783E",
  },
  circle_weather: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#7DC8E7",
    borderRadius: 25,
  },
  circle_valves: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#5B67CA",
    borderRadius: 25,
  },
  text_weather: {
    fontSize: 12,
    textAlign: 'center',
    color: "#2B6670",
  },
})