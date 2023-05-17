import {
  RefreshControl,
  Modal,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import DishRow from "../components/DishRow";
import CartItems from "../src/CartItems";
import CartCard from "../components/CartCard";
import * as Icons from "react-native-heroicons/solid";
import { useNavigation, useRoute } from "@react-navigation/native";

const CartScreen = () => {
  const {
    params: {
      onRefresh,
    },
  } = useRoute();
  const [refreshing,setRefreshing] = useState(false)
  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }
  const navigation = useNavigation();
  const refreshPage=()=>{
    setRefreshing(true)
    wait(2000).then(() => setRefreshing(false));
  }
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
  return (
    <SafeAreaView style={{ backgroundColor: "#E5E4E2", flexGrow: 1 }}>
      {/* --------------header----------------- */}
      <View
        style={{
          backgroundColor: "white",
          padding: 50,
          paddingHorizontal: 70,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View style={{ marginLeft: 60 }}>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>Basket</Text>
          <Text style={{ color: "#C0C0C0" }}>Nando's</Text>
        </View>
        <TouchableOpacity
          onPress={()=>{
            navigation.goBack()
            onRefresh()}}
          style={{ marginLeft: 75 }}
        >
          <View>
            <Icons.XCircleIcon color={"#00CCBB"} size={50} />
          </View>
        </TouchableOpacity>
      </View>

            {/*-------------------- Cart items-------------- */}
      <ScrollView style={{ flexGrow: 1, marginBottom: "80%" }}  refreshControl={
	    <RefreshControl
		    refreshing={refreshing}
        colors={['#00ccbb']}/>}
      >
        {CartItems.itemsProps.map((item) => (
          <DishRow
            // name,description,price,ImageUrl
            name={item.foodName}
            description={item.description}
            price={item.foodPrice}
            imgUrl={item.imageUrl}
            id={Math.random()}
            key={Math.random()}
            onRemove={removeFromList}
            onRefresh={refreshPage}
          
          />
        ))}
      </ScrollView>
      {/* --------------Action Button--------------- */}
      <View
        style={{
          borderRadius: 10,
          position: "absolute",
          marginbottom: 60,
          backgroundColor: "white",
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
          padding: 10,
          width: "100%",
          height: 140,
          flexDirection: "row",
          top: 612,
          elevation: 7,
        }}
      >
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            style={{
              backgroundColor: "#00ccbb",
              padding: 20,
              width: 270,
              alignItems: "center",
              borderRadius: 20,
            }}
            onPress={() => {
              navigation.navigate("PreparingOrder")
              CartItems.price=0
              CartItems.itemsProps=[];
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 20, color: "white" }}>
              Order Now
            </Text>
          </TouchableOpacity>
        </View>
      </View>

    </SafeAreaView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
