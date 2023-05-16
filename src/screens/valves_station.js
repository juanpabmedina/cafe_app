import React, {useEffect} from "react";
import { View, Text, Image, ImageBackground, StyleSheet, TextInput, TouchableOpacity, FlatList, ScrollView, Alert} from "react-native";


TouchableOpacity.defaultProps = { activeOpacity: 0.8 };




const Home = () => {
    const customData = require('../data/url.json'); 
    const [url, onChangeText] = React.useState(customData.url);
    const [data, setData] = React.useState([1,2]);
    const [isLoading, setLoading] = React.useState(true);
    const flatList1 = React.useRef(null)
  

    let number1 = React.useRef();
    
    const GetRequest = async () =>{
        try {
            const response = await fetch(url);
            const json = await response.json();
            setData(json.estacion_valvulas);
            if (isLoading == true) {
              Alert.alert("Conexión al servidor exitosa");
              return;
          }
          setLoading(false);
          } catch (error) {
            setLoading(true);
            console.error(error);
            Alert.alert("Error al conectar al servidor", error.message);
            return;
          }           
    };

    const PostRequest = async (number1) =>{
        try {
            const response = await fetch(url, {
              method: 'post',
              mode: 'no-cors',
              headers: {
                'Accept': 'text/html',
                'Content-Type': 'text/html',
              },
              body: JSON.stringify({
                valves_state:number1,
              })
            });
            Alert.alert("Envio de datos exitoso");
            return;
          } catch (error) {
            console.error(error);
            Alert.alert("Error al enviar datos", error.message);
            return;
          } 
    };
    

    const ConnectionButton = ({ onPress, title, data }) => (
        <TouchableOpacity onPress={PostRequestDataTime} style={styles.button1}>
             <View style={{flexDirection:'row'}}>
                <Image                    
                        style={styles.imageStyle2}
                        source={require("../images/connection_icon.png")}
                    />
                <Text style={styles.textButton}>{title}</Text>
            </View>
        </TouchableOpacity>
    );

    const PostRequestDataTime = async () =>{
        try {
            const response = await fetch(url, {
              method: 'post',
              mode: 'no-cors',
              headers: {
                'Accept': 'text/html',
                'Content-Type': 'text/html',
              },
              body: JSON.stringify({
                'ts': Date.now(),
              })
            });
            setLoading(false);
          } catch (error) {
            console.error(error);
          } finally {
            GetRequest()
          }
    };
    
   
    useEffect(() => {
        const interval = setInterval(() => {
            if (isLoading == false) {
                GetRequest();
            }
        }, 5000);
    
        return () => clearInterval(interval);
      }, [url, isLoading]);

    return(
        <ImageBackground source={require("../images/background_app.png")} resizeMode="cover" style={styles.background}>
        <ScrollView>
        <View style={styles.container}> 
            <View style={{flexDirection:'row',justifyContent: 'space-between'}}>
                <Text style={styles.title}> Control de Válvulas</Text>
                <Image                    
                    style={styles.dry_img}
                    source={require("../images/estacion_valvulas/sprinkler.png")}
                />
            </View>
            <View style={styles.sectionInputStyle}>
                <Image                    
                        source={require("../images/ip_icon.png")}
                        style={styles.imageStyle}
                    />
                <TextInput
                    style={{flex: 1}}
                    onChangeText={onChangeText}
                    value={url}
                    placeholder="http://192.168.10.101:8080"
                    keyboardType="default"
                />
            </View>
          
            
            <ConnectionButton data={url} title="Conectar" size="sm" backgroundColor="#1DB72D" />
            <Text style={styles.title2}> Control </Text>

            <View style={{flexDirection:'row',justifyContent: 'space-between'}}>

                <TouchableOpacity onPress={() => {
                    number1 = 1;
                    PostRequest(number1)
                }}>
                    <ImageBackground style={styles.squareIrradiance} source={require("../images/estacion_valvulas/on_valves.png")}>
                        <Text style={styles.out1}> Encender </Text>
                    </ImageBackground>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
                    number1 = 0;
                    PostRequest(number1)
                }}>
                    <ImageBackground style={styles.squarePh} source={require("../images/estacion_valvulas/off_valves.png")}>
                        <Text style={styles.out1}> Apagar </Text>
                    </ImageBackground>
                </TouchableOpacity>

            </View>

            <Text style={styles.title2}> Datos recibidos </Text>
            <View style={{flexDirection:'row',justifyContent: 'space-between'}}>
                <ImageBackground style={styles.squareIrradiance} source={require("../images/estacion_valvulas/caudal.png")}>
                    <FlatList
                      ref={flatList1}
                      onContentSizeChange={() => {
                          flatList1.current.scrollToEnd();
                      }}
                        data={data}
                        renderItem={({item, index}) => {
                            const isEnd = index === data.length - 1;
                            return(
                                <Text style={styles.out1}>
                                    {isEnd && <Text>C: {item.caudal} L/m</Text>}
                                </Text>
                            );
                        }}
                        scrollEnabled={false}
                        
                        />
                </ImageBackground>
            </View>
          
        </View>
        </ScrollView>
        </ImageBackground>
    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex:1,
        marginBottom: 120
    },
    sectionInputStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height:50,
        margin: 15,
        borderWidth: 0.5,
        padding: 5,
        fontSize:16,
        borderRadius:50,
        backgroundColor: "#F6F6F6"
      },
      sectionInput2Style: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height:50,
        width: 180,
        margin: 15,
        borderWidth: 0.5,
        padding: 5,
        fontSize:16,
        borderRadius:50,
        marginLeft: 25,
        backgroundColor: "#F6F6F6"
      },
      imageStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center',
      },
      imageStyle2: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center',
        marginLeft:10
      },
    title: {
        fontStyle: 'italic',
        fontWeight: 'bold',
        fontSize: 25,
        color: '#5B67CA',
        marginTop: 35,
        marginLeft: 15,
        marginRight: 10,
        alignSelf: 'flex-start'
    }, 
    title2: {
        fontStyle: 'italic',
        fontWeight: 'bold',
        fontSize: 24,
        color: '#12175E',
        marginTop: 35,
        marginLeft: 25,
        alignSelf: 'flex-start'
    }, 
    dry_img:{
        width: 50,
        height: 50,
        marginTop: 25,
        marginRight:30
    },
    button1: {
        width:180,
        height:47,
        backgroundColor: "#5B67CA",
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
        marginLeft: 10
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
    out1: {
        fontStyle: 'italic',
        fontWeight: 'bold',
        fontSize: 24,
        alignSelf: "center",
        height:45,
        marginTop:100,
    },
  });