import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { useState } from "react";
export default function App() {
  const [text, setText] = useState<string>("");
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>

      <StatusBar style="auto" />
      <TextInput
        multiline={true}
        style={styles.textinput}
        value={text}
        onChangeText={setText}
      />
      <Button
        title="Save Note"
        onPress={() => {
          alert(text);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textinput: {
    backgroundColor: "#ffb70342",
    width: "100%",
    height: 200,
    fontSize: 16,
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 20,
  },
});
