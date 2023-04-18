import React, {useEffect} from "react";
import { View, Text, Image, ImageBackground, StyleSheet, TextInput, TouchableOpacity, FlatList} from "react-native";


TouchableOpacity.defaultProps = { activeOpacity: 0.8 };




const Home = () => {
    const [url, onChangeText] = React.useState('http://192.168.10.101:8080');
    const [number1, onChangeNumber1] = React.useState('');
    const [number2, onChangeNumber2] = React.useState('');
    const [data, setData] = React.useState([1,2]);
    const [isLoading, setLoading] = React.useState(true);
    const flatList1 = React.useRef(null)
    const flatList2 = React.useRef(null)
    const flatList3 = React.useRef(null)
    const flatList4 = React.useRef(null)
    const flatList5 = React.useRef(null)
    const flatList6 = React.useRef(null)


  
    
    const GetRequest = async () =>{
        try {
            const response = await fetch(url);
            const json = await response.json();
            setData(json.estacion_meteorologica);
          } catch (error) {
            console.error(error);
          } finally {
            setLoading(false);
          }
          
    };
    

    const ConnectionButton = ({ onPress, title, data }) => (
        <TouchableOpacity onPress={GetRequest} style={styles.button1}>
             <View style={{flexDirection:'row'}}>
                <Image                    
                        style={styles.imageStyle2}
                        source={require("../images/connection_icon.png")}
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
        
        <View style={styles.container}> 
            <View style={{flexDirection:'row',justifyContent: 'space-between'}}>
                <Text style={styles.title}> Estación Meteorológica</Text>
                <Image                    
                    style={styles.dry_img}
                    source={require("../images/estacion_meteorologica/weather.png")}
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
                <ImageBackground style={styles.squareIrradiance} source={require("../images/estacion_meteorologica/out_temp.png")}>
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
                                    {isEnd && <Text>T: {item.temp_amb}°C </Text>}
                                </Text>
                            );
                        }}
                        scrollEnabled={false}
                        
                        />
                </ImageBackground>

                <ImageBackground style={styles.squarePh} source={require("../images/estacion_meteorologica/out_hum.png")}>
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
                                    {isEnd && <Text>H: {item.hum_amb}% </Text>}
                                </Text>
                            );
                        }}
                        scrollEnabled={false}
                        
                        />
                </ImageBackground>
            </View>

            <View style={{flexDirection:'row',justifyContent: 'space-between'}}>
                <ImageBackground style={styles.squareIrradiance} source={require("../images/estacion_meteorologica/out_vel_viento.png")}>
                 
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
                            
                                    {isEnd && <Text>V: {item.vel_viento}m/s </Text>}
                                </Text>
                            );
                        }}
                        scrollEnabled={false}
                        
                        />
                </ImageBackground>

                <ImageBackground style={styles.squarePh} source={require("../images/estacion_meteorologica/out_dir_viento.png")}>
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
                                    {isEnd && <Text>Dir: {item.dir_viento} </Text>}
                                </Text>
                            );
                        }}
                        scrollEnabled={false}
                        
                        />
                </ImageBackground>
            </View>

            <View style={{flexDirection:'row',justifyContent: 'space-between'}}>
                <ImageBackground style={styles.squareIrradiance} source={require("../images/estacion_meteorologica/out_pluv.png")}>
                 
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
                                    {isEnd && <Text>P: {item.pluv} </Text>}
                                </Text>
                            );
                        }}
                        scrollEnabled={false}

                        
                        
                        />
                </ImageBackground>

                <ImageBackground style={styles.squarePh} source={require("../images/estacion_meteorologica/out_irr.png")}>
                    <FlatList
                      ref={flatList6}
                      onContentSizeChange={() => {
                          flatList6.current.scrollToEnd();
                      }}
                        data={data}
                        renderItem={({item, index}) => {
                            const isEnd = index === data.length - 1;
                            return(
                                <Text style={styles.out1}>
                                    {isEnd && <Text>Irr: {item.irr} </Text>}
                                </Text>
                            );
                        }}
                        scrollEnabled={false}
                        
                        />
                </ImageBackground>
                

            </View>
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex:1
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
        color: '#67A5BF',
        marginTop: 35,
        marginLeft: 15,
        marginRight: 10,
        alignSelf: 'flex-start'
    }, 
    title2: {
        fontStyle: 'italic',
        fontWeight: 'bold',
        fontSize: 24,
        color: '#606D73',
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
        backgroundColor: "#7DC8E7",
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