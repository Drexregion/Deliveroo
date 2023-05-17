import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { XMarkIcon } from "react-native-heroicons/solid";
import * as Progress from "react-native-progress";
import { useNavigation } from "@react-navigation/native";
import MapView, { Marker } from "react-native-maps";

const DeliveryScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.DeliveryContainer}>
      <SafeAreaView style={styles.header}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Home");
            }}
          >
            <XMarkIcon color={"white"} size={30} />
          </TouchableOpacity>
          <Text style={{ color: "white", fontSize: 17, fontWeight: "bold" }}>
            Order Help
          </Text>
        </View>
        <View style={styles.cardContainer}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View>
              <Text style={{ color: "#C0C0C0" }}>Estimated Arrival</Text>
              <Text style={{ fontSize: 30, fontWeight: "bold" }}>
                45-55 Minutes
              </Text>
            </View>
            <View>
              <Image
                source={{ uri: "https://links.papareact.com/fls" }}
                style={{ height: 80, width: 80 }}
              />
            </View>
          </View>
          <View>
            <Progress.Bar size={30} color={"#00ccbb"} indeterminate={true} />
          </View>
          <Text style={{ marginTop: 10 }}> Your order is being Prepared</Text>
        </View>
      </SafeAreaView>
      <MapView
        initialRegion={{
          latitude: 5.019895,
          longitude: 7.9371151,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        style={{ flexGrow: 1,  zIndex: 0,marginBottom:0 }}
        mapType="mutedStandard"
       
      >
         <Marker
         coordinate={{
          latitude: 5.019895,
          longitude: 7.9371151,
         }}
         title={'Kilimanjaro'}
         description={'Welcome to Kilimanjaro'}
         identifier={'origin'}
         pinColor={'#00ccbb'}/>
         
      </MapView>
      
    </View>
  );
};

export default DeliveryScreen;
const styles = StyleSheet.create({
  DeliveryContainer: {
    backgroundColor: "#00ccbb",
    flexGrow: 1,
  },
  header: {
    marginTop: 50,
    marginHorizontal: 10,
    zIndex: 50,
    
  },
  cardContainer: {
    backgroundColor: "white",
    padding: 20,
    zIndex: 50,
    elevation: 7,
    marginTop: 70,
    marginHorizontal: 5,
    borderRadius: 10,
  },
});
