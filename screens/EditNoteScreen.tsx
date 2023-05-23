import React from "react";

import { NoteTakingInput } from "../components/NoteTakingInput";

import { useRoute } from "@react-navigation/native";
import { EditScreenRouteProp } from "../shared/types";

export const EditNoteScreen: React.FC = () => {
  const route = useRoute<EditScreenRouteProp>();
  const noteId = route.params.noteId;
  return (
    <>
      <NoteTakingInput noteId={noteId} />
    </>
  );
};
