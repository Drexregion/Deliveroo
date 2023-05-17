import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as Icons from "react-native-heroicons/outline";
// import Categorycard from './CategoryCard';
import RestaurantCard from '../components/RestaurantCard';
// import { client } from '../sanity';

const FeaturedRow = ({title1,description,id}) => {
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
      </View>
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
          price={'20'}
        /> 
      </ScrollView>
    </View>
  )
}

export default FeaturedRow