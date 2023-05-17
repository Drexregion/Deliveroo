import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as Icons from "react-native-heroicons/outline";
// import Categorycard from './CategoryCard';
import RestaurantCard from '../components/RestaurantCard';
// import { client } from '../sanity';

const FeaturedRow3 = ({title1,description,id}) => {
  // const [restaurants,setRestaurants] = useState([])
  // useEffect(() => {
  //   client.fetch(`*[_type=='featured' && _id==$id]{
  //     ...,
  //     restaurant[] => {
  //   }
  //   }`,{id})
  //   .then((data) => {setRestaurants(data?.restaurants)
  //   });
  //   }, [])
  return (
    <View>
      <View className='mt-4 flex-row items-center justify-between px-4'>
        
        <Text className='text-lg text-gray-500 font-bold '>{title1}</Text>
        <Icons.ArrowRightIcon color={'#00CCBB'}/>
      </View >
      <ScrollView
      horizontal
      contentContainerStyle ={{
        paddingHorizontal:15,
        }}
      showsHorizontalScrollIndicator={false}
      className='pt-4'
      >
        {/* ---------Restaurant Cards--------- */}
        {/* {restaurants?.map(restaurant =>{
                      <RestaurantCard
                      key={restaurant._id}
                      text = {restaurant.name}
                      id ={restaurant._id}
                      // imgUrl = {restaurant.image}
                      rating={restaurant.rating}
                      genre={restaurant.type?.name}
                      address={restaurant.address}
                      short_description={restaurant.short_description}
                      dishes={restaurant.dishes}
                      long={restaurant.long}
                      lat={restaurant.lat}
                      />
        })} */}
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
        <RestaurantCard
        text={'Minced Eggs'}
          id ='123'
          imgUrl = {'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGhlYWx0aHklMjBmb29kc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'}
          rating={'4.5'}
          genre='California'
          address='Kilimanjaro Restaurant'
          short_description='Enjoy yourself with the express of sweet sweet pie you cant miss it broski'
          long={'123'}
          lat={'1234'}
          price={'50'}
        />
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
        <RestaurantCard
          text={'Minced Fish and meat'}
          id ='12345'
          imgUrl = {'https://images.unsplash.com/photo-1606756790138-261d2b21cd75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGhlYWx0aHklMjBmb29kc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'}
          rating={'4.5'}
          genre='Japanese'
          address='Kilimanjaro Restaurant'
          short_description='Enjoy yourself you big boy'
          long={'123'}
          lat={'1234'}
          price={'100'}
        /> 
      </ScrollView>
    </View>
  )
}

export default FeaturedRow3