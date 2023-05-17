import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import * as Icons from "react-native-heroicons/solid";
import DishRow from '../components/DishRow';
import RestaurantCard from '../components/RestaurantCard';


const Indian = () => {
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
          uri:'https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8SW5kaWFuJTIwZm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
        }}
        className="w-full h-80 bg-gray-300 p-4"/>
        <Text className=" text-white text-3xl font-bold mt-60 left-4
                            items-center align-middle absolute">
          {'Indian'}
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
          text={'Basgulla'}
          id ='12'
          imgUrl = {'https://cdn.tasteatlas.com//Images/Dishes/728691b02df3490bbbecdea8422530d1.jpg?w=905&h=510'}
          rating={'4.5'}
          genre='Indian'
          address='Kilimanjaro Restaurant'
          short_description='Enjoy yourself you big boy'
          long={'123'}
          lat={'1234'}
          price={'10'}
        />
        </View>
        <View className='pt-6 align items-center'>
        <RestaurantCard
          text={'Shahi paneer'}
          id ='1234'
          imgUrl = {'https://cdn.tasteatlas.com//Images/Dishes/56ff328667ef4dc6a883398c519b9622.jpg?w=905&h=510'}
          rating={'4.5'}
          genre='Indian'
          address='IKilimanjaro Restaurant'
          short_description='Enjoy yourself you big boy'
          long={'123'}
          lat={'1234'}
          price={'25'}
        />
          </View>
          <View className='pt-6 align items-center'>
        <RestaurantCard
          text={'Beef Curry'}
          id ='1234'
          imgUrl = {'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/20200205-beef-curry-ehg-9732-jpg-1582823107.jpg?crop=1xw:1xh;center,top&resize=980:*'}
          rating={'4.5'}
          genre='Indian'
          address='Kilimanjaro Restaurant'
          short_description='Enjoy yourself you big boy'
          long={'123'}
          lat={'1234'}
          price={'40'}
        />
          </View>
          <View className='pt-6 align items-center'>
        <RestaurantCard
          text={'Chicken Tisa Massala'}
          id ='1234'
          imgUrl = {'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-chicken-tikka-masala-vertical-jpg-1526066425.jpg?crop=1xw:1xh;center,top&resize=980:*'}
          rating={'4.5'}
          genre='Indian'
          address='Kilimanjaro Restaurant'
          short_description='Enjoy yourself you big boy'
          long={'123'}
          lat={'1234'}
          price={'50'}
        />
          </View>
    </ScrollView>


  </View>
  )
}

export default Indian