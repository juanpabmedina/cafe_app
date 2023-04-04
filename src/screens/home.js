import React from "react";
import { View, Text, Image, ImageBackground, StyleSheet, TextInput, TouchableOpacity, FlatList} from "react-native";


TouchableOpacity.defaultProps = { activeOpacity: 0.8 };




const Home = () => {
    const [url, onChangeText] = React.useState('');
    const [number1, onChangeNumber1] = React.useState('');
    const [number2, onChangeNumber2] = React.useState('');
    const [data, setData] = React.useState([1,2]);
    const [isLoading, setLoading] = React.useState(true);
    const flatList1 = React.useRef(null)
    const flatList2 = React.useRef(null)
    
    const GetRequest = async () =>{
        try {
            const response = await fetch(url);
            const json = await response.json();
            setData(json.data);
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
                ph:number1,
                irr:number2
              })
            });
          } catch (error) {
            console.error(error);
          } finally {
            setLoading(false);
          }
    };
    

    const ConnectionButton = ({ onPress, title, data }) => (
        <TouchableOpacity onPress={GetRequest} style={styles.button1}>
            <Text style={styles.textButton}>{title}</Text>
        </TouchableOpacity>
    );

    const SendButton = ({ onPress, title }) => (
        <TouchableOpacity onPress={PostRequest} style={styles.button1}>
            <Text style={styles.textButton}>{title}</Text>
        </TouchableOpacity>
    );

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
                onChangeText={onChangeText}
                value={url}
                placeholder="192.168.207.185/electiva/upload.php"
                keyboardType="default"
            />
            
            <ConnectionButton data={url} title="Conectar" size="sm" backgroundColor="#1DB72D" />
            <Text style={styles.title2}> Datos Recibidos </Text>

            <View style={{flexDirection:'row',justifyContent: 'space-between'}}>
                <ImageBackground style={styles.squareIrradiance} source={require("../images/out1.png")}>
                 
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
                                    {isEnd && <Text>{item.irr} </Text>}
                                </Text>
                            );
                        }}
                        scrollEnabled={false}
                        
                        />
                </ImageBackground>

                <ImageBackground style={styles.squarePh} source={require("../images/out2.png")}>
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
                                    {isEnd && <Text>{item.ph} </Text>}
                                </Text>
                            );
                        }}
                        scrollEnabled={false}
                        
                        />
                </ImageBackground>
            </View>

            <Text style={styles.title2}> Envio de Datos </Text>

            <View style={{flexDirection:'row',justifyContent: 'space-between'}}>
                <TextInput
                    style={styles.input2}
                    onChangeText={onChangeNumber1}
                    value={number1}
                    placeholder="2 K w/m²"
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.input2}
                    onChangeText={onChangeNumber2}
                    value={number2}
                    placeholder="10   "
                    keyboardType="numeric"
                />
            </View>


            <SendButton title="Enviar" size="sm" backgroundColor="#1DB72D" />
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex:1
    },
    title: {
        fontStyle: 'italic',
        fontWeight: 'bold',
        fontSize: 28,
        color: '#21894B',
        marginTop: 35,
        marginLeft: 25,
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
    out1: {
        fontStyle: 'italic',
        fontWeight: 'bold',
        fontSize: 24,
        alignSelf: "center",
        marginBottom:10,
    },
  });