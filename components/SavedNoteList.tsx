import { useFocusEffect, useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import { getAllNotes } from "../services/NoteStoreService";
import { Note, ScreenNavigationProp } from "../shared/types";

export const SavedNoteList: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  useFocusEffect(() => {
    getAllNotes().then((result) => setNotes(result.notes));
  });
  const navigation = useNavigation<ScreenNavigationProp>();

  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          {notes.map((note) => (
            <Pressable
              key={note.id}
              onPress={() =>
                navigation.navigate("EditNote", { noteId: note.id })
              }
            >
              <View style={styles.row}>
                <Text style={styles.text}>
                  {note.text.length === 0 ? "(Blank note)" : note.text}
                </Text>
              </View>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
  },
  row: {
    width: "90%",
    borderBottomWidth: 1,
    borderBottomColor: "#e6e6e6",
    height: 90,
    justifyContent: "center",
    alignSelf: "center",
  },
  text: {
    paddingVertical: 20,
    width: "100%",
    fontSize: 16,
  },
});
