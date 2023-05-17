import {
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Chatbot from "../src/Index";

export default function App() {
  return (
    // <View>

    <KeyboardAvoidingView
      style={{ flex: 1, flexDirection: "column", justifyContent: "center" }}
      behavior="padding"
      enabled
      keyboardVerticalOffset={100}
    >
      <ScrollView style={{ flexGrow: 1 }}>
        <Chatbot />
      </ScrollView>
    </KeyboardAvoidingView>
    //   <View>
    //       <Chatbot />
    //       </View>

    // </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  // alignItems: 'center',
  // justifyContent: 'center',
  // },
});
