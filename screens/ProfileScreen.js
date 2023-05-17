import { View, Text, Image, TouchableOpacity, SafeAreaView, ScrollView, } from 'react-native'
import React, { useState } from 'react'
import { TailwindProvider } from 'tailwindcss-react-native'
import { useNavigation } from '@react-navigation/native'
import * as Icons from "react-native-heroicons/outline";


const ProfileScreen = () => {
    const navigation = useNavigation()
    const inputName = () =>{
        alert('hello')
    }
    const input = 'Divine'
  return (
      <SafeAreaView className='bg-white flex-1'>
        <View className='mt-8 bg-white flex-1'>
            <View>
                <View className="ml-8 mt-8">
                    <TouchableOpacity className='' onPress={navigation.goBack}>
                        <Icons.ArrowLeftIcon size={25} color='#00CCBB'
                        className ='ml-9 '/>
                    </TouchableOpacity>
                </View>
                <View className="align-middle justify-center items-center pt-">
                    <Image
                    source={{
                        uri:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
                    }}
                    className='w-40 h-40 rounded-full mb-5' />
                </View>
            </View>
           
            <ScrollView>
                <TouchableOpacity onPress={()=> input = inputName()}>
                <View className = 'border border-gray-300 p-7 item'>
                    <Text className=" font-bold text-xl item-center">
                        User Name:
                    </Text>
                    <Text className='pt-2 text-gray-500'>
                        Divine
                    </Text>
                </View>
                </TouchableOpacity>
                <View className = 'border border-gray-300 p-7 item'>
                    <Text className=" font-bold text-xl item-center">
                        EmailAddress:
                    </Text>
                    <Text className='pt-2 text-gray-500'>
                        DrexRegion@gmail.com
                    </Text>
                </View>
                <View className = 'border border-gray-300 p-7 item'>
                    <Text className=" font-bold text-xl item-center">
                        Location:
                    </Text>
                    <Text className='pt-2 text-gray-500'>
                        5 Etebi Street
                    </Text>
                </View>
                <View className = 'border border-gray-300 p-7 item'>
                    <Text className=" font-bold text-xl item-center">
                        Password:
                    </Text>
                    <Text className='pt-2 text-gray-500'>
                        XXXXXX
                    </Text>
                </View>
                <View className = ' p-7 item'>
                    <Text className=" font-bold text-xl item-center">
                        Favourite Delicacy:
                    </Text>
                    <Text className='pt-2 text-gray-500'>
                        Afang Soup and FuFu
                    </Text>
                </View>
            </ScrollView>
        </View>
    </SafeAreaView>
  )
}

export default ProfileScreen