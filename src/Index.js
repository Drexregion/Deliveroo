import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Image,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import Msg from "../src/Msg";
import { data, foodItems } from "../src/Data";
import styles from "../src/Styles";
import * as Icons from "react-native-heroicons/outline";

let chats = [];
const Chatbot = () => {
  // The state(data holder) for the messages
  const [msg, setMsg] = useState("");

  // The state(data holder) for the chatlist(collection of messages)
  const [chatlist, setchatlist] = useState([]);
  const customReply = (sentMessage) => {
    let input = sentMessage.toLowerCase();
    for (let i = 0; i < foodItems.length; i++) {
      console.log(foodItems);

      if (input.indexOf(foodItems[i]) > -1 && input.indexOf("customize") > -1) {
        chats = [
          ...chats,
          {
            msg: "Okay, please make your order so that I can take it to the chefs",
            incomingMsg: true,
          },
        ];
        setchatlist(chats);
      }


      
    }
  };
  const feedbackReply = () => {
    chats = [
      ...chats,
      {
        msg: "Thank you for shopping with us, your package will arive soon",
        incomingMsg: true,
      },
    ];
    setTimeout(() => setchatlist(chats), 1200);
  };
  const readOrder = () => {
    console.log(chatlist.length);
    if (chatlist.length == 5) {
      setTimeout(() => {
        chats = [
          ...chats,
          {
            msg: "Okay give me some time to verify the bill from the chefs",
            incomingMsg: true,
          },
        ];
        setchatlist(chats);
      }, 6000);
      // const greetings = () => {
      //   console.log(chatlist.length);
      //   if (chatlist.length == 2) {
      //     setTimeout(() => {
      //       chats = [
      //         ...chats,
      //         {
      //           msg: "Hi Divine, So nice for me to be shopping with us.",
      //           incomingMsg: true,
      //         },
      //       ];
      //       setchatlist(chats);
      //     }, 6000);
      //   }
      // };

      setTimeout(() => {
        chats = [
          ...chats,
          { msg: `The bill is ${Math.floor(Math.random() * 70 )} dollars`, incomingMsg: true },
        ];
        setchatlist(chats);
      }, 12000);

      setTimeout(() => {
        chats = [
          ...chats,
          { msg: "Do you want to proceed with the order? ", incomingMsg: true },
        ];
        setchatlist(chats);
      }, 15000);
      // feedbackReply()
    }
  };
  const customAnswer = (chatbot_a) => {
    let input = chatbot_a.toLowerCase();
    if (input.includes("dipersa", 0)) {
      chats = [
        ...chats,
        { msg: "Which food would you like to customize?", incomingMsg: true },
      ];
      console.log(chatlist);
      setchatlist([...chats]);
      return;
    }
  };
  const getAnswer = (q) => {
    let input1 = q.toLowerCase();
    for (let i = 0; i < data.length; i++) {
      if (input1.includes(data[i].question, 0)) {
        chats = [
          ...chats,
          {
            msg: data[i].answer,
            incomingMsg: true,
            password: data[i].password,
          },
        ];
        setchatlist([...chats]);
        console.log(data[i].question);
        setTimeout(() => customAnswer(data[i].answer), 3000);
        // customAnswer(data[i].answer);
        return;
      }
    }
    // chats = [...chats, { msg: "Did not recognise", incomingMsg: true }];
    // setchatlist([...chats]);
    return;
  };
  const onSendMsg = () => {
    chats = [...chats, { msg: msg, sentMsg: true }];
    console.log(chats);

    setchatlist([...chats]);
    // console.log(chatlist);
    setTimeout(() => {
      getAnswer(msg);
    }, 3000);
    setTimeout(() => {
      customReply(msg);
    }, 3000);
    readOrder();
    // setTimeout(()=>{

    //   OrderCompletion()
    // },6000)
    // feedbackReply()

    setMsg("");
  };

  const OrderCompletion = () => {
    chats = [
      ...chats,
      { msg: "Your Order has been completed", incomingMsg: true },
    ];
    setchatlist([...chats]);
  };

  return (
    <SafeAreaView style={{ justifyContent: "space-between", flexGrow: 1 }}>
        
        {/* ---------------Text input Container------------ */}
        <View style={styles.typeMsgContainer}>
          {/* ---------Message container-------- */}
          <TextInput
            style={styles.typeMsgBox}
            // Initialize the value to the current message typed
            value={msg}
            placeholder="Type Here ..."
            // Once a message is typed
            // change the message state to that message
            onChangeText={(val) => setMsg(val)}
          />
          {/* ----------Action button---------- */}
          <TouchableOpacity
            style={[
              styles.sendBtn,
              { backgroundColor: msg ? "#00ccbb" : "grey" },
            ]}
            disabled={msg ? false : true}
            onPress={() => {
              onSendMsg();
              Keyboard.dismiss;
            }}
          >
            <Icons.PaperAirplaneIcon color={"white"} />
          </TouchableOpacity>
        </View>
      
      {/* -------------Messages display--------------- */}
      <ScrollView
        // transform reverses the scroll view
        style={{ transform: [{ scaleY: -1 }], marginTop: 50, marginBottom: 60 }}
      >
        {/* reverses the view so that it could follow the scroll view pattern */}
        <View style={{ transform: [{ scaleY: -1 }] }}>
          {/*Loop through the chatlist(contains objects with properties)*/}
          {/* Display the messages based on the properties of the object */}

          {chatlist.map((item) => (
            <Msg
              key={chatlist.indexOf(item)}
              incomingMsg={item.incomingMsg}
              msg={item.msg}
              sentMsg={item.sentMsg}
              password={item.password}
              progress={item.progress}
              onOrderComplete={OrderCompletion}
            />
          ))}
        </View>
      </ScrollView>
    
    </SafeAreaView>
  );
};

export default Chatbot;
