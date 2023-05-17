  
  import { View, Text, ScrollView, Image, TouchableOpacity,RefreshControl } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import * as Icons from "react-native-heroicons/solid";
import DishRow from "../components/DishRow";
import CartCard from "../components/CartCard";
import CurrencyFormatter from "react-currency-formatter";
import { current } from "@reduxjs/toolkit";
import CartItems from "../src/CartItems";
import { name } from "tar/lib/types";

const RestaurantScreen = () => {
  const [foodAmount, setfoodAmount] = useState(0);
  const [priceOfFood, setPriceOfFood] = useState(0);
  const [refreshing,setRefreshing] = useState(false)

  // const handlechoosenFood = (properties)=>{
  //   console.log(choosenFood)
  //   choosenFood.push(text)
  // }
  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }
  const refreshPage=()=>{
    setRefreshing(true)
    wait(2000).then(() => setRefreshing(false));
  }
  const LocalProperties = new Object();
  const handleReducer = () => {
    if (foodAmount > 0) {
      setfoodAmount(foodAmount - 1);
    } else {
      return;
    }
  };
  const handleIncrement = () => {
    setfoodAmount(foodAmount + 1);
  };
  const handlePrice = () => {
    if (foodAmount >= 1) {
      setPriceOfFood(parseInt(foodAmount + 1) * price);
    } else {
      return;
    }
  };
  const removeFromList = (name) => {
    if (CartItems.itemsProps.length > 0) {
      for (let i = 0; i < CartItems.itemsProps.length; i++) {
        console.log(CartItems.itemsProps[i].foodName, name);
        if (CartItems.itemsProps[i].foodName === name) {
          CartItems.itemsProps.splice(i, 1);
          break;
        }
      }
    }
  };

  const getElementNumber = (name )=>{
    count = 0
    for(item of CartItems.itemsProps){
        if(item.foodName==name){
          // console.log(name,item.foodName)
          count++
        }
    }
    return count
  }

  const getElementPrice =(quantity)=>{
    new_price = quantity * price
    return new_price
  }
  const CreateLocalObject = () => {
    LocalProperties.foodName = text;
    LocalProperties.description = short_description;
    LocalProperties.foodPrice = price;
    LocalProperties.imageUrl = imgUrl;
    LocalProperties.Id = Math.random();
    LocalProperties.Key = Math.random();

    return LocalProperties;
  };

  const reducerhandlePrice = () => {
    if (foodAmount === 0 ) {
      return;
    } else {
      data.priceOnScreen -= price
      setPriceOfFood(priceOfFood - price)
      
    }
  };
  // const handleItemIncrement = (name) => {
  //   for (let i = 0; i < CartItems.itemsProps.length; i++) {
  //     let newitem = CartItems.itemsProps.filter(
  //       (items) => items.foodName === name
  //     );
  //     setfoodAmount(newitem.length);
  //   }
  // };
  // const handleItemDecrement = (idy) => {
  //   if(CartItems.itemsProps.length > 0){
  //   for(let i =0; i< CartItems.itemsProps.length; i++){
  //     let newitem =CartItems.itemsProps.filter(items=>items.Id === idy)
  //     console.log(newitem)
  //     // CartItems.itemsProps = newitem
  //   }}}
  const navigation = useNavigation();
  const data = {
    priceOnScreen: parseInt(price),
    quantityOnScreen:0

  }
  const {
    params: {
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
      price,
    },
  } = useRoute();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
    setPriceOfFood(price );
    console.log(data.priceOnScreen)
    // setfoodAmount(handleItemIncrement()));
  }, []);

  return (
    <>
      <View className="bg-white flex-1">
        <ScrollView
          vertical
          contentContainerStyle={{
            paddingBottom: 100,
          }}
          className="bg-white flex-1"
          refreshControl={
            <RefreshControl
            refreshing={refreshing}
            colors={['#00ccbb']}/>}
          
          
        >
          <View className="relative">
            <Image
              source={{
                uri: imgUrl,
              }}
              className="w-full h-80 bg-gray-300 p-4"
            />
            <TouchableOpacity
              className="mt-14 left-4 bg-gray-100 p-1.5 
                                      rounded-full w-8 h-8 items-center 
                                      align-middle absolute"
              onPress={navigation.goBack}
            >
              <Icons.ArrowLeftIcon size={20} color="#00CCBB" className="pt-6" />
            </TouchableOpacity>
          </View>

          <View className="bg-white pl-4 pt-4 flex-1">
            <Text className="text-3xl font-bold">{text}</Text>
            <View className="flex-row space-x-1 items-center pt-3">
              <Icons.StarIcon color="green" opacity={0.5} size={22} />
              <Text className="text-green-500 ">{rating}</Text>
              <Text className="text-xs text-gray-500  ">{genre}</Text>
              <Icons.MapPinIcon color="gray" opacity={0.4} size={22} />
              <Text className="text-green-500 ">{rating}</Text>
              <Text className="text-xs text-gray-500  ">Nearby {address}</Text>
            </View>
            <View className="pt-2">
              <Text className="text-gray-500 mt-2 pb-4">
                {short_description}
              </Text>
              <Text className="font-bold text-2xl mt-2 pb-4">
                <CurrencyFormatter
                  quantity={getElementNumber(text)*price }
                  currency="USD"
                />
              </Text>
            </View>

            <TouchableOpacity className="flex-1 flex-row space-x-1 items-center p-4 border-y mt-6 border-gray-300">
              <Icons.QuestionMarkCircleIcon
                color={"gray"}
                opacity={0.5}
                size={20}
              />
              <Text className="font-extrabold text-sm flex-1">
                Have a food allergy?
              </Text>
              <Icons.ChevronRightIcon color={"gray"} opacity={0.5} size={20} />
            </TouchableOpacity>
          </View>
          <View className="justify-center mt-6 align-middle items-center bg-white flex-1 flex-row space-x-2">
            <TouchableOpacity
              onPress={() => {
                handleReducer();
                reducerhandlePrice();
                removeFromList(text);
                if(CartItems.price==0){
                  return
                }else{
                  CartItems.price -= price
                }
                
             
                
              
                
                // console.log(removeFromList(text));
                console.log(CartItems.itemsProps);
                console.log(CartItems.itemsProps.length)
                console.log(CartItems.price);
                // CartItems.itemsProps.pop(LocalProperties);
              }}
            >
              <Icons.MinusCircleIcon color={"#00CCBB"} size={40} />
            </TouchableOpacity>
            <Text>{getElementNumber(text)}</Text>
            <TouchableOpacity>
              <Icons.PlusCircleIcon
                onPress={() => {
                  handleIncrement();
                  handlePrice();
                  console.log(getElementNumber(text))
                  console.log(getElementPrice(getElementNumber(text))) 

                  // CartItems.items.push(text);
                  CartItems.price += parseInt(price);
                  CartItems.itemsProps.push(CreateLocalObject());
                  // console.log(CartItems.itemsProps);
                  // console.log(CartItems.itemsProps.length);
                  // console.log(CartItems.price);
                  // handleItemIncrement(text)
                  // console.log(CartItems.price);
                  // // CartItems.itemsProps.push(LocalProperties);
                  // CartItems.itemsProps.push(Object.create({
                  //   name: { value: "EmployeeOne" },
                  // }));
                  // console.log(CartItems.itemsProps);
                }}
                color={"#00CCBB"}
                size={40}
              />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>

      <CartCard items={CartItems.itemsProps.length}
                onRefresh ={refreshPage} />
    </>
  );
};

export default RestaurantScreen;

{
  /* Dish row */
}
{
  /* When i eventually link to sanity
        {dishes.map(dish)=>(
          <Dishrow
          key={dish._id}
          id={dish._id}
          name={dish.name}
          description={dish._shortdescription}
          price={dish.price}
          image={dish.image}
          />
        )} */
}
{
  /* <DishRow
              key={12}
              id={12}
              name={'Salad'}
              description={'Enjoy the assorted vegetables'}
              price={'40'}
              // image={}
              />
            <DishRow
              key={123}
              id={123}
              name={'Salad'}
              description={'Enjoy the assorted vegetables'}
              price={'40'}
              // image={}
              />
            <DishRow
              key={1234}
              id={1234}
              name={'Salad'}
              description={'Enjoy the assorted vegetables'}
              price={'40'}
              // image={}
              />
            <DishRow
              key={12345}
              id={12345}
              name={'Salad'}
              description={'Enjoy the assorted vegetables'}
              price={'40'}
              // image={}
              />
            <DishRow
              key={123456}
              id={123456}
              name={'Salad'}
              description={'Enjoy the assorted vegetables they are good for consumption'}
              price={'40'}
              // image={}
              /> */
}
