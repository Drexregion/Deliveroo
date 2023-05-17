import {
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Icons from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import { client } from "../sanity";
import category from "../sanity/schemas/category";
import FeaturedRow2 from "../components/FeaturedRow2";
import FeaturedRow3 from "../components/FeaturedRow3";
import CartCard from "../components/CartCard";
import CustomizeCard from "../components/CustomizeCard";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [featuredCategories, setFeaturedCategories] = useState([]);
  

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    client
      .fetch(
        `*[_type=='featured']
 `
      )
      .then((data) => {
        setFeaturedCategories(data);
      });
  }, []);

  return (
    <>
      <SafeAreaView className=" bg-white pt-5 flex-1">
        {/* -----Header------- */}
        <View>
          <View className="flex-row pb-3 items-center mx- space-x-2 ">
            <View className="px-4">
              <Image
                source={{
                  uri: "https://links.papareact.com/wru",
                }}
                // source={require('../assets/ed825791-0ba4-452c-b2cb-b5381067aad3_RW_hk_kit_importance.avif')}
                className=" px-4 h-7 w-7 bg-gray-300 rounded-full"
              />
            </View>
            <View className="flex-1 align-middle">
              <Text className="font-bold text-gray-300 text-xs">
                Deliver Now
              </Text>
              <Text className="font-bold text-xl ">
                Current Location
                <Icons.ChevronDownIcon size={20} color="#00CCBB" />
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Profile");
              }}
            >
              <View className="px-4">
                <Icons.UserIcon size={35} color="#00CCBB" />
              </View>
            </TouchableOpacity>
          </View>

          {/* ------search-------- */}

          <View className="flex-row flex-1 items-center px-4 ">
            <View className="flex-row  flex-1 items-center space-x-2 p-3 bg-gray-200 rounded">
              <Icons.MagnifyingGlassIcon size={20} color="#00CCBB" />
              <TextInput
                placeholder="Restaurants and cuisines"
                keyboardType="default"
                className="px-4"
              />
            </View>
            <View className="mx-1">
              <Icons.AdjustmentsVerticalIcon color="#00CCBB" className="px-5" />
            </View>
          </View>
        </View>

        <ScrollView
          className=" bg-gray-100 mt-3"
          contentContainerStyle={{
            paddingBottom: 100,
          }}
        >
          {/* -----Category row -------- */}
          <Categories />

          {/* -----Featured row--------- */}
          {/* {featuredCategories?.map((category) => (
              <FeaturedRow
              key = {category._id}
              id = {category._id}
              title1={category.name}
              description={category.short_description}
              />
          ))} */}
          {/*           
          <FeaturedRow/> */}
          <FeaturedRow title1="Offers for your" description="Offers for you" />
          <FeaturedRow2 title1="African Meals" description="Featured" />
          <FeaturedRow3 title1="Eat Healthy" description="Healthy foods" />
        </ScrollView>
      </SafeAreaView>
      <CustomizeCard/>
    </>
  );
};

export default HomeScreen;
