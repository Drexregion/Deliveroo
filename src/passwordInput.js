import { SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
// import OtpInputs from "react-native-otp-inputs";

const PasswordInput = (complete) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TextInput secureTextEntry={true} textContentType="password" textAlign="center" keyboardType="number-pad" style={styles.inputStyle} />
        <TextInput secureTextEntry={true} textContentType="password" textAlign="center" keyboardType="number-pad" style={styles.inputStyle} />
        <TextInput secureTextEntry={true} textContentType="password" textAlign="center" keyboardType="number-pad" style={styles.inputStyle} />
        <TextInput secureTextEntry={true} textContentType="password" textAlign="center" keyboardType="number-pad" style={styles.inputStyle} />
        {/* <OtpInputs
          handleChange={(code) => console.log(code)}
          numberOfInputs={6}
        /> */}
      </View>
    </SafeAreaView>
  );
};

export default PasswordInput;

const styles = StyleSheet.create({
  container: {
    // justifyContent:'center',
    flexDirection:"row",
    alignSelf: "flex-end",
    marginBottom: 10,
    marginHorizontal: 5,
    zIndex:100,
  },
  inputStyle:{
    // paddingLeft:100,
    borderRadius:2,
    height:45,
    width:30,
    borderColor:'#00ccbb',
    borderWidth:2,
    marginHorizontal:10
  }
});
