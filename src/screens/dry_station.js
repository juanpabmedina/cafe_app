import React, {useEffect} from "react";
import { View, Text, Image, ImageBackground, StyleSheet, TextInput, TouchableOpacity, FlatList, ScrollView} from "react-native";


TouchableOpacity.defaultProps = { activeOpacity: 0.8 };




const Home = () => {
    const customData = require('./url.json'); 
    const [url, onChangeText] = React.useState(customData.url);
    const [number1, onChangeNumber1] = React.useState('');
    const [number2, onChangeNumber2] = React.useState('');
    const [data, setData] = React.useState([1,2]);
    const [isLoading, setLoading] = React.useState(true);
    const flatList1 = React.useRef(null)
    const flatList2 = React.useRef(null)
    const flatList3 = React.useRef(null)
    const flatList4 = React.useRef(null)
    const flatList5 = React.useRef(null)

    
    const GetRequest = async (filePath, content) =>{
        try {
            const response = await fetch(url);
            const json = await response.json();
            setData(json.estacion_secado);
          } catch (error) {
            console.error(error);
          } finally {
            setLoading(false);
          }
          
    };
    
    const PostRequest = async () =>{
        try {
            const response = await fetch(url, {
              method: 'post',
              mode: 'no-cors',
              headers: {
                'Accept': 'text/html',
                'Content-Type': 'text/html',
              },
              body: JSON.stringify({
                hg:number1,
              })
            });
          } catch (error) {
            console.error(error);
          } finally {
            setLoading(false);
          }
    };

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
                'timestamp': Date(),
              })
            });
          } catch (error) {
            console.error(error);
          } finally {
            setLoading(false);
            GetRequest()
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

    const SendButton = ({ onPress, title }) => (
        <TouchableOpacity onPress={PostRequest} style={styles.button1}>
        <View style={{flexDirection:'row'}}>
           <Image                    
                   style={styles.imageStyle2}
                   source={require("../images/send_icon.png")}
               />
           <Text style={styles.textButton}>{title}</Text>
       </View>
   </TouchableOpacity>
    );
    
   
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
                <Text style={styles.title}> Estación De Secado </Text>
                <Image                    
                    style={styles.dry_img}
                    source={require("../images/estacion_secado/sunny.png")}
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
            <Text style={styles.title2}> Datos Recibidos </Text>

            <View style={{flexDirection:'row',justifyContent: 'space-between'}}>
                <ImageBackground style={styles.squareIrradiance} source={require("../images/estacion_secado/temperature_out.png")}>
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
                                    {isEnd && <Text>T1: {item.temp_alt1}°C </Text>}
                                </Text>
                            );
                        }}
                        scrollEnabled={false}
                        
                        />
                </ImageBackground>

                <ImageBackground style={styles.squarePh} source={require("../images/estacion_secado/temperature_out.png")}>
                    <FlatList
                      ref={flatList2}
                      onContentSizeChange={() => {
                          flatList2.current.scrollToEnd();
                      }}
                        data={data}
                        renderItem={({item, index}) => {
                            const isEnd = index === data.length - 1;
                            return(
                                <Text style={styles.out1}>
                                    {isEnd && <Text>T2: {item.temp_alt2}°C </Text>}
                                </Text>
                            );
                        }}
                        scrollEnabled={false}
                        
                        />
                </ImageBackground>
            </View>

            <View style={{flexDirection:'row',justifyContent: 'space-between'}}>
                <ImageBackground style={styles.squareIrradiance} source={require("../images/estacion_secado/temperature_out.png")}>
                 
                    <FlatList
                      ref={flatList3}
                      onContentSizeChange={() => {
                          flatList3.current.scrollToEnd();
                      }}
                        data={data}
                        renderItem={({item, index}) => {
                            const isEnd = index === data.length - 1;
                            return(
                                <Text style={styles.out1}>
                            
                                    {isEnd && <Text>T3: {item.temp_alt3}°C </Text>}
                                </Text>
                            );
                        }}
                        scrollEnabled={false}
                        
                        />
                </ImageBackground>

                <ImageBackground style={styles.squarePh} source={require("../images/estacion_secado/t_ambiente_out.png")}>
                    <FlatList
                      ref={flatList4}
                      onContentSizeChange={() => {
                          flatList4.current.scrollToEnd();
                      }}
                        data={data}
                        renderItem={({item, index}) => {
                            const isEnd = index === data.length - 1;
                            return(
                                <Text style={styles.out1}>
                                    {isEnd && <Text>T.A: {item.temp_amb}°C </Text>}
                                </Text>
                            );
                        }}
                        scrollEnabled={false}
                        
                        />
                </ImageBackground>
            </View>

            <View style={{flexDirection:'row',justifyContent: 'space-between'}}>
                <ImageBackground style={styles.squareIrradiance} source={require("../images/estacion_secado/humidity_out.png")}>
                 
                    <FlatList
                      ref={flatList5}
                      onContentSizeChange={() => {
                          flatList5.current.scrollToEnd();
                      }}
                        data={data}
                        renderItem={({item, index}) => {
                            const isEnd = index === data.length - 1;
                            return(
                                <Text style={styles.out1}>
                                    {isEnd && <Text>H1: {item.hum_amb}% </Text>}
                                </Text>
                            );
                        }}
                        scrollEnabled={false}
                        
                        />
                </ImageBackground>

            </View>

            <Text style={styles.title2}> Envio de Datos </Text>

            <View style={{flexDirection:'row',justifyContent: 'space-between'}}>
                <View style={styles.sectionInput2Style}>
                    <Image                    
                            source={require("../images/estacion_secado/humidity.png")}
                            style={styles.imageStyle}
                        />
                    <TextInput
                        style={{flex: 1}}
                        onChangeText={onChangeNumber1}
                        value={number1}
                        placeholder="Humedad del grano"
                        keyboardType="numeric"
                    />
                </View>
            </View>


            <SendButton title="  Enviar" size="sm" backgroundColor="#1DB72D" />
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
        color: '#FFA600',
        marginTop: 35,
        marginLeft: 25,
        alignSelf: 'flex-start'
    }, 
    title2: {
        fontStyle: 'italic',
        fontWeight: 'bold',
        fontSize: 24,
        color: '#754C00',
        marginTop: 35,
        marginLeft: 25,
        alignSelf: 'flex-start'
    }, 
    dry_img:{
        width: 60,
        height: 60,
        marginTop: 25,
        marginRight:20
    },
    button1: {
        width:180,
        height:47,
        backgroundColor: "#FFA600",
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