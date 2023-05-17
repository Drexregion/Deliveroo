import {ScrollView, Text, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import Categorycard from './CategoryCard';
import { client, urlFor } from '../sanity';
import FeaturedRow from './FeaturedRow';
import { useNavigation } from '@react-navigation/native';

const Categories = () => {
  const navigation = useNavigation()
  // const [categories,setCategories] = useState([])
  // useEffect(() => {
  //   client.fetch(`*[_type =='category' ]`)
  //   .then((data) => {setCategories(data)
  //   });
  //   }, [])
  return (
    <ScrollView 
    contentContainerStyle={{
      paddingHorizontal :15,
      paddingTop:10,
    }}
    horizontal
    showsHorizontalScrollIndicator = {false}
    >

      {/* --------Categories Card------ */}
      {/* {categories.map((category) => (
       <Categorycard 
      //  key={category._id}
      //  id = {category._id}
      //  title={category.name}
      // //  urlFor(imgUrl).url()
      //  imgUrl = {urlFor(category.image).width(200).url()}
      imgUrl = {'https://links.papareact.com/wru'}

       />)
      )}
      */}
      <TouchableOpacity onPress={()=>{navigation.navigate('American')}}>
        <Categorycard
        title='American'
        imgUrl={'https://images.unsplash.com/photo-1503631285924-e1544dce8b28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8QW1lcmljYW4lMjBmb29kfGVufDB8fDB8cmVkfA%3D%3D&auto=format&fit=crop&w=500&q=60'}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{navigation.navigate('African')}}>
        <Categorycard
        title='African'
        imgUrl={'https://img.theculturetrip.com/1440x/smart/wp-content/uploads/2017/11/shutterstock_468382721.jpg'}/>
      </TouchableOpacity>
      

      <TouchableOpacity onPress={()=>{navigation.navigate('Japanese')}}>
        <Categorycard
        title='Japanese'
        imgUrl={'https://images.unsplash.com/photo-1526318896980-cf78c088247c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXNpYW4lMjBmb29kfGVufDB8fDB8YmxhY2t8&auto=format&fit=crop&w=500&q=60'}/>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>{navigation.navigate('Italian')}}>
        <Categorycard
        title='Italian'
        imgUrl={'https://images.unsplash.com/photo-1589790938469-716e1a480479?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aXRhbGlhbiUyMGZvb2R8ZW58MHx8MHx5ZWxsb3d8&auto=format&fit=crop&w=500&q=60'}/>
      </TouchableOpacity>
        <TouchableOpacity onPress={()=>{navigation.navigate('India')}}>
        <Categorycard
        title='Indian'
        imgUrl={'https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8SW5kaWFuJTIwZm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'}/>
      </TouchableOpacity>
    {/* <FeaturedRow/> */}

        
    </ScrollView>
  );
};

export default Categories;