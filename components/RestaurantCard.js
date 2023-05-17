import { View, Text, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import * as Icons from "react-native-heroicons/outline";
import { urlFor } from '../sanity';
import { useNavigation } from '@react-navigation/native';


const RestaurantCard = ({
  id,
  imgUrl,
  text,
  rating,
  genre,
  address,
  short_description,
  dishes,
  long,
  lat,
  price
}) => {

  const navigation = useNavigation()
  return (
   <TouchableOpacity className='bg-white mr-3 shadow'
   onPress={() => {
    navigation.navigate('Restaurant',{
      id,
      imgUrl,
      text,
      rating,
      genre,
      address,
      short_description,
      dishes,
      long,
      lat,
      price
    })
   }}>
      
      <Image
      source ={{
        uri:imgUrl,
      }}
      className = ' h-36 w-64 rounded-sm'
      />
      <View className ='px-3 pb-4'>
        <Text className='font-bold text-lg pt-2'>{text}</Text>
        <View className ="flex-row items-center space-x-1">
          <Icons.StarIcon color={'gray'}/>
          <Text className = 'text-green-500 '>{rating}</Text>
          <Text className = 'text-xs text-gray-500  '>
            {genre}
          </Text>
        </View>
          <View className="flex-row space-x-1 items-center">
            <Icons.MapPinIcon color={'gray'} opacity={0.4}/>
            <Text className="text-xs text-gray-500">Nearby - {address}</Text>
          </View>
      </View>
      

   </TouchableOpacity>
  )
}

export default RestaurantCard