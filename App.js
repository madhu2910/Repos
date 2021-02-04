import React from "react";
import { StyleSheet, Text, View ,TouchableNativeFeedback, Image, SafeAreaView, Button, Alert} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Button
       color="orange"
      title="Click Me" 
      onPress={() =>
       Alert.alert("My title", "My message",[
         { text: "Yes", onPress:() => console.log("Yes")},
         { text: "No", onPress:() => console.log("No")},
       ])
      }
      />
      <Text>Hello React native
        </Text>
        <TouchableNativeFeedback onPress={() => console.log("Image tapped")}>
        <View style={{width: 200, height: 70, backgroundColor: "dodgerBlue"}}></View>
        </TouchableNativeFeedback>
      <Image 
      blurRadius={10}
      fadeDuration= {1000}
      source ={{
        width: 200,
        height: 300,

       uri: "https://picsum.photos/seed/picsum/200/300",
       }}
       />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "dodgerblue",
    alignItems: "center",
    justifyContent: "center",
  },
});
