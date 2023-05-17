import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as Icons from "react-native-heroicons/outline";
// import Categorycard from './CategoryCard';
import RestaurantCard from '../components/RestaurantCard';
// import { client } from '../sanity';

const FeaturedRow2 = ({title1,description,id}) => {
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
            text={'Eguse Soup'}
          id ='12'
          imgUrl = {'https://img.theculturetrip.com/1440x/smart/wp-content/uploads/2017/11/shutterstock_1130113022.jpg'}
          rating={'4.5'}
          genre='Akwa Ibom'
          address='Kilimanjaro Restaurant'
          short_description='Enjoy yourself you big boy'
          long={'123'}
          lat={'1234'}
          price={'100'}
        />
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
        <RestaurantCard
          text={'Moi Moi'}
          id ='1234'
          imgUrl = {'https://img.theculturetrip.com/1440x/smart/wp-content/uploads/2017/11/moin_moin.jpg'}
          rating={'4.5'}
          genre='Ibadan'
          address='Kilimanjaro Restaurant'
          short_description='Enjoy yourself you big boy'
          long={'123'}
          lat={'1234'}
          price={'20'}
        />
        <RestaurantCard
          text={'Bole!!'}
          id ='12345'
          imgUrl = {'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS01iL6Fa2EOUKr3BhJ5BSLG2rkBtsGWO0ys4d6jmSr&s'}
          rating={'4.5'}
          genre='Kilimanjaro Restaurant'
          address='5 Mkpok road'
          short_description='Enjoy yourself you big boy'
          long={'123'}
          lat={'1234'}
          price={'40'}
        /> 
      </ScrollView>
    </View>
  )
}

export default FeaturedRow2