import AsyncStorage from "@react-native-async-storage/async-storage";
import { NoteStore } from "../shared/types";


const STORE_KEY = 'TAKE_NOTES_STORE'

export const getNote = async (id:string) => {
    const noteStore = await getAllNotes()
    const note = noteStore.notes.find(node => node.id === id)
    return note;

};

export const getAllNotes = async () => {
    const storeItem = await AsyncStorage.getItem(STORE_KEY);
    if (storeItem) {
        return JSON.parse(storeItem) as NoteStore
    }
    return { notes: [] }
};

export const saveNote = async (text: string, noteId: string | undefined) => {
    const noteStore = await getAllNotes()
    if (noteId) {
        // edit
        const noteIndex = noteStore.notes.findIndex(note => note.id === noteId)
        noteStore.notes.splice(noteIndex,1,{id: noteId, text: text})
    } else {
        // add
        noteStore.notes.push({id: Date.now().toString(), text:text})

    }

    await AsyncStorage.setItem(STORE_KEY, JSON.stringify(noteStore));
};

