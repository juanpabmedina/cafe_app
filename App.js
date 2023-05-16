import React,{useEffect, useState} from 'react'
import Dry_station from './src/screens/dry_station'
import Weather_station from './src/screens/weather_station'
import Fermentation_station from './src/screens/fermentation_station'
import Navigation from './src/navigation/Navigator'
import { ImageBackground, StyleSheet, ScrollView } from 'react-native'
import SplashScreen from 'react-native-splash-screen'


const App = () => {

  const [hideSplash, setHideSplash] = React.useState(false);


  React.useEffect(() => {
    setTimeout(() => {
      setHideSplash(true);
    }, 5000); // amount of time the splash is shown from the time component is rendered
  }, []);
  
  React.useEffect(() => {
    hideSplash && SplashScreen.hide();
  }, [hideSplash]);
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