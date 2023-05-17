import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { ChatBubbleBottomCenterIcon } from "react-native-heroicons/outline";


const CustomizeCard = ({items,onRefresh}) => {

  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.cartContainer}
      onPress={() => {
        navigation.navigate("Chatbot")
       
        // console.log(prop)
      }}
    >
      <View style={{ justifyContent: "center", flexDirection: "row" }}>
        <View
          style={{
            color: "white",
            fontWeight: "bold",
            marginRight: "10%",
            
          }}
        >
          <ChatBubbleBottomCenterIcon color={'white'}/>
        </View>
        <Text
          style={{ color: "white", fontWeight: "bold", marginRight: "40%" }}
        >
          Customize food
        </Text>

      </View>
    </TouchableOpacity>
  );
};

export default CustomizeCard;

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
