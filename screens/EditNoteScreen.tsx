import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NoteTakingInput } from "../components/NoteTakingInput";

type Props = {};

export const EditNoteScreen: React.FC = (props: Props) => {
  const saveNote = async (text: string) => {
    await AsyncStorage.setItem("note", text);
  };
  return (
    <>
      <NoteTakingInput saveNote={saveNote} />
    </>
  );
};
