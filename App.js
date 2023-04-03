import React,{useState} from 'react'
import Home from './src/screens/home'
import { ImageBackground, StyleSheet, ScrollView } from 'react-native'
const App = () => {
  return(
    <ImageBackground source={require("./src/images/background_app.png")} resizeMode="cover" style={styles.background}>
      <ScrollView>
        <Home></Home>
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