import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  incomingMsgBox: {
    flexDirection:'row',
    backgroundColor: "#D9D9D9",
    borderRadius: 10,
    padding: 8,
    alignSelf: "flex-start",
    marginBottom: 10,
    marginHorizontal: 5,
    alignItems:'center',
    // zIndex:100,
    maxWidth:'65%'
    
    // borderWidth: 0.5,
    // borderColor: "grey",
  },
  incomingMsgText: {
    color: "black",
    fontSize: 16,
  },
  SentMsgBox: {
    // transform: [{ scaleY: -1 }],
    backgroundColor: "#00CCBB",
    maxWidth: "75%",
    borderRadius: 10,
    padding: 8,
    alignSelf: "flex-end",
    marginBottom: 10,
    marginHorizontal: 5,
    flexDirection: "row",
    alignItems:'center',
    justifyContent:'space-between'
    // zIndex:100,
    // position:'relative'
  },
  sentMsgText: {
    color: "white",
    fontSize: 16,
    // position:'absolute'
    
  },
  typeMsgContainer: {
    flexDirection: "row",
    position: "absolute",
    // alignItems: "center",
    

    // marginTop:40
    // marginBottom:75
    top:698,     
    // transform: [{ scaleY: -1 }]
  },
  typeMsgBox: {
    borderWidth: 0.8,
    borderColor: "grey",
    padding: 10,
    width: "76%",
    borderRadius: 10,
    borderBottomLeftRadius: 10,
    marginLeft: 10,
    // position: "absolute",
    // top:'1%',
  },
  sendBtn: {
    width: "12%",
    // height:'30%',
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 15,
    borderRadius: 400,
    // position: "absolute",
    padding: 9,
    // top: 700,
    // left: 280,
  },
  sendTxt: {
    color: "white",
    width:20
  },
});

export default styles;
