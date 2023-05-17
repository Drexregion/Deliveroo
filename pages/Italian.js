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
  className='bg-gray-100 flex-1'>
       

      <View className='relative'>
        
        <Image
        source={{
          uri:'https://images.unsplash.com/photo-1589790938469-716e1a480479?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aXRhbGlhbiUyMGZvb2R8ZW58MHx8MHx5ZWxsb3d8&auto=format&fit=crop&w=500&q=60'
        }}
        className="w-full h-80 bg-gray-300 p-4"/>
        <Text className=" text-white text-3xl font-bold mt-60 left-4
                            items-center align-middle absolute">
          {'Italian'}
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
          text={'Fish Soup'}
          id ='12'
          imgUrl = {'https://images.unsplash.com/photo-1608500218861-01091cdc501e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8QWZyaWNhbiUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'}
          rating={'4.5'}
          genre='American'
          address='Kilimanjaro Restaurant'
          short_description='Enjoy yourself you big boy'
          long={'123'}
          lat={'1234'}
          price={'30'}
        />
        </View>
        <View className='pt-6 align items-center'>
        <RestaurantCard
          text={'Sushi'}
          id ='1234'
          imgUrl = {'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3VzaGl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'}
          rating={'4.5'}
          genre='Italian'
          address='Kilimanjaro Restaurant'
          short_description='Enjoy yourself you big boy'
          long={'123'}
          lat={'1234'}
          price={'40'}
        />
          </View>
          <View className='pt-6 align items-center'>
        <RestaurantCard
          text={'Baked Ziti'}
          id ='1234'
          imgUrl = {'https://www.aheadofthyme.com/wp-content/uploads/2021/02/pasta-bake-with-sausage-baked-ziti-5.jpg'}
          rating={'4.5'}
          genre='Italian'
          address='Kilimanjaro Restaurant'
          short_description='Enjoy yourself you big boy'
          long={'123'}
          lat={'1234'}
          price={'25'}
        />
          </View>
          <View className='pt-6 align items-center'>
        <RestaurantCard
          text={'Chicken Parmigiana'}
          id ='1234'
          imgUrl = {'https://www.aheadofthyme.com/wp-content/uploads/2020/10/easy-chicken-parmesan-chicken-parmigiana-683x1024.jpg'}
          rating={'4.5'}
          genre='Italian'
          address='Kilimanjaro Restaurant'
          short_description='Enjoy yourself you big boy'
          long={'123'}
          lat={'1234'}
          price={'45'}
        />
          </View>
    </ScrollView>


  </View>
  )
}

export default Japanese