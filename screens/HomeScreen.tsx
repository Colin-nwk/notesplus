import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { Text, Button, View } from "react-native";
import { ScreenNavigationProp } from "../shared/types";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const HomeScreen: React.FC = () => {
  const navigation = useNavigation<ScreenNavigationProp>();
  const [noteText, setNoteText] = useState<string>();

  useEffect(() => {
    getNote().then((result) => setNoteText(result ?? ""));
  }, []);
  const getNote = async () => {
    return await AsyncStorage.getItem("note");
  };

  return (
    <>
      <View>
        <Text>{noteText}</Text>
      </View>
      <Button
        onPress={() => navigation.navigate("EditNote")}
        title="New Note"
      />
    </>
  );
};
