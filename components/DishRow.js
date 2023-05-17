import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import CurrencyFormatter from "react-currency-formatter";
import * as Icons from "react-native-heroicons/solid";
import { useDispatch, useSelector } from "react-redux";
import CartItems from "../src/CartItems";

// Ensure that you understand hooks
// Especially useState dem dem

const DishRow = ({ id, name, description, price, imgUrl,onRemove,onRefresh }) => {
  // const navigation = Navi
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
  const fooditems = 0;
  const [isPressed, setisPressed] = useState(false);

  return (
    <>
      <TouchableOpacity className=" bg-white rounded-lg mt-2 mx-2  ">
        <View className="flex-row py-1 mx-2">
          <View className="flex-1 pb-2">
            <Text className="text-lg mb-3 font-bold">{name}</Text>
            <Text className="text-gray-400 font-bold">
              <CurrencyFormatter quantity={parseInt(price)} currency="GBP" />
            </Text>
            <TouchableOpacity onPress={()=>{
              removeFromList(name)
              CartItems.price-=price
              CartItems.items-=1
              onRefresh()
              
              
            console.log(CartItems.itemsProps)}}>
            <Text className="text-gray-400 mr-1 mt-1" style={{color:'#00ccbb'}}>Remove</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Image
              style={{
                borderWidth: 1,
                borderColor: "#f3f3f4",
                borderRadius: 20,
                elevation: 10,
              }}
              source={{
                uri: imgUrl,
              }}
              className="h-20 w-20 bg-gray-300 mr-50"
            />
          </View>
        </View>
      </TouchableOpacity>

      {isPressed && (
        <View className="bg-white px-4">
          <View className=" flex-row space-x-2 pb-3 items-center">
            <TouchableOpacity>
              <Icons.MinusCircleIcon color={"#00CCBB"} size={40} />
            </TouchableOpacity>
            <Text>{items.length}</Text>
            <TouchableOpacity>
              <Icons.PlusCircleIcon color={"#00CCBB"} size={40} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default DishRow;
