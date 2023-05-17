import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import * as Icons from "react-native-heroicons/solid";
import DishRow from '../components/DishRow';
import RestaurantCard from '../components/RestaurantCard';


const American = () => {
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
  className='bg-gray-100 flex-1'>
       

      <View className='relative'>
        
        <Image
        source={{
          uri:'https://images.unsplash.com/photo-1503631285924-e1544dce8b28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8QW1lcmljYW4lMjBmb29kfGVufDB8fDB8cmVkfA%3D%3D&auto=format&fit=crop&w=500&q=60'
        }}
        className="w-full h-80 bg-gray-300 p-4"/>
        <Text className=" text-white text-3xl font-bold mt-60 left-4
                            items-center align-middle absolute">
          {'American'}
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
          text={'Chopped Cabbage'}
          id ='123'
          imgUrl = {'https://images.unsplash.com/photo-1503764654157-72d979d9af2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8QXNpYW4lMjBmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'}
          rating={'4.5'}
          genre='American'
          address='Kilimanjaro Restaurant'
          short_description='Enjoy yourself with the express of sweet sweet pie you cant miss it broski'
          long={'123'}
          lat={'1234'}
          price={'10'}
        />
        </View>
        <View className='pt-6 align items-center'>
        <RestaurantCard
          text={'Hamburgers'}
          id ='12345'
          imgUrl = {'https://images.unsplash.com/photo-1602030638412-bb8dcc0bc8b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8QW1lcmljYW4lMjBmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'}
          rating={'4.5'}
          genre='American'
          address='Kilimanjaro Restaurant'
          short_description='Enjoy yourself you big boy'
          long={'123'}
          lat={'1234'}
          className="mt-2"
          price={'20'}
          /> 
          </View>
          <View className='pt-6 align items-center'>
        <RestaurantCard
          text={'Chicago Style Pizza'}
          id ='12345'
          imgUrl = {'https://www.chefspencil.com/wp-content/uploads/Chicago-style-Pizza.jpg.webp'}
          rating={'4.5'}
          genre='American'
          address='Kilimanjaro Restaurant'
          short_description='Enjoy yourself you big boy'
          long={'123'}
          lat={'1234'}
          className="mt-2"
          price={'30'}
          /> 
          </View>
          <View className='pt-6 align items-center'>
        <RestaurantCard
          text={'Apple pie'}
          id ='12345'
          imgUrl = {'https://www.chefspencil.com/wp-content/uploads/Apple-Pie-1.jpg.webp'}
          rating={'4.5'}
          genre='American'
          address='Kilimanjaro Restaurant'
          short_description='Enjoy yourself you big boy'
          long={'123'}
          lat={'1234'}
          className="mt-2"
          price={'30'}
          /> 
          </View>

    </ScrollView>


  </View>
  )
}

export default American