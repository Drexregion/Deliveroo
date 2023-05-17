import { View, Text, Image, SafeAreaView, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Onboarding = () => {
    const navigation =  useNavigation()
  return (
    <SafeAreaView style={{backgroundColor:'#00ccbb',flexGrow:1}} >

        <View style={{backgroundColor:"#00ccbb",flexGrow:1,justifyContent:'center',alignContent:'center'}} className='mr-8'>
            <Image
                    source={{
                        uri:'https://cwa.roocdn.com/_next/static/social_media.cac4f21a.png',
                    }}
                    // source={require('../assets/ed825791-0ba4-452c-b2cb-b5381067aad3_RW_hk_kit_importance.avif')}
                    className=" ml-7 h-60 w-70 bg-gray-300 rounded-full justify-center"
                    />
                <View className='align-middle items-center ml-6'>
                    <Text className=' text-xl text-white font-semibold'>
                        . Enjoy the variety of foods
                    </Text>
                    <Text className=' text-lg text-white font-medium'>
                        . Fast and Swift Delivery
                    </Text>
                </View>
                <View className="items-center mt-10 ml-6 fill-none">
                    <TouchableOpacity className='bg-gray-400 rounded-3xl 
                                                    px-10 py-3  fill-none '
                                                    onPress={()=>navigation.navigate('Home')}
                    >
                        <Text className="text-lg font-extrabold text-white ">Munch on</Text>
                    </TouchableOpacity>
                </View>
        </View>
     
  
    </SafeAreaView>
  )
}

export default Onboarding