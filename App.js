import React,{useEffect, useState} from 'react'
import Dry_station from './src/screens/dry_station'
import Weather_station from './src/screens/weather_station'
import Fermentation_station from './src/screens/fermentation_station'
import Navigation from './src/navigation/Navigator'
import { ImageBackground, StyleSheet, ScrollView } from 'react-native'
import SplashScreen from 'react-native-splash-screen'
const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, [])
  return(
    <ImageBackground source={require("./src/images/background_app.png")} resizeMode="cover" style={styles.background}>
     
        <Navigation/>
     
    </ImageBackground>
    

  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
}, 
})
export default App;