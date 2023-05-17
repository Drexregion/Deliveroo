import { Image, Text, View } from "react-native";
import React, { Fragment } from "react";
import styles from "../src/Styles";
import * as Animatable from "react-native-animatable";
import PasswordInput from "../src/passwordInput";
import * as Progress from "react-native-progress";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Msg = ({
  incomingMsg,
  sentMsg,
  msg,
  password,
  progress,
  onOrderComplete,
}) => {
  return (
    <Fragment>
      {/* Sent Messages */}
      {/* If then sent message is true then display this text */}
      {sentMsg && (
        <Animatable.View
          animation="slideInUp"
          iterationCount={1}
          style={styles.SentMsgBox}
        >
          <View style={{ marginRight: 2, maxWidth: "50%" }}>
            <Text style={styles.sentMsgText}>{msg}</Text>
          </View>

          <View style={{ marginRight: 2,marginLeft:10}}>
            <Image
              source={require("./face.jpg")}
              style={{
                height: 30,
                width: 30,
                borderRadius: 400,
                marginRight: 2,
              }}
            />
          </View>
        </Animatable.View>
      )}

      {/* Incoming Messages */}
      {/* I incoming message is true then display this message */}
      {incomingMsg && (
        <Animatable.View
          animation="slideInUp"
          iterationCount={1}
          style={styles.incomingMsgBox}
        >
          <View style={{marginRight:10}}>
            <MaterialCommunityIcons
              name="robot-outline"
              size={24}
              color="gray"
            />
          </View>
          <View style={{ marginRight: 2, maxWidth: "70%" }} >
            <Text style={styles.incomingMsgText}>{msg}</Text>
          </View>
        </Animatable.View>
      )}
      {password && <PasswordInput />}

      {progress && (
        <Progress.Bar
          size={20}
          color={"grey"}
          indeterminate={true}
          style={{ marginLeft: 10 }}
        />
      )}
    </Fragment>
  );
};

export default Msg;
