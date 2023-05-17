import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import * as Icons from "react-native-heroicons/solid";
import DishRow from '../components/DishRow';
import RestaurantCard from '../components/RestaurantCard';


const African = () => {
    const navigation = useNavigation();


    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown:false,
      })
    }, [])
  return (
    <View className='bg-white flex-1'>
  <ScrollView
  vertical
   contentContainerStyle={{
    paddingBottom :100,
    
  }}
  className='bg-gray-50 flex-1'>

      <View className='relative'>
        
        <Image
        source={{
          uri:'https://img.theculturetrip.com/1440x/smart/wp-content/uploads/2017/11/shutterstock_468382721.jpg'
        }}
        className="w-full h-80 bg-gray-300 p-4"/>
        <Text className=" text-white text-3xl font-bold mt-60 left-4
                            items-center align-middle absolute">
          {'African'}
        </Text>
          <TouchableOpacity className='mt-14 left-4 bg-gray-100 p-1.5 
                                      rounded-full w-8 h-8 items-center 
                                      align-middle absolute'
                                      onPress={
                                        navigation.goBack
                                      }>
            <Icons.ArrowLeftIcon size={20} color='#00CCBB'
            className ='pt-6'/>
          
          </TouchableOpacity>
      </View>
      <View className = ' pl-4 pt-4 flex-1 space-y-2'>
        
       </View>
       <View className='pt-6 align items-center rounded-xl'>
       <RestaurantCard
          text={'Bole!!'}
          id ='12345'
          imgUrl = {'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS01iL6Fa2EOUKr3BhJ5BSLG2rkBtsGWO0ys4d6jmSr&s'}
          rating={'4.5'}
          genre='Port Harcourt'
          address='Kilimanjaro Restaurant'
          short_description='Enjoy yourself you big boy'
          long={'123'}
          lat={'1234'}
          price={'40'}
        /> 
        </View>
        <View className='pt-6 align items-center'>
        <RestaurantCard
        text={'Jollof Rice'}
          id ='123'
          imgUrl = {'https://img.theculturetrip.com/1440x/smart/wp-content/uploads/2017/11/shutterstock_327873263.jpg'}
          rating={'4.5'}
          genre='Abuja'
          address='Kilimanjaro Restaurant'
          short_description='Enjoy yourself with the express of sweet sweet pie you cant miss it broski'
          long={'123'}
          lat={'1234'}
          price={'30'}
        />
          </View>
          <View className='pt-6 align items-center'>
        <RestaurantCard
           text={'Ogbono Soup'}
           id ='12'
           imgUrl = {'https://img.theculturetrip.com/1440x/smart/wp-content/uploads/2017/11/shutterstock_1063888055.jpg'}
           rating={'4.5'}
           genre='Nigeria'
           address='Kilimanjaro Restaurant'
           short_description='Enjoy yourself you big boy'
           long={'123'}
           lat={'1234'}
           price={'40'}
        />
          </View>
          <View className='pt-6 align items-center'>
        <RestaurantCard
           text={'Eforiro'}
           id ='12'
           imgUrl = {'https://img.theculturetrip.com/1440x/smart/wp-content/uploads/2017/11/16092379368_3bbfa0d200_k.jpg'}
           rating={'4.5'}
           genre='Yoruba'
           address='Kilimanjaro Restaurant'
           short_description='Enjoy yourself you big boy'
           long={'123'}
           lat={'1234'}
           price={'20'}
        />
          </View>
    </ScrollView>


  </View>
  )
}

export default African