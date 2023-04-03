import React from "react";
import { View, Text, StyleSheet, ImageBackground} from "react-native";

const styles = StyleSheet.create({
    backgroundImageLeft: {
        width: 100,
        height: 110,
        opacity: 0.1,
        marginTop: 20,
        marginLeft: 25,
    },
    backgroundImageRight: {
        width: 100,
        height: 110,
        opacity: 0.1,
        marginTop: 20,
        marginRight:20
    }
  });

const Background = () => {
    return(
        <View style={{
            backgroundColor:"#FFF",
            flex: 1,
        }}>
            <View style={{flexDirection:'row', justifyContent:'flex-start'}}>
                <ImageBackground
                    style={styles.backgroundImageLeft}
                    source={require("../images/cup1.png")}
                />
            </View>

            <View style={{flexDirection:'row', justifyContent:'flex-end'}}>
                <ImageBackground
                    style={styles.backgroundImageRight}
                    source={require("../images/coffee-bean.png")}
                />
            </View>

            <View style={{flexDirection:'row', justifyContent:'flex-start'}}>
                <ImageBackground
                    style={styles.backgroundImageLeft}
                    source={require("../images/coffee-bean.png")}
                />
            </View>

            <View style={{flexDirection:'row', justifyContent:'flex-end'}}>
                <ImageBackground
                    style={styles.backgroundImageRight}
                    source={require("../images/cup1.png")}
                />
            </View>

            <View style={{flexDirection:'row', justifyContent:'flex-start'}}>
                <ImageBackground
                    style={styles.backgroundImageLeft}
                    source={require("../images/coffee-bean.png")}
                />
            </View>
          
        
        </View>
    )
}

export default Background;