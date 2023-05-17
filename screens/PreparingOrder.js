import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React ,{useEffect}from "react";
import * as Animatable from 'react-native-animatable'
import * as Progress from 'react-native-progress'
import { useNavigation } from "@react-navigation/native";

const PreparingOrder = () => {
    const navigation = useNavigation()
    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate('DeliveryScreen')
            },7000)
    })

  

  return (
    <SafeAreaView
      style={{
        backgroundColor: "#00ccbb",
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
     
    <Animatable.Image
    source={require('../assets/orderLoading.gif')}
    animation='slideInUp'
    iterationCount={1}
    style={{height:300,width:300,borderRadius:900,elevation:8}}/>
    <Animatable.Text
      animation='slideInUp'
      iterationCount={1}
      style={{
        fontWeight:'bold',
        color:'white',
        marginVertical:50,
        
      
      }}>
        Waiting for Restaurant to accept your order!
      </Animatable.Text>

      <Progress.Circle size={60} indeterminate={true} color={'white'} style={{marginTop:20}}/>
    </SafeAreaView>
  );
};

export default PreparingOrder;

const styles = StyleSheet.create({});
