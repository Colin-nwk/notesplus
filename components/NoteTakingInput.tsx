import React from "react";
import { TextInput, Button, StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import { getNote } from "../services/NoteStoreService";
import { saveNote } from "./../services/NoteStoreService";

type Props = {
  noteId: string | undefined;
};

export const NoteTakingInput: React.FC<Props> = ({ noteId }) => {
  const [text, setText] = useState<string>("");

  useEffect(() => {
    if (noteId) {
      getNote(noteId).then((result) => setText(result?.text ?? ""));
    }
  }, []);
  const saveNoteHandler = () => {
    saveNote(text, noteId);
  };
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
      <Button title="Save Note" onPress={saveNoteHandler} />
    </>
  );
};

const styles = StyleSheet.create({
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
