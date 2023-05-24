import React, { useLayoutEffect } from "react";

import { NoteTakingInput } from "../components/NoteTakingInput";

import { useNavigation, useRoute } from "@react-navigation/native";
import { EditScreenRouteProp, ScreenNavigationProp } from "../shared/types";
import { Button } from "react-native";
import { deleteNote } from "../services/NoteStoreService";
import { DeleteNote } from "../components/DeleteNote";

export const EditNoteScreen: React.FC = () => {
  const route = useRoute<EditScreenRouteProp>();

  const navigation = useNavigation<ScreenNavigationProp>();
  const noteId = route.params.noteId;
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: noteId ? "Edit Note" : "New Note",
      headerRight: () => (noteId ? <DeleteNote noteId={noteId} /> : <></>),
    });
  }, [navigation]);
  return (
    <>
      <NoteTakingInput noteId={noteId} />
    </>
  );
};
