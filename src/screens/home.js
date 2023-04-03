import React from "react";
import { View, Text, Image, ImageBackground, StyleSheet, TextInput, TouchableOpacity} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"

TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

const ConnectionButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.button1}>
        <Text style={styles.textButton}>{title}</Text>
    </TouchableOpacity>
);

const Home = () => {
    const [text, onChangeText] = React.useState('Useless Text');
    const [number, onChangeNumber] = React.useState('');

    return(
        
        <View style={styles.container}> 
     
            <View style={{flexDirection:'row',justifyContent: 'space-between'}}>
                <Text style={styles.title}> Hola </Text>
                <Image                    
                    style={styles.coffecup}
                    source={require("../images/cup2.png")}
                />
            </View>

            <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="192.168.207.185/electiva/upload.php"
                keyboardType="default"
            />
            
            <ConnectionButton title="Conectar" size="sm" backgroundColor="#1DB72D" />
            <Text style={styles.title2}> Datos Recibidos </Text>

            <View style={{flexDirection:'row',justifyContent: 'space-between'}}>
                <ImageBackground                    
                    style={styles.squareIrradiance}
                    source={require("../images/out1.png")}
                />
                <ImageBackground                    
                    style={styles.squarePh}
                    source={require("../images/out2.png")}
                />
            </View>

            <Text style={styles.title2}> Envio de Datos </Text>

            <View style={{flexDirection:'row',justifyContent: 'space-between'}}>
                <TextInput
                    style={styles.input2}
                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder="2 K w/m²"
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.input2}
                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder="10   "
                    keyboardType="numeric"
                />
            </View>


            <ConnectionButton title="Enviar" size="sm" backgroundColor="#1DB72D" />
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex:1
    },
    title: {
        fontStyle: 'Roboto-Bold',
        fontWeight: 'bold',
        fontSize: 28,
        color: '#21894B',
        marginTop: 35,
        marginLeft: 25,
        alignSelf: 'flex-start'
    }, 
    title2: {
        fontStyle: 'Roboto-Bold',
        fontWeight: 'bold',
        fontSize: 24,
        color: '#12175E',
        marginTop: 35,
        marginLeft: 25,
        alignSelf: 'flex-start'
    }, 
    coffecup:{
        width: 76,
        height: 76,
        marginTop: 15,
        marginRight:20
    },
    input: {
        height:50,
        margin: 15,
        borderWidth: 0.5,
        padding: 8,
        fontSize:16,
        borderRadius:50,
        backgroundColor: "#F6F6F6"
      },
    input2: {
        height:50,
        width: 150,
        margin: 15,
        borderWidth: 0.5,
        padding: 8,
        fontSize:16,
        borderRadius:50,
        backgroundColor: "#F6F6F6"
    },
    button1: {
        width:180,
        height:47,
        backgroundColor: "#1DB72D",
        borderRadius: 30,
        alignSelf:'center',
        paddingVertical: 5,
        marginTop: 15
    },
    textButton: {
        fontSize: 24,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",

    },
    squareIrradiance: {
        width: 145,
        height: 145,
        borderRadius:15,
        marginTop:15,
        marginLeft:25,
    },
    squarePh: {
        width: 145,
        height: 145,
        borderRadius:15,
        marginTop:15,
        marginRight:25,
    },
    ipIcon: {
        padding: 10,
    },
  });