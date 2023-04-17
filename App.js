import React,{useState} from 'react'
import Dry_station from './src/screens/dry_station'
import { ImageBackground, StyleSheet, ScrollView } from 'react-native'
const App = () => {
  return(
    <ImageBackground source={require("./src/images/background_app.png")} resizeMode="cover" style={styles.background}>
      <ScrollView>
        <Dry_station></Dry_station>
      </ScrollView>
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