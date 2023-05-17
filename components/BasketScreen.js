import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FaceSmileIcon } from 'react-native-heroicons/solid'

const BasketScreen = () => {
  return (
    <View style={{backgroundColor:'#00ccbb',flexGrow:1,alignItems:'center',justifyContent:'center' }}>
      <Text style={{color:'white',fontWeight:'bold',fontSize:40}}>Enjoy your meal</Text>
      <FaceSmileIcon color={'white'} size={50} c />
    </View>
  )
}

export default BasketScreen

const styles = StyleSheet.create({})