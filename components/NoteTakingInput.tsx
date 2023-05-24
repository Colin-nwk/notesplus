import React, { useLayoutEffect } from "react";
import { TextInput, Button, StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import { getNote } from "../services/NoteStoreService";
import { saveNote } from "./../services/NoteStoreService";
import { useNavigation } from "@react-navigation/native";
import { ScreenNavigationProp } from "../shared/types";

type Props = {
  noteId: string | undefined;
};

export const NoteTakingInput: React.FC<Props> = ({ noteId }) => {
  const [text, setText] = useState<string>("");

  const navigation = useNavigation<ScreenNavigationProp>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <Button title="back" onPress={saveNoteHandler} />,
    });
  }, [navigation, text, noteId]);

  const saveNoteHandler = async () => {
    await saveNote(text, noteId);
    // navigation.navigate("Home");
    if (navigation.canGoBack()) navigation.goBack();
  };

  useEffect(() => {
    if (noteId) {
      getNote(noteId).then((result) => setText(result?.text ?? ""));
    }
  }, []);

  return (
    <>
      <TextInput
        autoFocus={true}
        autoCorrect={true}
        multiline={true}
        style={styles.textinput}
        value={text}
        onChangeText={setText}
      />
      {/* <Button title="Save Note" onPress={saveNoteHandler} /> */}
    </>
  );
};

const styles = StyleSheet.create({
  textinput: {
    flex: 1,
    backgroundColor: "#ffb70342",
    width: "100%",

    fontSize: 16,
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 20,
  },
});
