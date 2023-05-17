import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import CartItems from "../src/CartItems";
import CurrencyFormatter from "react-currency-formatter";

const CartCard = ({items,onRefresh}) => {

  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.cartContainer}
      onPress={() => {
        navigation.navigate("Cart",{onRefresh})
       
        // console.log(prop)
      }}
    >
      <View style={{ justifyContent: "center", flexDirection: "row" }}>
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
            marginRight: "10%",
            
          }}
        >
          {items}
        </Text>
        <Text
          style={{ color: "white", fontWeight: "bold", marginRight: "40%" }}
        >
          ViewBasket
        </Text>
        <Text style={{ color: "white", fontWeight: "bold" }}>
        <CurrencyFormatter quantity={CartItems.price} currency="USD" />
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CartCard;

const styles = StyleSheet.create({
  cartContainer: {
    borderRadius: 10,
    position: "absolute",
    // marginTop: 60,
    backgroundColor: "#00CCBB",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    padding: 10,
    width: "82%",
    height: 70,
    flexDirection: "row",
    bottom: 20,
    elevation: 7,
  },
});
