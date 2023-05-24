import { useNavigation } from "@react-navigation/native";
import React from "react";

import { ScreenNavigationProp } from "../shared/types";

import { SavedNoteList } from "../components/SavedNoteList";

export const HomeScreen: React.FC = () => {
  const navigation = useNavigation<ScreenNavigationProp>();

  return (
    <>
      <SavedNoteList />
      {/* <Button
        onPress={() => navigation.navigate("EditNote")}
        title="New Note"
      /> */}
    </>
  );
};
