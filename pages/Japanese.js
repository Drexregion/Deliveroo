import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import * as Icons from "react-native-heroicons/solid";
import DishRow from '../components/DishRow';
import RestaurantCard from '../components/RestaurantCard';


const Japanese = () => {
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
          uri:'https://images.unsplash.com/photo-1526318896980-cf78c088247c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXNpYW4lMjBmb29kfGVufDB8fDB8YmxhY2t8&auto=format&fit=crop&w=500&q=60'
        }}
        className="w-full h-80 bg-gray-300 p-4"/>
        <Text className=" text-white text-3xl font-bold mt-60 left-4
                            items-center align-middle absolute">
          {'Japanese'}
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
          <View className='pt-6 align items-center'>
        <RestaurantCard
      text={'Ongiri'}
      id ='1234'
      imgUrl = {'https://lh6.googleusercontent.com/3i6FARF4V4xOPKClT22fBssp7vs4Ru3gnSEU28IehkGQMrocQ5LkPsPxzR9LhH6nMHCcIdx8G_dUFv4VioGWeUqJPJ8xryUl5CXlaXrQ-UYcuEJvFhn-jgbHabSg_BRHut3xQ_U6=s0'}
      rating={'4.5'}
      genre='South Korean'
      address='Kilimanjaro Restaurant'
      short_description='Enjoy yourself you big boy'
      long={'123'}
      lat={'1234'}
    price={'20'}
        />
          </View>
       <View className='pt-6 align items-center rounded-xl'>
       <RestaurantCard
          text={'Assorted Salad'}
          id ='12'
          imgUrl = {'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aGVhbHRoeSUyMGZvb2RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'}
          rating={'4.5'}
          genre='American'
          address='Kilimanjaro Restaurant'
          short_description='Enjoy yourself you big boy'
          long={'123'}
          lat={'1234'}
          price={'10'}
        />
        </View>

          <View className='pt-6 align items-center'>
        <RestaurantCard
      text={'Misso Soup'}
      id ='1234'
      imgUrl = {'https://lh6.googleusercontent.com/FkL_O25KWKrC6KVl9yQcf2Dm1wQvMde2Hj29khK9vuzS8Uv8Uo1Qy4Cu3_b1v1O42LpzdUyZ50zPRpoIj_0B-k21yPVO9bBfJrFC6-baXugESQgiMkn8ELCZQ1P19WGOgxiiN0nt=s0'}
      rating={'4.5'}
      genre='South Korean'
      address='Kilimanjaro Restaurant'
      short_description='Enjoy yourself you big boy'
      long={'123'}
      lat={'1234'}
      price={'20'}
        />
          </View>
          <View className='pt-6 align items-center'>
        <RestaurantCard
      text={'Assorted fruits and nuts'}
      id ='1234'
      imgUrl = {'https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGhlYWx0aHklMjBmb29kc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'}
      rating={'4.5'}
      genre='South Korean'
      address='Kilimanjaro Restaurant'
      short_description='Enjoy yourself you big boy'
      long={'123'}
      lat={'1234'}
      price={'70'}
        />
          </View>
    </ScrollView>


  </View>
  )
}

export default Japanese